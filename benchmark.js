import { Bench } from 'tinybench'
import main from './main.js'

const bench = new Bench({ time: 100 })

bench
  .add('No-Op', () => {})
  .add('Main', () => {
    main()
  })

async function run () {
  await bench.warmup()
  await bench.run()

  console.table(bench.table())
}

await run()
