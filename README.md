# pull-emoji

> parse strings into emoji through a pull-stream interface


## Usage

```js
var pull = require('pull-stream')
var emoji = require('pull-emoji')

pull(
  pull.values([
    ':pizza:',
    ':sparkles: beep boop :robot:',
    'cool :flag_black:'
  ]),
  emoji(),
  pull.collect(function (end, values) {
    console.log(values[0])
    console.log(values[1])
    console.log(values[2])
  })
)
```

outputs

```
🍕
✨ beep boop 🤖
cool 🏴
```

## API

```js
var emoji = require('pull-emoji')
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install pull-emoji --save
```

## Acknowledgments

pull-emoji was inspired by emojione and pull-stream

## See Also

- [`Ranks/emojione`](https://github.com/Ranks/emojione)
- [`Dominic/pull-stream`](http://gitmx.com/%25xAFKL6PBr1CIzL5xGHZC5DFVWiXmc7R0MMnZnBwq%2Fyk%3D.sha256)

## License

MIT

