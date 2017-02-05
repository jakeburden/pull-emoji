var emojione = require('emojione')
var emojify = emojione.shortnameToUnicode

function pullEmoji () {
  return function (read) {
    return function (end, cb) {
      read(end, function (end, data) {
        if (end) return cb(end, null)
        cb(null, emojify(data))
      })
    }
  }
}

module.exports = pullEmoji

