//Throttle fn executes immediately when called but then ignores any more calls for a timeout time period.
const throttle = (func, timeout = 300) => {
    let isWaiting = false;
    return (...args) => {
        if(!isWaiting){
            func.apply(this, args);
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
            }, timeout);
        }
    }
} 

const saveInput = (name) => {
    console.log("saveInput", name);
};

const processChange = throttle(saveInput, 2000);
processChange("foo"); //printed

setTimeout(() => {
    processChange("foo")
}, 1000);// ignored

setTimeout(() => {
    processChange("foo")
}, 1200); //ignoref

setTimeout(() => {
    processChange("foo")
}, 2400); //printed as it is called after the original 2000ms value