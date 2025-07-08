
a = ['5', 6]

// console.log(this.a)


function greet(){
    "use strict"
    console.log(this)
}

// way 1
// new greet();

// way 2
greet();

// way 3 