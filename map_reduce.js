// using array
const array = [2,3,4]

array.forEach((element,index,array) => {
    // console.log(index,element,array)
});

const heroes = ["krishna", "Balram","Pandavas"]
heroes.forEach((element)=>{
    // console.log(element.toUpperCase())
})
// using map
array.map((element,index,array)=>{
    // console.log(element,index,array)
})

heroes.map((element)=> {
    // console.log(element.toUpperCase())
})

//fiter

const names = ["Krishna", "Rama", "Radha","Balram","Shayam"];
console.log(names)
const nameEndsWithA = names.filter((n) => {
    return n.endsWith('a')

})
console.log(nameEndsWithA);

// shopping cart
const cartBill = [20, 30, 40]
const sumOfCartBill = cartBill.reduce((prev, curr) =>
    prev + curr,0
)
console.log(sumOfCartBill)
