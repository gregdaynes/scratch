import Benchmark from 'benchmark'
import main from './main.js'

new Benchmark.Suite()
  // functions under test for benchmarking
  .add('main', main)
  .add('control', () => { hello: "world" })

  // reporters
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('---\n' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
