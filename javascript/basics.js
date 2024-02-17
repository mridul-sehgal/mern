let a = 5;
let b = "this is JS practice";
console.log("hello");
console.log(a);
console.log(b);

// we should not use var in js because of overlapping issues and scope issues
// by using var JS allows the formation of different variable with same name
// this causes value overlapping issues
// var a=5
// var a=10  this is valis syntax

// let resolves this problem and doesnt allow creation of different varaibles
// having same name;
// let a=10;
//let a=5;  invalid syntax in JS





// ***type of operator***

console.log(typeof a);
console.log(typeof b);



// *** conditional Statement ***


// 1. If-Else statement
let age = 21;

if (age >= 18) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}


// 2. Switch statement

let ch = 2;

switch (ch) {
  case 1:
    console.log("I am 1");
    break;
  case 2:
    console.log("I am 2");
    break;
  case 3:
    console.log("I am 3");
    break;
  case 4:
    console.log("I am 4");
    break;

  default:
    console.log("Default Case");
    break;
}


// *****looping in JS*****

// 1. for loop

for(let i=0;i<10;i++)
{
    console.log(i+1);    
}

// 2. while loop

let j=0;
while(j<10)
{
    console.log(j+1);
    j++;    
}

// 3. do while loop
let k=11;
do
{
    console.log(k+1);
    k++;    
}while(k<10);