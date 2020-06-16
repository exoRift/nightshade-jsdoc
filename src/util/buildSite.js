const fs = require('fs').promises

const {
  execSync
} = require('child_process')

function buildSite (outputDir) {
  execSync('npm run build', [outputDir])

  return fs.rename('build/', outputDir)
}

module.exports = buildSite
