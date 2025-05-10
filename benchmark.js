import { Suite } from 'bench-node'
import main from './main.ts'

const suite = new Suite()

suite
  .add('No-Op', () => {})
  .add('Main', () => {
    main()
  })

suite.run()
