// Write an example of fetching data using Fetch API.

fetch("https://api.github.com/users/rutamk/repos")
    .then((res) => res.json())
    .then((data) => {
        console.log("success", data);
    })
    .catch((err) => {
        console.log(err);
    })