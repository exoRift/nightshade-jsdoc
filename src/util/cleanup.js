const fs = require('fs').promises

function cleanup () {
  const paths = [
    'src/static/public/index.html',
    'src/static/public/manifest.json',
    'src/static/public/favicon.ico',
    'src/static/pages/util/docdata.json'
  ]

  return Promise.all(paths.map((p) => fs.unlink(p)))
}

module.exports = cleanup
