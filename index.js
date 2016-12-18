var multimatch = require('multimatch')

module.exports = plugin

function plugin (opts) {
  opts.pattern = opts.pattern || []
  opts.key = opts.key || 'filedata'

  return function (files, metalsmith, done) {
    var metadata = metalsmith.metadata()
    metadata[opts.key] = (metadata[opts.key] || {})
    var metatdataKey = metadata[opts.key]
    Object.keys(files)
        .filter(function (file) {
          return multimatch(file, opts.pattern).length > 0
        })
        .forEach(function (file) {
          var fileContents = files[file].contents.toString()
          metatdataKey[file] = fileContents
        })
    done()
  }
}