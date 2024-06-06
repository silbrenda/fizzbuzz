var counting = 1;
var output = [];

function FizzBuzz() {
    while (counting <= 20) {
        if (counting % 3 === 0 && counting % 5 === 0) {
            output.push("FizzBuzz");             
        } else if (counting % 3 === 0) {
            output.push("Fizz");                  
        } else if (counting % 5 === 0) {
            output.push("Buzz");                  
        } else {
            output.push(counting);
        }
    counting++;
    }
}

FizzBuzz();
console.log(output);


/* 

Step 1 ------------------------

var counting = [];

for (var i = 0; i <= 10; i++) {
        counting.push(i)
}

console.log(counting);

Step 2 -------------------------

var counting = [];
for (var i = 0; i <= 10; i++) {
if (i % 3 === 0) {
    counting.push("Fizz")
    } else {
        counting.push(i)
    }
}

console.log(counting);

Step 3 --------------------------

var counting = [];
for (var i = 0; i <= 10; i++) {
if (i % 5 === 0) {
    counting.push("Buzz")
    } else {
        counting.push(i)
    }
}

console.log(counting);

Step 4  --------------------------

var counting = [];
for (var i = 0; i <= 10; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        counting.push("FizzBuzz")
    } else {
    counting.push(i);
    }
}

console.log(counting);

Step 5 ---------------------------

var counting = [];
for (var i = 0; i <= 10; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        counting.push("FizzBuzz");
    } else if (i % 3 === 0) {
        counting.push("Fizz");
    } else if (i % 5 === 0) {
        counting.push("Buzz");
    } else {
        counting.push(i);
    }
}
console.log(counting);

*/