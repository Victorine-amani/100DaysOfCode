//classes
class Person {
    constructor(name, age, family) {
        this.name = name,
            this.age = age,
            this.family = family;
    }

}
let person = new Person("Victorine Amani", 20, 5);
console.log(person.name);
console.log(person.age);
console.log(person.family);

//class inheritance using the "extends" keyword
class Student {
    constructor(name, grade, colourCode) {
        this.name = name,
            this.grade = grade,
            this.colourCode = colourCode;
        this.school = "AkiraChix"
    }
    orientation() {
        console.log(`${this.name} is on the ${this.colourCode} list beacuse he is an ${this.grade} grade student`);
        console.log(`You're now an ${this.school} student`)
    }

}
let student = new Student("Favour Kimori", "A", "Green");
student.orientation();





class Newbie extends Student {

}
let newbie = new Newbie("Joel John", "B", "Orange");
newbie.orientation();

class Fresher extends Student {
    constructor(name, grade, colourCode) {
        console.log("Hello and welcome to class inheritance");
        super(name, grade, colourCode);
    }
}
let fresher = new Fresher("Hezborn Omondi", "C", "Red");
fresher.orientation();

// overriding method/property
class Grading extends Student {
    constructor(name, grade, colourCode) {
        super(name, grade, colourCode);
        this.school = "Codehive2021";
    }
    orientation() {
        console.log(`${this.name} is on the ${this.colourCode} list beacuse she is an ${this.grade} grade student`);
        console.log(`You're now a student of ${this.school}`);
    }
}
let grading = new Grading("Elizabeth Imaa", "A", "Green");
grading.orientation();