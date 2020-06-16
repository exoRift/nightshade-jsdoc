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
    manifest: {
      name = 'Nightshade Docsite',
      longName = 'Nightshade Docsite',
      desc = 'A docsite running on the Nightshade template',
      assets: {
        icon,
        banner
      } = {},
      theme: {
        foreground = '#000000',
        background = '#ffffff'
      } = {}
    } = {}
  } = env.conf.templates

  const {
    destination
  } = env.opts

  if (!destination) console.error('ERROR: Please supply a proper output directory')

  const outdir = path.join(env.pwd, path.normalize(destination))

  // await compileDocData(data, {
  //   name,
  //   longName,
  //   desc,
  //   assets: {
  //     icon,
  //     banner
  //   },
  //   theme: {
  //     foreground,
  //     background
  //   }
  // })

  // await buildSite(outdir)

  // await cleanup()
}
