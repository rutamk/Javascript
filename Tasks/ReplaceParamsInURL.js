//Write a fn to replace parameters in url

const initialUrl = "/posts/:postId/comments/:commentId";

const replaceParamsInUrl = (url, args) => {
    args.forEach((arg) => url = url.replaceAll(":" + arg.from,arg.to));
    return url;
}

const resultUrl = replaceParamsInUrl(initialUrl, [
    {from: "postId", to: "1"},
    {from: "commentId", to: "3"},
]);

console.log(resultUrl);