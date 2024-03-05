function sayMyName() {
  console.log("Mridul");
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let result = addTwoNumbers(3, 7);
console.log(result);

function userLoginMessage(username = "user") {
  //default values
  return `${username} just logged in`;
}

console.log(userLoginMessage("mridul")); // argument is passed
console.log(userLoginMessage()); // default argument taken

// shopping cart issues: during making a shoping cart for a website, we dont know much much things the user will add in cart
// or we can say how many arguments it will pass , we have no idea about how many parameters should be declared in function defination
// to solvw this we use  REST OPERATOR " ... " . Rest opeartor receives all arguments and stores them in an array

function countCartValue(...value) {
  return value;
}

console.log(countCartValue(2100, 23, 244, 63463, 234));

// PASSING OBJECT TO A FUNCTION

const user = {
  username: "Mridul",
  moneySpent: 2999,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and total money spent is ${anyObject.moneySpent}`
  );
}

handleObject(user);

// directly passing object in function call

handleObject({
  username:"Pavitra",
  moneySpent:4000,
})


//PASSING AN ARRAY TO A FUNCTION

const myNewArray=[200,2020,3340,12312,142];

function returnValueAtIndex(arr,index) {
  return arr[index];
}

console.log(returnValueAtIndex(myNewArray,2)); 