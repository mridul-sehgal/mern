// ******object literals******

//key value pair.

const mySymbol = Symbol("symbol12");

const jsUser = {
  name: "Mridul",
  "full name": "Mridul Sehgal",
  age: 22,
  location: "delhi",
  email: "mridul@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
  [mySymbol]: "myKey1", // using symbol in object
};

// ******ways to access an object:********

console.log(jsUser.email);
// console.log(jsUser[email]); this is wrong because behind the scenes the keys are stored as strings.
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // this type of keys cannot be accessed by (.) dot operator
console.log(jsUser[mySymbol]); //accessing symbol

// to change values inside an object
jsUser.email = "mridul@yahoo.com";
console.log(jsUser.email);



// *****to freeze an object******:- means no changes can be done.

//Object.freeze(jsUser);
// jsUser.name = "vishesh"; // changes will not happen
// console.log(jsUser.name);



// ********function and objects********

jsUser.greeting=function()
{
    console.log("Hello JS User");
}
jsUser.greetingTwo=function()
{
    console.log(`Hello JS User ${this["full name"]}`);
}

jsUser.greeting();
jsUser.greetingTwo();

