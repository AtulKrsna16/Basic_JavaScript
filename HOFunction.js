const powerTwo = (n) =>{
    return n ** 2;
}
const powerTheree = (powerTwo, n)=>{
    return powerTwo(n) * n

}
// console.log(powerTheree(powerTwo , 4))


//+++++++++++++++++++++++++++++++++++++++++++++

function sayHello(){
    return ()=> {
        // console.log("hello Atul")
    }
}
let guessValue = sayHello()
// console.log(guessValue);
guessValue()

//+++++++++++++++++++++++++++++

const higherOrder = (n) => {
    const oneFun = (m) => {
        const twoFun = (p) => {
            return m + n + p;
        }
        return twoFun
    }
    return oneFun
}
let allValue = higherOrder(2)(3)(4)
// console.log(allValue)

//+++++++++++++++++++++++++++++++++++++
const mynum = [1,2,3,4,5,6]
const sumArray = arr => {
    let total = 0
    arr.forEach(element => {
        total += element
    });
    return total
}
// console.log(sumArray(mynum))

//+++++++++++++++++++++++++++++++++++

function oneMoreTime (){
    console.log("Hare Krishna !!");
}
setInterval(oneMoreTime ,2000)
