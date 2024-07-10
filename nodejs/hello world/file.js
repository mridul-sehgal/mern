const fs = require('fs')

//****** Writing In A File ********/

//sync...
fs.writeFileSync("./text.txt","Hello World this is Node js")

//Async
fs.writeFile("./test.txt","Hello Async World this is Node Js",(err)=>{})



//****** Reading From A File ********/
9
//sync...
const contact=fs.readFileSync("./contacts.txt","utf-8")
console.log(contact);

 //Async
const result=fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err)
    {
        console.log("Error",err)
    }
    else
    {
        console.log(result)
    }
})


//****** Appending into A File ********/

//Sync

fs.appendFileSync("./contacts.txt", "\n Vishesh Sehgal : 9667427157")