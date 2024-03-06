const coding = ["js", "ruby", "java", "python", "cpp"];

// with function keyword
coding.forEach(function (val) {
  // console.log(val);
});

// using arrow function
coding.forEach((item) => {
  // console.log(item);
});

// passing a separately declared function
function printMe(item) {
  // console.log(item);
}
coding.forEach(printMe);

// along with item index and complete array can also be accessed

coding.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});

// best loop for accessing values from an array of objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
