const fs = require('fs').promises

function cleanup () {
  const paths = [
    'public/index.html',
    'public/manifest.json',
    'public/favicon.ico',
    'src/static/util/docdata.json',
    'src/static/util/README.md'
  ]

  return Promise.all(paths.map((p) => fs.unlink(p)))
}

module.exports = cleanup
