// Q1: Create a counter function which has increment and getValue functionality

const privateCounter = () => {
    let count = 0;

    return{
        increment : (val = 1) => {
            count += val;
        },
        getValue : () => {
            return count;
        },
    };
};

const counter = privateCounter(); 
console.log(counter.getValue()); // 0 
counter.increment(); 
console.log(counter.getValue()); // 1

// Q2: Create a function which stores a secret string inside which is not accessible but is returned only when we call this function.

const privateSecret = () => {
    let secret = "foo";
    return () => secret;
};

const getSecret = privateSecret() 
console.log(getSecret()) // 'secret
// console.dir(privateSecret);