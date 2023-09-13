
// Object literals

const mySym = Symbol("key1")

const JsUser = { name : "Atul",
"full name " : "Atul kumar",
[mySym] : "mykey1",
age : 25, location : "Bihar",
email : "atul.kumar15@google.com",
isLoggedIn : false,
lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email) //for access the object element
console.log(JsUser["email"]);  // this method is best
console.log(JsUser["full name "]);
console.log(JsUser [mySym]); // symbol


//how t0 change the object element
// JsUser.email = "atul.kumar15@microsoft.com"
// console.log(JsUser["email"]); // changed the email

// how to freeze the value
// Object.freeze(JsUser);
// JsUser.email = "atul.kumar15@amazon.com"
// console.log(JsUser.email); // no any changes because its freeezed

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`)

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


