"use strict";
function Person(firstName, secondName, yearOfBirth) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.yearOfBirth = yearOfBirth;
}
Person.prototype.age = function () {
  const currYear = new Date().getFullYear();
  return currYear - this.yearOfBirth;
};
function Student(firstName, secondName, yearOfBirth) {
  Person.call(this, firstName, secondName, yearOfBirth);
  this.gradesArray = [];
  this.attendance = new Array(25).fill(null);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.avarageGrage = function () {
  let result = 0;
  if (this.gradesArray.length === 0) {
    return result;
  }
  this.gradesArray.forEach((element) => {
    result += element;
  });
  return result / this.gradesArray.length;
};

Student.prototype.present = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = true;
  } else {
    console.log("Attendance is full");
  }
};

Student.prototype.absent = function () {
  const index = this.attendance.indexOf(null);
  if (index !== -1) {
    this.attendance[index] = false;
  } else {
    console.log("Attendance is full");
  }
};

Student.prototype.summary = function () {
  const avarageGrage = this.avarageGrage();
  const attendanceClasses = this.attendance.filter(
    (element) => element === true
  ).length;
  const totalClases = this.attendance.filter(
    (element) => element !== null
  ).length;
  const attendanceRate = attendanceClasses / totalClases;

  if (avarageGrage > 90 && attendanceRate > 0.9) {
    return "Well done!";
  }

  if (avarageGrage > 90 || attendanceRate > 0.9) {
  return "Good, but can be better.";
  } 

  return "Radish!";
};

// Examples

const student1 = new Student("John", "King", 1996);
student1.gradesArray = [100, 90, 80, 100, 95];

student1.present();
student1.present();
student1.absent();

console.log(
  student1.firstName +
    " " +
    student1.secondName +
    `'s result: ` +
    student1.summary()
);

const student2 = new Student("Mary", "Armstrong", 1999);
student2.gradesArray = [90, 85, 80, 0, 10];
student1.absent();
student1.present();

console.log(
  student2.firstName +
    " " +
    student2.secondName +
    " is " +
    student2.age() +
    `. Their result: ` +
    student2.summary()
);

const student3 = new Student("Joe", "Wisley", 2000);
student3.gradesArray = [100, 100, 100, 100, 100];

student3.present();
student1.present();

console.log(
  student3.firstName +
    " " +
    student3.secondName +
    " is " +
    student3.age() +
    `. Their result: ` +
    student3.summary()
);
