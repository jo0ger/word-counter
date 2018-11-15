const htmlToText = require('html-to-text')

const CN_PATTERN = /[\u4E00-\u9FA5]/g
const EN_PATTERN = /[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g

function countContent(content: any = ''): [number, number] {
  let cn = 0
  let en = 0
  if (typeof content === 'string' && content.length > 0) {
    content = htmlToText.fromString(content, {
      wordwrap: false,
      ignoreImage: true,
      ignoreHref: true
    })
    cn = (content.match(CN_PATTERN) || []).length
    en = (content.replace(CN_PATTERN, '').match(EN_PATTERN) || []).length
  }
  return [cn, en]
}

export function wordCount(content: string, transformFn?: (count: number) => any): number | string {
  const [cn, en] = countContent(content)
  const count = cn + en
  if (typeof transformFn === 'function') {
    return transformFn(count)
  }
  return count
}

interface TimeConfig {
  cn?: number
  en?: number
}

export function timeCalc(content: string, { cn = 300, en = 160 }: TimeConfig = {}): number {
  const [cnCount, enCount] = countContent(content)
  const time = cnCount / cn + enCount / en
  return time === 0 ? 0 : time < 1 ? 1 : Math.ceil(time)
}
