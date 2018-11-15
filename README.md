# Words-Counter

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/jo0ger/word-counter.svg)](https://travis-ci.org/jo0ger/word-counter)
[![Coveralls](https://img.shields.io/coveralls/jo0ger/word-counter.svg)](https://coveralls.io/github/jo0ger/word-counter)
[![Dev Dependencies](https://david-dm.org/jo0ger/word-counter/dev-status.svg)](https://david-dm.org/jo0ger/word-counter?type=dev)

[![NPM](https://nodei.co/npm/words-counter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/words-counter/)
[![NPM](https://nodei.co/npm-dl/words-counter.png?months=9&height=3)](https://nodei.co/npm/vue-quill-editor/)


A lib for counting your words and reading time

## Install

``` bash
// npm
$ npm install words-counter

// yarn
$ yarn add words-counter
```

## Usage

``` js
import { wordCount, timeCalc } from 'words-counter'

const content = 'this 中文 is a 单词'

const count = wordCount(content, count => {
  return count * 2
}) // the origin count is 7, the transformed data is 14

const time = timeCalc(content, {
  cn: 300, // the number of cn words per minute read
  en: 160 // the number of en words per minute read
}) // time is 1
```

## License

MIT
