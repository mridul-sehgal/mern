const accountId = 144553;
let accountEmail = "mridul@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState; // if no value is assigned to a variable the value is treated as undefined

// accountId = 2 // value of a const cannnot be changed in a code later

accountEmail = "xyz@gmail.com";
accountPassword = "54321";
accountCity = "London";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* the keyword var is obsolete because of the reason that in has 
    block scope and functional scope realted issues.
*/