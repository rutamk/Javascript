// Debounce fn is a fn which when called is always executed after a delay.
const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
        console.log('inner fn', args);
        clearTimeout(timer); // discards any previous setTimeouts so that only one time the fn will be executed.
        timer = setTimeout(() => {
            func.apply(this,args);
        }, timeout);
    };
};

const saveInput = (name) => {
    console.log("saveInput", name);
};

const processChange = debounce(saveInput, 2000);
processChange("foo");
processChange("foo");
processChange("foo");
processChange("foo");