// these are my thoughts on chap 5
// with a higher order function I can build a generic function like "greaterThan"-- which is essentially builds a "function factory"
// I'm saying "give me a function that can create other functions that will check any argument (NUMBER) given by a user and it will measure against a spepcific value"
// by creating greatherThan10-- i've essentially made an infinite amount of devices that will check if someting is larger than 10-- a bunch of fire alarms that go off if temperatures hit a certain point

// in the paragraph above-- I believe that is how I understand the concept of a "function that can make other functions-- a factory that can make smaller specific factories"

// LEARN THE NOISY FUnCTION
let lilNoisy = function(){

}


// HOF EXAMPLE 1
// the three functions below operate EXACTLY the same
function greaterThan(n){
   return m => m > n;
};

function largerThan(n){
   return function(m){
      return m > n;
   }
};

function biggerThan(n){
   return function internalFunction (m){
      if(m > n) return true;
      else return false;
   }
};

// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// let biggerThan10 = biggerThan(10);
// console.log(biggerThan10(11));

// let largerThan10 = largerThan(10);
// console.log(largerThan10(11));


//HOF EXAMPLE 2
// FOR NOISY-- we are creating a function that takes any function as its argument "f"
// whatever function we give it we will also give that "lower level function" its own arguments "...args"
// These ...args use the "rest" parameter to indicate placing each comma seperated argument into a "bottomless array"
function noisy(f){
   return (...args) => {
      console.log("calling with", args);
      let result = f(...args);
      console.log("called with", args, "returned", result);
      console.log(args);
      console.log(...args);
   } 
};

// noisy(Math.min)(3, 2, 1);

// noisy can also be stored into a function as follows:
// let noisyFunction = noisy(Math.min);
// and we can call this newly created variable like so:
// noisyFunction(1,2,3)





// REST operator EXAMPLE
// TAKES a non-limited list of arguments and converts it to an array for the function to use. 
// probably useful if you have a variable number of arguments comming in and you don't want to pre-define how long your array is allowed to be
let adder = function(...theArgs){
   console.log('SUP bro');
   let total = 0;
   for(let i = 0; i < theArgs.length; i++){
      total = total + theArgs[i];
   }
   console.log(total);
}

// adder(1,2,3);

// REST example MDN
function sum(...theArgs) {
   let total = 0;
   for (const arg of theArgs) {
     total += arg;
   }
   return total;
 }
 
//  console.log(sum(1, 2, 3));
 // Expected output: 6

// HOF EXAMPLE 3

function unless(test, then){
   if (!test) then();
};
// my initial read of this is we pass the function "unless" a test and a FUNCTION
// IF the test is failed-- THEN execute the FUNCTION given as an argument


function repeat(n, action) {
   for(let i = 0; i < n; i++){
      action(i);
   }
};
// pass the function repeat a single number (our repetition counter) and a function to be excecuted each repitition
// while i is less than our number given as an argument (n)-- continue to execute the action (function)


repeat(3, n => {
   unless(n % 2 == 1, ()=> {
      console.log(n, "is even")
   })
});

// you can also write "repeat" like this:
[0,1,2,3].forEach(n => {
   if (n%2 != 1){
      console.log(n, "is even");
   }
});
// TOP DOWN 
// highest function repeat is given a counter of 3 and a function to be repeated 3 times
// the function given is "unless" -- which takes a test and a function to be executed if the test is failed
// "3" actually becomes "n" in "unless"



//FILTERING ARRAYS EXAMPLE
let fliter = function(array, test){
   let passed = [];
   for(let element of array) {
      console.log(element);
      if(test(element)){
         passed.push(element);
      }
   }
   return passed;
};

let test1 = function(number){
   if(number > 0) {
      return true;
   }
   else {
      return false;
   }
}

// console.log(test1(5));

// console.log(fliter([1,2,0], test1));
