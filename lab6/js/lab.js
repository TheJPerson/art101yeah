// index.js - Car thing
// Author: Judah Hetts
// Date: October 24, 2024



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  //Define Variables
myTransport = ["100% existent Toyota", "walking", "scooter", "bus"];


myRide = {
  make : "Toyota",
  model : "existent",
  color : "periwinkle",
  year : "2001",

  age : function (){
      return 2024 - this.year;
  }

}

//output 
document.writeln("Kinds of Transportation I Use:", myTransport, "</br>")
document.writeln("My Ride: <pre>", 
  JSON.stringify(myRide, null, '\t'), "</pre>");

}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen



  myTransport = [" 100% existent Toyota", " walking", " scooter", " bus"];


myRide = {
  make : "Toyota",
  model : "existent",
  color : "periwinkle",
  year : "2001",

  age : function (){
      return 2024 - this.year;
  }

}

//output 
document.writeln("Kinds of Transportation I Use:", myTransport, "</br>")
document.writeln("My Ride: <pre>", 
  JSON.stringify(myRide, null, '\t'), "</pre>");

}

// let's get this party started
main();
