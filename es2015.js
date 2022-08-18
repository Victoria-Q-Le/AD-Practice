///////// The Class keyword/////////
class Student { //class is the blueprint
  constructor(firstName, lastName, year){
    this.firstName = firstName; //the keyword "this" inside a constructor, "this" prefers to the individual instance of the class
    
    this.lastName = lastName;
    this.year = year
  }
}

let firstStudent = new Student("Victoria", "Le", 4) //the "new" keyword has to be used in order to instanciate Object from a class.
