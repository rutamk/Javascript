// Currying

// Currying in JavaScript is a functional programming technique 
// where a function that takes multiple arguments is transformed into a sequence of functions,
// each taking one argument at a time.

// Q1: Write a function which helps to achieve multiply(a)(b) and returns
// multiplication of a and b

// const multiply = (num1) => {
//     return (num2) => {
//         return num1 * num2;
//     };
// };

const multiply = (num1) => (num2) => num1 * num2;
console.log(multiply(2)(3)); // 6

// Q2: Create a curry function

const curry = function(fn) {
    var arity = fn.length; // the original total amount of args needed for the function to execute.
    console.log("arity", arity);
    return function f1(...args){
        if(args.length >= arity){
            console.log("enough arguments");
            return fn(...args);
        } else {
            console.log("need more arguments");
            return function f2(...moreArgs){
                var newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
}

const curriedSum = curry((a, b, c) => a + b + c); 
const partiallyCurriedSum = curriedSum(1); 
console.log(partiallyCurriedSum(2, 3)); // 6

// ✅ Real-World Example
// Imagine you have a function to format currency:

function formatCurrency(currency) {
  return function(amount) {
    return `${currency} ${amount}`;
  };
}

const formatUSD = formatCurrency('$');
console.log(formatUSD(100)); // $ 100