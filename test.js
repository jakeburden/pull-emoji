var test = require('tape')
var pull = require('pull-stream')
var emoji = require('./')

test('simple emoji test', function (t) {
  t.plan(3)

  pull(
    pull.values([
      ':pizza:',
      ':sparkles: beep boop :robot:',
      'cool :flag_black:'
    ]),
    emoji(),
    pull.collect(function (end, values) {
      t.same(values[0], '🍕')
      t.same(values[1], '✨ beep boop 🤖')
      t.same(values[2], 'cool 🏴')
    })
  )
})

