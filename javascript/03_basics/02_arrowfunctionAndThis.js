user={
    username:"MRIDUL",
    subscription:299,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
    }
}

user.welcomeMessage();
user.username="sam";
user.welcomeMessage();

// ARROW FUNCTIONS

// basic structure of arrow function

//   ()=>
//       {

//       }


// explicit return: returning value by writing the RETURN keyword

const chai=()=>{
    let username="Mridul"
    console.log(username);
}

chai();

// implicit return: returning value without writing the RETURN keyword

const addNum=(n1,n2)=> (n1+n2)

console.log(addNum(3,5));

// implicit returning an object

const returnObject=()=>({userNames:"mridul"})
console.log(returnObject());