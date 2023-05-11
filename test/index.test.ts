import { describe, expect, it } from 'vitest'
import classwind from '../src'

describe('classwind', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })

  it('(compat) keeps object keys with truthy values', () => {
    const out = classwind({ a:true, b:false, c:0, d:null, e:undefined, f:1 });
    expect(out).toEqual('a f')
  });
  
  it('(compat) joins arrays of class names and ignore falsy values', () => {
    const out = classwind('a', 0, null, undefined, true, 1, 'b');
    expect(out).toEqual('a 1 b')
  });
  
  it('(compat) supports heterogenous arguments', () => {
    expect(classwind({ a:true }, 'b', 0)).toEqual('a b');
  });
  
  it('(compat) should be trimmed', () => {
    expect(classwind('', 'b', {}, '')).toEqual('b');
  });
  
  it('(compat) returns an empty string for an empty configuration', () => {
    expect(classwind({})).toEqual('');
  });
  
  it('(compat) supports an array of class names', () => {
    expect(classwind(['a', 'b'])).toEqual('a b');
  });
  
  it('(compat) joins array arguments with string arguments', () => {
    expect(classwind(['a', 'b'], 'c')).toEqual('a b c');
    expect(classwind('c', ['a', 'b'])).toEqual('c a b');
  });
  
  it('(compat) handles multiple array arguments', () => {
    expect(classwind(['a', 'b'], ['c', 'd'])).toEqual( 'a b c d');
  });
  
  it('(compat) handles arrays that include falsy and true values', () => {
    expect(classwind(['a', 0, null, undefined, false, true, 'b'])).toEqual( 'a b');
  });
  
  it('(compat) handles arrays that include arrays', () => {
    expect(classwind(['a', ['b', 'c']])).toEqual( 'a b c');
  });
  
  it('(compat) handles arrays that include objects', () => {
    expect(classwind(['a', { b:true, c:false }])).toEqual( 'a b');
  });
  
  it('(compat) handles deep array recursion', () => {
    expect(classwind(['a', ['b', ['c', { d:true }]]])).toEqual( 'a b c d');
  });
  
  it('(compat) handles arrays that are empty', () => {
    expect(classwind('a', [])).toEqual( 'a');
  });
  
  it('(compat) handles nested arrays that have empty nested arrays', () => {
    expect(classwind('a', [[]])).toEqual( 'a');
  });
})