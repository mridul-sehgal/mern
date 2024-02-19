// **** Synchronous JS ****

console.log("i");
console.log("am");
console.log("synchronous");
console.log("JS");

// **** Asynchronous JS ****

// 1. setTimeout function

console.log("i");
setTimeout(() => {
  console.log("ansynchronous");
}, 2000);

console.log("am");
console.log("JS");

// 2. Promises

function loadingData() {
  return new Promise((resolve, reject) => {
    console.log(" 1) Loading Data");
    resolve();
  });
}
function collectingData() {
  console.log(" 2) Collecting Data");
}
function approvingData() {
  console.log(" 3) Approving Data");
}
function approved() {
  console.log(" 4) Approved");
}

loadingData().then(collectingData);

// 3. Await function

async function Example() {
  await loadingData();
  await collectingData();
  await approvingData();
  await approved();
}

Example();

// ****** Objects ******

let object = {
  name: "Mridul",
  age: 21,
  func: function () {
    console.log(" es uno functiona");
  },
};

setTimeout(() => {
  console.log(object.name);
  console.log(object.age);
  object.func();
}, 4000);


// array of objects
let arr =[
    {
        user:1,
        name:"don",
    },
    {
        user:2,
        name:"badmos"
    },
    {
        user:2,
        name:"gunda"
    }
]

console.log(arr);
