/*----- 1. Functions Arguments*/

//First Class Function
//Example #1
// function name(arg) {
//   arg();
// }

// function fn() {
//   console.log('This is function 2');
// }
// name(fn);

//Example #2
// function greet() {
//   console.log('Hi I love you!');
// }

// function diss() {
//   console.log('You are the worst :(');
// }

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function repeat(num, func) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

//Example #3
// function takeAFunction(anotherFunc) {
//   return anotherFunc(); // calling the parameter as a function
// }

// let sayHi = function () {
//   console.log('hello');
// };

/*----- 2. Functions in Variables*/

//Example #1
// let funcs = [greet, diss];

const myFunc = function add(x, y) {
  return x + y;
};

/*----- 3. Returning Functions*/

//Example #1
function giveBirth() {
  console.log('Giving Birth!!');
  return function cry() {
    return 'WAAAHHHH';
  };
}

//Example #2
function makeMultiplyFunc(num) {
  return function mult(x) {
    return num * x;
  };
}

const squad = makeMultiplyFunc(4);
const double = makeMultiplyFunc(2);

double(9); //18
squad(9); //36

/*----- 4. Threading in JavaScript*/

// Single Threaded!
// greet();
// alert('I am Alert');
// diss();

/*----- 5. setTimeout*/

// Example #1
// greet();
// setTimeout(diss, 3000);
// setTimeout(diss, 1000);
// greet();

// Example #2
// const id = setInterval(diss, 2000);
//clearInterval(id) // the count stop

/*----- 6. Visualizing setTimeout*/
/*----- 7. Anonymous Functions*/

//Example #1
// greet();
// setTimeout(function () {
//   diss();
//   diss();
//   diss();
// }, 1000);
// greet();

//Example #2
// setTimeout(function () {
//   console.log('Meow');
//   console.log('Woof');
//   console.log('Oink');
// }, 5000);

// Example#3
// function doTwice(func) {
//   func();
//   func();
// }

// // doTwice(diss);
// doTwice(function () {
//   console.log('Stop Bothering Me!');
//   console.log('Please Go Away');
// });

//Example #4
// const printOne = function () {
//   console.log(1);
// };

/*----- callbacks*/

//Example #1
// function markWahlberg(animal, callback) {
//   console.log(`Hey ${animal}, how you doing?`);
//   callback();
// }

// function markCallback() {
//   console.log('Say hi to your mother for me, alright');
// }

// markWahlberg('chicken', markCallback);

//Example #2
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//Using callback -->

function doMath(a, b, callback) {
  return callback(a, b);
}

doMath(10, 20, function (first, second) {
  return first + second; //30
});

doMath(5, 10, function (first, second) {
  return (first * second) / second + first; //10
});

doMath(5, 5, add); //10
doMath(5, 5, subtract); //0
/*----- 8. Timer Exercise*/
