/****************************** BASIC ARRAY **************************/

let fruits = ["Apple" , "banana" , "coconut"]   // Array list

console.log(fruits[2]) // position of array
console.log(fruits); // name of the element in the array

fruits[1] = "mango"  // replace from the array list
console.log(fruits) // array after replace

console.log(typeof fruits) // to know the types of array
console.log(Array.isArray(fruits)) //to  know is array or not

fruits.push("cherry") // use for element in the array list
console.log(fruits); //add array element from the last element
fruits.unshift("gauva")
console.log(fruits); // add array element  in the begining

fruits.pop();
console.log(fruits); // remove the array element from the last element
fruits.shift();
console.log(fruits); // remove the array element from the begining

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





