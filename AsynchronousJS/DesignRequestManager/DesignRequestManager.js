//Design a utility which takes URL and a value for attempts which will attempt to make a fetch request.
//If on failure it tries again with increasing delay for number of times which user has requested

const requestManager = (url, options = {}, attempts = 3, timeout = 3000) => {
    return new Promise ((resolve, reject) => {
        fetch(url, options)
        .then(resolve)
        .catch((error) => {
            const isLastAttempt = attempts === 1;
            if(isLastAttempt){
                return reject(error);
            }
            setTimeout(() => {
                requestManager(url, options, attempts - 1, timeout + 3000)
                .then(resolve)
                .catch(reject);
            }, timeout)
        })
    })
}

requestManager("https://fooasdv.com")
    .then((response) => {
        console.log("response", response);
    })
    .catch((err) => {
        console.log("err", err);
    })