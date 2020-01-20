'use strict'
const { ThreadWorker } = require('../lib/workers')

class MyWorker extends ThreadWorker {
  constructor () {
    super((data) => {
      for (let i = 0; i <= 10000; i++) {
        const o = {
          a: i
        }
        JSON.stringify(o)
      }
      // console.log('This is the main thread ' + isMainThread)
      return { ok: 1 }
    })
  }
}

module.exports = new MyWorker()