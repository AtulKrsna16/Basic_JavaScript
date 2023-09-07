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

let array1 = ["item1","item2","item3"]
let array2 = [...array1] // this is spread operator ,is used to copy array
console.log(array1)
array2.push("item4") // add the element
console.log(array2)

let array3 = [...array1,"item5", "item6"] // for concatenate
console.log(array3);






