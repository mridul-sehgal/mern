const score = 400;
const balance = new Number(100);

console.log(score);
console.log(balance);

console.log(score.toString());
console.log(score.toFixed(2));

const number1 = 123.45;
console.log(number1.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-US'));

// ++++++++++++++++ MATHS ++++++++++++++++
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));


console.log(Math.random());
console.log((Math.random()*10)+1);

// to have a random number generated bwtween a range of number : eg between 10 and 20

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)


