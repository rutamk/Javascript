// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback.

const asyncFn1 = (callback) => {
    setTimeout(() => {
        callback(1);
    }, 3000);
}

const asyncFn2 = (callback) => {
    setTimeout(() => {
        callback(2);
    }, 2000);
}

const asyncFn3 = (callback) => {
    setTimeout(() => {
        callback(3);
    }, 1000);
}

const asyncParallel = (asyncFuncs, callback) => {
    const resultArr = new Array(asyncFuncs.length);
    let resultCounter = 0;

    asyncFuncs.forEach((asyncFunc, index) => {
        asyncFunc((value) => {
            resultArr[index] = value;
            resultCounter++;
            if(resultCounter >= asyncFuncs.length){
                callback(resultArr);
            }
        });
    });
};

asyncParallel([asyncFn1, asyncFn2, asyncFn3], (result) => {
    console.log(result); // 1, 2, 3 (prints results of each async fn in order)
});

