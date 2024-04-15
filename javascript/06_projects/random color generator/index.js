const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let colorSet;

const colorChange = function () {
  colorSet = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 2000);
};

document.querySelector("#start").addEventListener("click", colorChange);

const stop = function () {
  clearInterval(colorSet);
  console.log("printing stopped");
  colorSet = null;
};

document.querySelector("#stop").addEventListener("click", stop);
