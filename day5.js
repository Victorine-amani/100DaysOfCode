//if statements
//if.....
function kgs(weight) {
    if (weight >= 70) {
        console.log("Go to the gym")
    }

}
kgs(73);
//if ...else
function grades(grade) {
    if (grade >= 50 && grade <= 100) {
        console.log("Pass!");
    } else {
        console.log("Try harder!!");
    }
}
grades(100);
//if esle if else
function scores(score) {
    if (score >= 10) {
        console.log(score + 1);
    } else if (score <= 5 && score == 3) {
        console.log("Replay");
    } else {
        console.log("End of trials");
    }
}
scores(1);
//nested if else statements
function signIn(age) {
    if (age >= 18 && age <= 50) {
        if (age == 25) {
            console.log("perfect");
        } else {
            console.log("Welcome");
        }
    } else {
        console.log("Registration failed");
    }
}
signIn(17);