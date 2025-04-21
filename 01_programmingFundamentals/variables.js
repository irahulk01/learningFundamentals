// learning variables
/* Variables: let, const, var */

/* 1. Var 

example: */

// Global variable declared with var
var globalNumber = 2;
console.log(globalNumber, "globalNumber (outside function)");

function showFunctionScope() {
    // Function-scoped variable
    var messageInsideFunction = "I'm only inside the function";

    console.log(globalNumber, "globalNumber (inside function)");
    console.log(messageInsideFunction, "messageInsideFunction");
}

showFunctionScope();

// Below line gives error because messageInsideFunction is not visible outside
// console.log(messageInsideFunction); // ❌ ReferenceError

function myScope() {
    var secret = "hidden";
    // Here, you know the secret
}
// console.log(secret,"secret"); // ❌ Error — you're outside the room, can't access

if (true) {
    var x = 10;
}
console.log(x); // ✅ Works — because `var` is NOT block-scoped

if (true) {
    let test2 = "I am block scoped";
}
// console.log(test2); // ❌ ReferenceError
















// predict what will happen
// function testScope() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
  
//     if (true) {
//       var a = 10;
//       let b = 20;
//       const c = 30;
  
//       console.log("Inside block:", a, b, c);
//     }
  
//     console.log("Outside block:", a, b, c);
//   }
//   testScope();