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

adder(1,2,3);

// REST example MDN
function sum(...theArgs) {
   let total = 0;
   for (const arg of theArgs) {
     total += arg;
   }
   return total;
 }
 
 console.log(sum(1, 2, 3));
 // Expected output: 6



function repeat(n, action){
   for(let i = 0; i < n; i++){
      action(i);
   }
}


function unless(test, then) {
   if (!test) then();
}

// repeat(3, n => {
//    unless(n % 2 == 1, () =>{
//       console.log(n ,"is even")
//    });
// });

