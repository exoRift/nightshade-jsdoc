const path = require('jsdoc/path')

const {
  compileDocData,
  buildSite,
  cleanup
} = require('./src/util/')

exports.publish = async function (data, opts) {
  const {
    manifest: {
      name,
      longName,
      desc,
      assets: {
        icon,
        banner
      } = {},
      theme: {
        foreground,
        background
      } = {}
    } = {},
    outputDir
  } = opts

  if (!outputDir) console.error('ERROR: Please supply a proper output directory')

  const normalOutputDir = path.normalize(outputDir)

  await compileDocData(data, {
    name,
    longName,
    desc,
    assets: {
      icon,
      banner
    },
    theme: {
      foreground,
      background
    }
  })

  await buildSite(normalOutputDir)

  await cleanup()
}
