const env = require('jsdoc/env')
const path = require('jsdoc/path')
const helper = require('jsdoc/util/templateHelper')

const {
  compileDocData,
  buildSite,
  cleanup
} = require('./src/util/')

exports.publish = async function (taffyData) {
  taffyData = helper.prune(taffyData)
  const data = taffyData().get()

  const {
    name = 'Nightshade Docsite',
    longName = 'Nightshade Docsite',
    desc = 'A docsite running on the Nightshade template',
    assets: {
      icon,
      banner,
      readme
    } = {},
    theme: {
      foreground = '#000000',
      background = '#ffffff'
    } = {},
    repository = ''
  } = env.conf.templates

  const {
    destination
  } = env.opts

  if (!destination) console.error('ERROR: Please supply a proper output directory')

  await compileDocData(data, {
    name,
    longName,
    desc,
    assets: {
      icon: icon ? path.join(env.pwd, path.normalize(icon)) : null,
      banner: banner ? path.join(env.pwd, path.normalize(banner)) : null,
      readme: readme ? path.join(env.pwd, path.normalize(readme)) : null
    },
    theme: {
      foreground,
      background
    },
    repository
  })

  await buildSite(path.join(env.pwd, path.normalize(destination)))

  await cleanup()
}
