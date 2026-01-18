//Design a memoization function which adds 10 to provide value and take it from cache if it was already calculated.

const memoizeAdd = () => {
    let cache = {};

    return (value) => {
        if(value in cache){
            console.log("fetching from cache");
            return cache[value];
        } else {
            console.log("calculating result");
            const result = value + 10;
            cache[value] = result;
            return result;
        }
    }
}

const newAdd = memoizeAdd();
console.log(newAdd(9));
console.log(newAdd(9));