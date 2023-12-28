type PrimitiveTypes = string | number | null | boolean | undefined
type ClasswindDictionary = Record<string, PrimitiveTypes>
type ClasswindArray = ClasswindValue[]
type ClasswindValue = ClasswindArray | ClasswindDictionary | PrimitiveTypes

function stringify(val: ClasswindValue) {
  if (typeof val === 'string' || typeof val === 'number')
    return val

  if (typeof val === 'object' && val !== null) {
    if (Array.isArray(val)) {
      const len = val.length
      let str = ''
      for (let i = 0; i < len; i++) {
        const className = stringify(val[i])
        if (!className)
          continue
        str = (str && (str += ' ')) + className
      }
      return str
    }
    else {
      let str = ''
      for (const key in val) {
        if (!val[key])
          continue
        str = (str && (str += ' ')) + key
      }
      return str
    }
  }
}

function classwind(...args: ClasswindValue[]) {
  let result = ''
  const len = args.length
  for (let i = 0; i < len; i++) {
    const className = stringify(args[i])
    if (!className)
      continue
    result = (result && (result += ' ')) + className
  }

  return result
}

export default classwind
