// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// a function that is called immediately after it is defined. used to avoid the global scope pollution

// basic iife syntax

//  ( function() {
//   // function body here
//  } )();

( function hello()
{
    console.log("IIFE FUNCTION also called Named IIFE");
})();

( ()=>{
    console.log('Arrow function IIFE also called unNamed IIFE');    
} ) ();


// passing parameters to iife

( (num1,num2) =>
{
    console.log(num1+num2);
} ) (3,4);