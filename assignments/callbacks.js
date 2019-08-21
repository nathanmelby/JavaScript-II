// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function getLength(array, callback) {
  return callback(items.length);
}

getLength(items, function(get){
  console.log(get)
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function getLast(array, callback) {
  return callback(items);
}

getLast(items, function(get){
  console.log(get.pop())
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

const add = (num1, num2, callback) => {
  callback(num1 + num2)
}  
const printAnswer = (answer) => {
  console.log('answer', answer)
}
const log=console.log
add(35,111, printAnswer) 



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const multiply = (num1, num2, callback) => {
  callback(num1 * num2)
}  
const printAnswer2 = (answer) => {
  console.log('answer', answer)
}
const log2=console.log
multiply(23,42, printAnswer2) 


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function contains(item, list, callback){
  return callback(list.includes(item))
}
contains('Pencil', items, function(isThere) {
  console.log(isThere);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
