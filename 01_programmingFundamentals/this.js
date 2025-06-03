
a = ['5', 6]

// console.log(this.a)


function greet(){
    console.log("hey there")
}

// way 1
// new greet();

// way 2
greet.call();

// way 3 