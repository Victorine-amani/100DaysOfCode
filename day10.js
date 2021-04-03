const person = {
    firstName: "Hunter",
    secondName: "Achieng",
    age: 24,
    IQLevel: 100,
}
Object.defineProperty(person, "getName", {
    get: function() {
        return this.firstName;
    }
});
Object.defineProperty(person, "setName", {
    set: function(newName) {
        return this.secondName = newName;
    }
});
console.log(person.firstName);

person.setName = "Amani";
console.log(person.secondName);