//function as a value and anonymous function
var asValue = (function() {
    //arithmetic and comparison operators
    var a = "10";
    var b = 10;
    var c = a === b;
    var d = a == b;
    console.log(c);
    console.log(d)
        //explicit coercion
    console.log(Number(a));
    //implicit coercion
    var e = a * b
    console.log(e);
})();