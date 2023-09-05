// "use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using node js not browser

// console.log(3 + 3) // code readability shou;ld be high


// let name = "Atul"
// let age = 25
// let isloggedIn = false


// number => 2 to power 53
// bigInt 
// string => ""
// boolean => true / false
// null => stsndlone value
// undefined => 
// symbol => unique


// object 

// console.log(typeof "Atul");
// console.log(typeof undefined); //undefined
// console.log(typeof null); // object


// stack // Heap

// let myYoutubeName = "codeandchemistry"
// let anothername = "Atul"

// console.log(myYoutubeName);
// console.log(anothername);

 let userOne = {
    emil : "user@google.com",
    upi : "user@axl"
 }

 let userTwo = userOne

 userTwo.email = "atul@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);