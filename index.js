//  Arrow functions
let grade = (marks) => {
    if (marks >= 50 && marks == 100) {
        console.log("Pass");
    } else if (marks <= 49 && marks == 30) {
        console.log("Work harder")
    } else if (marks <= 29) {
        console.log("Go home!")
    } else {
        console.log("results canceled")
    }

}
grade(77);

function walk() {
    console.log("Everyone must walk at four pm");
}

var student = {
    age: 22,
    name: "Victorine Amani",
    walk: walk,

}
console.log(student.name);
console.log(student.age);
console.log(student.walk());

var kiosk = function kibanda() {
    console.log("I have a kibanda")
}
kiosk();

function Student(name, grades, age, colourCode) {
    this.name = name,
        this.grades = grades,
        this.age = age,
        this.colourCode = colourCode,
        this.welcome = function() {
            console.log(`${this.name} is in the ${this.colourCode} list because she is a ${this.grades} grade student and she is ${this.age} years old`);

        }

}

var fresher = new Student("Victorine Amani", "B", 20, "Green");
console.log(fresher.welcome());
var newbie = new Student("Elizabeth Imaa", "C", 22, "Orange");
console.log(newbie.welcome())
    //modules
function User() {
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;
    }
    var publicApi = {
        login: doLogin,
    }
    return publicApi;
}
var person = User();
person.login("Victorine Amani", "victorine21");