import { wordCount, timeCalc } from '../src/index'

describe('word-counter test', () => {
  it('should count CJK at end', () => {
    expect(wordCount('this is 中文')).toEqual(4)
    expect(timeCalc('this is 中文')).toEqual(1)
  })

  it('should count CJK at start', () => {
    expect(wordCount('中文 is this')).toEqual(4)
    expect(timeCalc('中文 is this')).toEqual(1)
  })

  it('should count CJK mix', () => {
    expect(wordCount('this 中文 is a 单词')).toEqual(7)
    expect(timeCalc('this 中文 is a 单词')).toEqual(1)
  })

  it('should count 0 words', () => {
    expect(wordCount('--==,./][+。""|')).toEqual(0)
    expect(timeCalc('--==,./][+。""|')).toEqual(0)
    expect(wordCount('')).toEqual(0)
    expect(timeCalc('')).toEqual(0)
  })

  it('should count html text', () => {
    expect(wordCount('<p>Hello <b>world!</b></p>')).toEqual(2)
  })

  it('should include link text', () => {
    expect(wordCount('<p><a href="/hello-world">Hello <b>world!</b></a></p>')).toEqual(2)
  })

  it('should ignore attributes', () => {
    expect(wordCount('<span a1="Hello World" b2="b" title="nd">Text 1 2 3<span>')).toEqual(4)
  })

  it('should ignore images', () => {
    expect(wordCount('<img src="/hello" alt="Some text" />Hello')).toEqual(1)
  })

  it('should ignore attributes', () => {
    expect(wordCount('<span a1="Hello World" b2="b" title="nd">Text 1 2 3<span>')).toEqual(4)
  })

  it('should transform count', () => {
    expect(wordCount('this 中文 is a 单词', count => count * 2)).toEqual(14)
  })

  it('should correctly calculate reading time', () => {
    expect(
      timeCalc('this 中文 is a 单词', {
        cn: 3,
        en: 2
      })
    ).toEqual(3)
  })
})
