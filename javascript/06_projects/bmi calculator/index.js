const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  let bmi;

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    bmi=(weight / ((height*height)/10000)).toFixed(2);
    if(bmi<18.6)
    {
        results.innerHTML=`<span>${bmi}</span> You are Underweight`;
    }
    else if(bmi>=18.6 && bmi<24.9)
    {
        results.innerHTML=`<span>${bmi}</span> You have Ideal Weight`;
    }
    else{
        results.innerHTML=`<span>${bmi}</span> You are OverWeight`;
    }
    
  }

});
