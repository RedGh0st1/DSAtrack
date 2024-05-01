//write a constructor function for a computer
// computer has
// a screen width
// a screen height
// a home
// have a function to print "hello world"

// sudo
// create a constructor function with three params
// assign those params to keys on each instance of my computer
// create a function to print hello world plus
function Computer(screenWidth, screenHeight, name) {
  this.name = name;
  this.screenWidth = screenWidth;
  this.screenHeight = screenHeight;

//   this.print = ()=> {
//     return "hello world";
//   };

//The prototype property of a constructor function in JavaScript is used to add methods or properties that will be shared by all instances created using that constructor function. 
Computer.prototype.print = function.print(){
    return "ha ha i printed this!!"
}
}
s
// class and constructor functions are very similar
class Computer{
    constructor(width,height,name){
        this.name=name;
        this.width=width;
        this.height=height;
    }
   print(){
    return  `The ${this.name} is ${this.width} inches wide and ${this.height} inches tall.`
   }
}

let myMacComputer = new Computer(27,19, macbook);
let yourWindowsPC = new Computer(30,45,"windows PC");
console.log(myMacComputer.print());
console.log(yourWindowsPC.print());