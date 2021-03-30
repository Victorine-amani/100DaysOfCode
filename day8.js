//closures
function mother(x) {
    function child(y) {
        return y ** x
    }
    return child;
}
var caller = mother(2);
console.log(caller(7));

function big() {
    var name = "Victorine Amani"

    function small() {
        var age = 20
        return name + " is " + age + " years old"
    }
    return small;
}
var hold = big();
console.log(hold());

function drive(x) {
    function conditions() {
        if (x >= 18 && x <= 50) {
            console.log("Can drive")

        } else {
            console.log("get a chauffeur")
        }
    }
    return conditions;
}
var call = drive(60);
console.log(call());