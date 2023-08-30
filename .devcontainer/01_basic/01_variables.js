const accountId = 1246781;
let accountEmail = "atulkrsna16@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed
accountEmail = "atul15jan@gmail.com"
accountCity = "Bangaluru";
accountPassword = "12223"
/* 
perfer not to use var 
because of issue in block scope and functional scope
*/
console.log([accountEmail,accountPassword,accountCity,accountState]);
