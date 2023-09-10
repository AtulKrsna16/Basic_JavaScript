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


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// for loop in array
let fruits = ["Apple","Banana","Chiku","graps"]
for (i=0;i<fruits.length;i++){
    // console.log(fruits[i])
    // console.log(fruits[i].toUpperCase());
}
// to push the all array into other array
let fruits2 = []
for (i=0; i<fruits.length; i++){
    fruits2.push(fruits)
}
console.log(fruits2);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const array4 = [1,2,3,4,5,6,7,[3,4,5],[6,7,8,[9,10]]]
const another_array = array4.flat(Infinity) //
console.log(another_array);


console.log(Array.isArray("atul")) // this is not an arary
console.log(Array.from("atul")) //  this is an array ...from keyword is used to convert into array
console.log(Array.from({name : "atul"})) // this is an interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // convert into string







