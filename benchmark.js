import { Suite } from 'bench-node'
import main from './main.js'

const suite = new Suite()

suite
  .add('No-Op', () => {})
  .add('Main', () => {
    main()
  })

suite.run()
// async function run () {
//   await suite.run()
//
//   console.table(.table())
// }
//
// await run()
