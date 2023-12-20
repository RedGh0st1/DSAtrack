// complete the get Info property and getInfo method/Info getter which should return johns age is 34
// and the name is "john"

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  //    getter is basically using get with info(){}
  get info() {
    return this.name + "s age is " + this.age
  }
}

// describe("Tests", () => {
//     it("test", () => {
//   var john = new Person('john', 34)
//   Test.assertEquals(john.info, 'johns age is 34')

//     });
//   });

let john = new Person("john", 34)
john.get()
