// for .....loops
//for.....
function continent() {
    var countries = ["Argentina", "Malasya", "Congo", "Togo"]
    var text = "";
    for (i = 0; i < countries.length; i++)
        text += countries[i] + " ";
    console.log(text);
}
continent();
///for.... in

function place() {
    var town = ["Nairobi", "Kisumu", "Siaya", "Kiambu"]
    for (key in town);
    console.log(town)
}
place();
//do..while..loop 
function last() {
    let fruits = ["Mango", "Oranges", "Apple"]
    i = 0;
    var text = " ";
    do {
        text += fruits[i] + " ", i++;

    }
    while (fruits[i]);
    console.log(text);
}
last();