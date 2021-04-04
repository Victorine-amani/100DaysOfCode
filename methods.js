function student(student_name, student_age) {
    this.name = student_name,
        this.age = student_age,
        this.grades = function(marks) {
            if (marks >= 50 && marks <= 100) {
                console.log(this.name + " Passed at the age of " + this.age);
            } else {
                console.log("Redo test");
            }
        }
}
let student1 = new student("Victorine Amani", 20);
let student2 = new student("Hunter Achieng", 24);

console.log(student1.grades(75));
console.log(student2.grades(33));
let person = student2;
person.name = "Favour Kimori"
console.log(person.grades(77));

student.prototype.gender = function(sex) {
    if (sex == "girl") {
        console.log("Female");
    } else {
        console.log("Male");
    }
}

console.log(student2.gender("girl"));