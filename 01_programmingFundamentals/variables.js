// learning variables
/* Variables: let, const, var */

/* 1. Var 

example: */

// Global variable declared with var
// var globalNumber = 2;
// console.log(globalNumber, "globalNumber (outside function)");

// function showFunctionScope() {
//   // Function-scoped variable
//   var messageInsideFunction = "I'm only inside the function";

//   console.log(globalNumber, "globalNumber (inside function)");
//   console.log(messageInsideFunction, "messageInsideFunction");
// }

// showFunctionScope();

// Below line gives error because messageInsideFunction is not visible outside
// console.log(messageInsideFunction); // ❌ ReferenceError

// function myScope() {
//   var secret = "hidden";
//   // Here, you know the secret
// }
// console.log(secret,"secret"); // ❌ Error — you're outside the room, can't access

// if (true) {
//   var x = 10;
// }
// console.log(x); // ✅ Works — because `var` is NOT block-scoped

// if (true) {
//   let test2 = "I am block scoped";
// }
// console.log(test2); // ❌ ReferenceError

// with Let
// function greetUserWithLet() {
//     let greeting = "Hello with let!";
//     console.log(greeting); // ✅ Works here
// }

// greetUserWithLet();

// console.log(greeting); // ❌ ReferenceError: greeting is not defined

function greetUserWithConst() {
  const greeting = "Hello with const!";
  console.log(greeting); // ✅ Works here
}

// greetUserWithConst();

// console.log(greeting); // ❌ ReferenceError: greeting is not defined

function greetUserWithConst() {
  const greeting = "Hello with const!";
  console.log(greeting); // ✅ Works here
}

// greetUserWithConst();

// console.log(greeting); // ❌ ReferenceError: greeting is not defined

{
  let userName = "Asha";
  const userRole = "Admin";
  var userLocation = "India";
}

// These will behave like this:
// console.log(userName);    // ❌ Error
// console.log(userRole);    // ❌ Error
// console.log(userLocation); // ✅ "India"

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

// How const works with object and array
const user = {
  user: "Abdul",
  age: 13,
};

// user ={
//     user: 'Rashid'
// }

// console.log(user); TypeError: Assignment to constant variable.




// var num = 10;

// function integer (num){
// if (num > 20){
//   console.log(num)
// }
// console.log(num)
// };
// integer()

