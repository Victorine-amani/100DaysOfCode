//functions,objects and methods
//functions
//....for loops
/*function loops() {
    let mix = ["Victorine", "Kenyan", "student", "AkiraChix"];
    for (var i = 0; i < mix.length; i++) {
        console.log(mix[i]);
    }
}
loops();
//objects and methods
var personal = {
    name: "Victroine Amani",
    age: 20,
    school: "AkiraChix",
    nationality: "Kenya",
    info: function() {
        console.log("My name is " + this.name + " I am " + this.age + " years old,studying at " + this.school + " in " + this.nationality);
    }
}
personal.info(); */

//nested functionsfunction getGrade(marks) {
function getGrade(marks) {
    let grades;
    if (marks >= 80) {
        grades = "A";
        console.log(grades)
    } else if (marks >= 70 && marks < 80) {
        grades = "B",
            console.log(grades)
    } else if (marks >= 60 && marks < 70) {
        grades = "C";
        console.log(grades);
    } else if (marks >= 50 && marks < 60) {
        grades = "D";
        console.log(grades)
    } else if (marks >= 40 && marks < 50) {
        grades = "E";
        console.log(grades)
    } else {
        grades = "F";
        console.log(grades)
    }
    return grades;
}
getGrade(90)