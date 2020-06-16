const fs = require('fs').promises
const ejs = require('ejs')

const baseManifest = require('../template/manifest.json')

function compileDocData (data, opts) {
  const indexData = {
    name: opts.name,
    desc: opts.desc,
    theme: opts.theme.foreground
  }
  const manifest = {
    ...baseManifest,
    short_name: opts.name,
    name: opts.longName,
    theme_color: opts.theme.foreground,
    background_color: opts.theme.background
  }

  return Promise.all([
    fs.readFile('src/template/index.ejs') // Index
      .then((template) => ejs.render(template, indexData))
      .then((rendered) => fs.writeFile('src/static/public/index.html', rendered, 'utf8')),
    fs.writeFile('src/static/public/manifest.json', JSON.stringify(manifest), 'utf8'), // Manifest
    fs.readFile(opts.assets.icon || 'src/template/favicon.ico') // Favicon
      .then((buffer) => fs.writeFile('src/static/public/favicon.ico', buffer)),
    fs.writeFile('src/static/pages/util/docdata.json', JSON.stringify(data), 'utf8') // Doclet data
  ])
}

module.exports = compileDocData
