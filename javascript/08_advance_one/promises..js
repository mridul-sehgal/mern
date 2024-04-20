// PROMISE 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 1 completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise 1 Consumed");
});

// PROMISE 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise 2 consumed");
});

//PROMISE 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3 completed");
    resolve({ user: "Mridul", email: "mridul@sehgal.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//PROMISE 4
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      console.log("Async task 4 completed");

      resolve({ username: "Mridul", password: "12345" });
    } else {
      reject("ERROR: Something wrong occured");
    }
  }, 4000);
});

//chaining

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

// PROMISE 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (!error) {
      console.log("Async task 5 completed");

      resolve({ username: "Mridul", password: "12345" });
    } else {
      reject("ERROR: Something wrong occured");
    }
  }, 4000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetch statement returns a promise
fetch("https://api.github.com/users/mridul-sehgal")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
