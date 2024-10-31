// index.js - Lab 8
// Author: Judah Hetts
// Date: October 31, 2024 


var mapResults = "Your map results here:";
$("#output").html(mapResults); 

function divideThree(x){
    return (x % 3 == 0); 
}

console.log("Is 2 divisible by 3?", divideThree(2));
console.log("Is 9 divisible by 3?", divideThree(9));


array = [7, 9, 11, 222, 555, 1001]
console.log("My array", array); 

var result = array.map(divideThree);
console.log("Test of divisibility by 3 within array", result); 

var result = array.map(function(x){
    return x ** 1.5; 
})

console.log("Arrays Divided by 3:",result); 

