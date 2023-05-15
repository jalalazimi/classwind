type PrimitiveTypes = string | number | null | boolean | undefined
type ClasswindDictionary = Record<string, PrimitiveTypes>
type ClasswindArray = ClasswindValue[]
type ClasswindValue = ClasswindArray | ClasswindDictionary | PrimitiveTypes

function concat(string: string, newString: string | number | boolean = '') {
  return (string && (string += ' ')) + newString
}
function arrayToString(arr: ClasswindArray) {
  let str = ''
  let val
  const len = arr.length
  for (let i = 0; i < len; i++) {
    val = stringify(arr[i])
    if (val)
      str = concat(str, val)
  }
  return str
}
function ObjectToString(obj: ClasswindDictionary | null) {
  let str = ''
  for (const key in obj) {
    if (obj[key])
      str = concat(str, key)
  }
  return str
}

function stringify(val: ClasswindValue) {
  if (typeof val === 'string' || typeof val === 'number')
    return val || ''
  if (typeof val === 'object') {
    if (Array.isArray(val))
      return arrayToString(val)
    else return ObjectToString(val)
  }
}

function classwind(...args: ClasswindValue[]) {
  let result = ''
  const len = args.length
  for (let i = 0; i < len; i++) {
    const className = stringify(args[i])
    if (className)
      result = concat(result, className)
  }

  return result
}

export default classwind
