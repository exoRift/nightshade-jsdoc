const fs = require('fs')
const path = require('path')

const filenameRegex = /(.+?)\.js$/

const content = {}
const files = fs.readdirSync(__dirname)

for (let i = 0; i < files.length; i++) {
  if (files[i] !== 'index.js') content[files[i].match(filenameRegex)[1]] = require(path.join(__dirname, files[i]))
}

module.exports = content
