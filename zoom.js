//functions as values and closure
//functions as values
var name = "Victorine Amani";
var age = 19
var grades = (function(x) {

    var sentence = name + " is a " + age + " year old scoring " + x + " in her assesment "
    console.log(sentence);
})(99);
// closure
//parent function
function big(a) {
    //child function
    function small(b) {
        return a + b
    }
    return small;
}
var new_big = big("Hello");
//child function
console.log(new_big(" Victorine"));