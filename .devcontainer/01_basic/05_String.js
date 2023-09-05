let firstName = "Atul"
console.log(firstName[2]) // for taking character from string

console.log(firstName.length); // to know the length of string
console.log(firstName[firstName.length - 1]); // to known the last element of the string 

// new way to defined string
const name = new String('Atul-ak-com ')

console.log(name) //to priont string
console.log(name.__proto__) // know the prototype

console.log(name.length) // to know the length
console.log(name.toUpperCase()) // to covert upper case
console.log(name.charAt(2)); //to know the character
console.log(name.indexOf('t'));// to know the position 

//using slice for taking some part of string
// we are using same string
let anotherSting = name.slice(0,2)
console.log(anotherSting); //result shows in upper case because we convert upper case in the early steps

// let we are using trim for remove the white space in sting 
let myName = "   Atul   "
console.log(myName);
console.log(myName.length); //before trim
myName = myName.trim()
console.log(myName);
console.log(myName.length);

// using replace 
const url = "https://atul_kumar.com/atul%20kumar"
console.log(url); //before 'com' replace
console.log(url.replace('com' , 'in')); //after replace

console.log(url.includes('kumar')) // to know this word is exist or not ? ans true means yes exist
console.log(url.includes('arya')); // means not exist

console.log(name.split('-')); //splite on the basis of das(-) here // to break the break tthe sting

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++