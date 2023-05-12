function toVal(mix: unknown): string {
  let k: string | number
  let y: string
  let str = ''

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  }
  else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      const len = mix.length
      for (k = 0; k < len; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    }
    else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ')
          str += k
        }
      }
    }
  }

  return str
}

export default function classwind(...args: unknown[]): string {
  let i = 0
  let tmp
  let x
  let str = ''
  const len = args.length
  for (; i < len; i++) {
    if ((tmp = args[i])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}
