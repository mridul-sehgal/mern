const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "jignesh";
tinderUser.isLoggedIn = false;

// ******* object inside object ********

const regularUser = {
  email: "hello@gmail.com",
  fullname: {
    userName: {
      firstName: "Mridul",
      secondName: "sehgal",
    },
  },
};

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userName);
console.log(regularUser.fullname.userName.firstName);


// ******** combining two objcects *******

const obj1={1:"a", 2:"b"}
const obj2={3:"c", d:"4"}

// 1st way
const obj3=Object.assign(obj1,obj2);
console.log(obj3);

// 2nd way
const obj4={...obj1,...obj2};
console.log(obj4);

// ******* array of objects ********

const user=[
  {
    id:1,
    email:"A@gmail.com"
  },
  {
    id:2,
    email:"B@gmail.com"
  },
  {
    id:3,
    email:"C@gmail.com"
  }
]

console.log(user[1].email);

//important functions
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// ****** destrcutring of an Object ******

const course={
  courseName:"js in hindi",
  price:"free",
  courseInstructor:"chai and code",
  courseStudent:"mridul"
}

// destructing.....
const{ price,courseName,courseInstructor}=course // sequence does not matter

console.log(price);
console.log(courseName);
console.log(courseInstructor);

//renaming a key
const{courseStudent:student}=course;
console.log(student);