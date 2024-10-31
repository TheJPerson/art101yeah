// index.js - Functions
// Author: Judah Hetts
// Date: October 28, 2024



  console.log("Main function started.");  
  // the code that makes everything happen
  //sortName: function that shuffles names
  function sortUserName () {
      var userName = window.prompt ("Hello. Your name needs some fixer-uppering. Give me your name and let me do that for you:"); 
      console.log("userName =", userName);
      //string to Array
      var nameArray = userName.split(''); 
      console.log("nameArray=", nameArray); 
      var nameArraySort = nameArray.sort(); 
      //join array to prior string
      var nameSorted = nameArraySort.join(''); 
      console.log("nameSorted =", nameSorted); 
      return nameSorted;
  }


  document.writeln(sortUserName(), "</br>"); 
  




