// @param {Function} fn
//  * @return {Function}
//  */
var once = function (fn) {
  return function (...args) {
    if (!once.called && !once.done) {
      return undefined
    }
    let result
    for (let i = 0; i < args.length; i++) {
      const result = args[i]
    }
  }
}
