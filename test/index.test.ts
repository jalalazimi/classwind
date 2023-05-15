import { describe, expect, it } from 'vitest'
import classwind from '../src'

describe('classwind', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })

  it('handles class names with spaces', () => {
    expect(classwind('foo bar', 'baz')).toEqual('foo bar baz')
  })

  it('handles numeric class names', () => {
    expect(classwind(123, 'foo', 456)).toEqual('123 foo 456')
  })

  it('handles empty objects in arrays', () => {
    expect(classwind(['a', {}])).toEqual('a')
  })

  it('handles nested arrays with empty arrays', () => {
    expect(classwind(['a', [[]]])).toEqual('a')
  })

  it('handles null and undefined values in objects', () => {
    expect(classwind({ a: null, b: undefined, c: true })).toEqual('c')
  })

  it('keeps object keys with truthy values', () => {
    expect(classwind({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 })).toEqual('a f')
  })

  it('handles multiple object arguments', () => {
    expect(classwind({ a: true }, { b: true })).toEqual('a b')
  })

  it('joins arrays of class names and ignore falsy values', () => {
    expect(classwind('a', 0, null, undefined, true, 1, 'b')).toEqual('a 1 b')
  })

  it('supports heterogenous arguments', () => {
    expect(classwind({ a: true }, 'b', 0)).toEqual('a b')
  })

  it('should be trimmed', () => {
    expect(classwind('', 'b', {}, '')).toEqual('b')
  })

  it('returns an empty string for an empty configuration', () => {
    expect(classwind({})).toEqual('')
  })

  it('supports an array of class names', () => {
    expect(classwind(['a', 'b'])).toEqual('a b')
  })

  it('joins array arguments with string arguments', () => {
    expect(classwind(['a', 'b'], 'c')).toEqual('a b c')
    expect(classwind('c', ['a', 'b'])).toEqual('c a b')
  })

  it('handles multiple array arguments', () => {
    expect(classwind(['a', 'b'], ['c', 'd'])).toEqual('a b c d')
  })

  it('handles arrays that include falsy and true values', () => {
    expect(classwind(['a', 0, null, undefined, false, true, 'b'])).toEqual('a b')
  })

  it('handles arrays that include arrays', () => {
    expect(classwind(['a', ['b', 'c']])).toEqual('a b c')
  })

  it('handles arrays that include objects', () => {
    expect(classwind(['a', { b: true, c: false }])).toEqual('a b')
  })

  it('handles deep array recursion', () => {
    expect(classwind(['a', ['b', ['c', { d: true }]]])).toEqual('a b c d')
  })

  it('handles arrays that are empty', () => {
    expect(classwind('a', [])).toEqual('a')
  })

  it('handles nested arrays that have empty nested arrays', () => {
    expect(classwind('a', [[]])).toEqual('a')
  })
})
