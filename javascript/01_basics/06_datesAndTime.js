let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// to declare custom dates

let myCreatedDate = new Date(2002, 6, 14); // YYYY/MM/DD
let myCreatedDate1 = new Date("2024-07-14"); // YYYY/MM/DD
let myCreatedDate2 = new Date("07-14-2024"); // MM/DD/YYYY
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toDateString());

let myTimeStamp =Date.now(); // return current time in ms since 01-01-1970
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); 

console.log(Math.floor(Date.now()/1000)); // time in seconds
