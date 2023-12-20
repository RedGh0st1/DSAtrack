// Create a class Ghost
//  Ghost objects are instantiated without any arugments
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantied
//  They are created with a default constructor

let Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][
    Math.floor(Math.random() * 4)
  ]
  this.show = function () {
    console.log(this.color)
  }
}
ghost = new Ghost()
ghost.color //=> "white" or "yellow" or "purple" or "red"

ghost.show()
