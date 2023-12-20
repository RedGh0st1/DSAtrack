// write a function createCounter. It should accept an initial integer init. It should return an object with three functions
// the Three functions are:
// increment()-- increases the current value by 1 and then returns it.
// decrement() -- decreases the current value by 1 and then returns it.
// reset() - resets the current value to init and then returns it.

var createCounter = function (init) {
  return {
    count: init,
    increment: function () {
      this.count++
      console.log("Incremented counter")
    },
    decrement: function () {
      this.count--
      console.log("Decremented Counter")
    },

    reset: function () {
      this.count = init
      console.log(`Resetted from ${oldCount} to ${this.count}`)
      return this.count
      // This line is not needed as we can directly access `this` object in arrow methods
      // But I have kept for better understanding of how these work
      // Also note that if you want to use any other method inside an arrow method like below example
      // You need to bind them with their respective objects using `.bind(object)` or pass those
      //   this.count
    },
  }
}
