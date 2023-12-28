import Benchmark from 'benchmark'
import classnames from 'classnames'
import classcat from 'classcat'
import classwind from 'classwind'
import clsx from 'clsx'
import localClasswind from '../dist/index.cjs'

function bench(name, ...args) {
  console.log(`\n# ${name}`)
  new Benchmark.Suite()
    .add('classcat*         ', () => classcat.apply(classcat, [args]))
    .add('classnames        ', () => classnames.apply(classnames, args))
    .add('clsx              ', () => clsx.apply(clsx, args))
    .add('classwind         ', () => classwind.apply(classwind, args))
    .add('classwind (local) ', () => localClasswind.apply(localClasswind, args))
    .on('cycle', e => console.log(`  ${e.target}`))
    .run()
}

bench(
  'Strings',
  'foo',
  '',
  'bar',
  'baz',
  'bax',
  'bux',
  undefined,
  null,
  Number.NaN,
)

bench(
  'Objects',
  { foo: true, bar: true, bax: true, bux: false },
  { 'baz': true, 'bax': false, 'bux': true, '': true },
)

bench('Arrays', ['foo', 'bar'], ['baz', 'bax', 'bux'])

bench('Nested Arrays', ['foo', ['bar']], ['baz', ['bax', ['bux']]])

bench(
  'Nested Arrays w/ Objects',
  ['foo', { bar: true, bax: true, bux: false }],
  ['bax', { bax: false, bux: true }, [{ foo: false, bar: true }]],
)

bench('Mixed', 'foo', 'bar', { bax: true, bux: false }, [
  'baz',
  { bax: false, bux: true },
])

bench(
  'Mixed (Bad Data)',
  'foo',
  'bar',
  undefined,
  null,
  Number.NaN,
  () => {},
  class Error {},
  { bax: true, bux: false, 123: true },
  ['baz', { bax: false, bux: true, abc: null }, {}],
)
