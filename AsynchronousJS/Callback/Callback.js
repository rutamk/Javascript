// Write an async functoin which executes callback after finishing its async task.

const asyncFn = (callback) => {
    setTimeout(() => {
        callback("done");
    }, 2000);
};

asyncFn((message) => {
    console.log("callback", message);
})