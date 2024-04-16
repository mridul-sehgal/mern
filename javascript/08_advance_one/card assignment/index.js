const requestUrl = "https://api.github.com/users/mridul-sehgal";
let followers;
let avatar;
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onload = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    followers = data.followers;
    avatar = data.avatar_url;

    console.log("Followers:", followers);
    console.log("Avatar URL:", avatar);

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
      document.querySelector(
        ".cardImg"
      ).innerHTML = `<img src=${avatar}></img>`;
      document.querySelector(
        ".followers"
      ).innerHTML = `<h2>The user has ${followers} followers</h2>`;
    });
  }
};

xhr.send();
