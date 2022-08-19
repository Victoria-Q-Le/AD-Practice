///////// The Class keyword/////////
class Student { //class is the blueprint
  constructor(firstName, lastName, year){
    this.firstName = firstName; //the keyword "this" inside a constructor, "this" prefers to the individual instance of the class
    this.lastName = lastName;
    this.year = year
  }
}

let firstStudent = new Student("Victoria", "Le", 4) //the "new" keyword has to be used in order to instanciate Object from a class.


//////////Adding Instance Methods/////////////
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this. tardies = 0
    this.scores = []
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score){
    this.scores.push(score)
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b})
    return sum/this.scores.length
  }
}

let firstStudent = new Student("Victoria", "Le", 4)
firstStudent.fullName()
firstStudent.markLate() // 1
firstStudent.addScore(92)


////////////////Adding Class Methods/////////////////////
// -Using the "static" key word in front of the method definition
// -Define method and functionality that permanent to classes but not neccessary to the individual instances
class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  static distance (a,b){
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx,dy)
  }
}
 const p1 = new Point(5,5)
 const p2 = new Point(10,10)


///////////////////////////////RECAP/////////////////////////
// - Classes are blueprints that when created make objects known as instances
// - Classes are created with the new keyword
// - The constructor function is a special function that gets run when the class is instantiated.
// - Instance methods can be added to classes similar to methods in objects
// - Class methods can be added using static keyword
