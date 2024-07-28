import test from 'node:test'
import assert from 'node:assert/strict'
import subject from './main.js'

test('[Example Test]', (t) => {
  const thing = subject()

  assert.deepEqual(thing, { hello: 'world' })
})
