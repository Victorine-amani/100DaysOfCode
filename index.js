//functions,objects and methods
//functions
//....for loops
function loops() {
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
personal.info();