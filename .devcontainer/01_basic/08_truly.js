const username = []

if (username){
    console.log("got user name");
}else { 
    console.log("don't hoave email")

}


// falsy value 
// false, 0, -0, Bigint 0n, "", null , undefined , NaN ---> all are false value

// truly value 
// "0" , 'false' , " ", [], {}, function(){}

if (username.length === 0){
    console.log("Array is empty");  // ---> check the arrya empty or not
}

const emptobj = {}

if (Object.keys(emptobj).length === 0){  //----> check the object is empty or not
    console.log("Object is empty")
}


// Nullish coslescing Operator (??): null undefined 

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10 ?? 20 
console.log(val1);


