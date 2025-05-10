import test from 'node:test'
import assert from 'node:assert/strict'
import subject from './main.ts'

test('[Example Test]', () => {
  const thing = subject()

  assert.deepEqual(thing, { hello: 'world' })
})
