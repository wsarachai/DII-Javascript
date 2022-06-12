'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class Student extends Person {
  university = 'Chiang Mai University';
  #studyHours = 0;
  #course;
  static numSubjects = 0;

  constructor(fullName, birthYear, startyear, course) {
    super(fullName, birthYear);

    this.startyear = startyear;

    this.#course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName}, I study at ${this.#course} at ${
        this.university
      }`
    );
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  #makeCoffee() {
    console.log(`Here is a coffee for youe 😀`);
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = test >= 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student('John Doe', 2020, 2037, 'Computer Science');

console.log(student);
student.introduce();
