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
