const fs = require('fs').promises
const ejs = require('ejs')

const baseManifest = require('../template/manifest.json')

const extensionRegex = /.+?\.(.+?)$/

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
    fs.readFile('src/template/index.ejs', 'utf8') // Index
      .then((template) => ejs.render(template, indexData))
      .then((rendered) => fs.writeFile('public/index.html', rendered)),
    fs.writeFile('public/manifest.json', JSON.stringify(manifest)), // Manifest
    fs.readFile(opts.assets.icon || 'src/template/favicon.ico') // Favicon
      .then((buffer) => fs.writeFile('public/favicon.ico', buffer)),
    opts.assets.banner ? fs.readFile(opts.assets.banner) // Banner
      .then((buffer) => fs.writeFile('src/assets/banner.' + opts.assets.banner.match(extensionRegex)[1], buffer)) : null,
    fs.writeFile('src/static/util/docdata.json', JSON.stringify(data)), // Doclet data
    opts.assets.readme ? fs.readFile(opts.assets.readme, 'utf8') // README
      .then((readme) => fs.writeFile('src/static/util/README.md', readme)) : fs.writeFile('src/static/util/README.md', '')
  ])
}

module.exports = compileDocData
