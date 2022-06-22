import test from "node:test"
import assert from "node:assert"
import subject from './main.js'

test('does thing', (t) => {
  const thing = subject()

  assert.strictEqual(1, 1)
})
