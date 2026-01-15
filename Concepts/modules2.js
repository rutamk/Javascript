// ES6
// import getFullName, { getname, getSurName } from "./modules1.js";

// console.log(getname("Jack"));
// console.log(getSurName("Doohan"));
// console.log(getFullName("Jack","Doohan"));

//CommonJS
const {getname,getSurName,getFullName} = require("./modules1.js");
console.log(getname("Jack"));
console.log(getSurName("Doohan"));
console.log(getFullName("Jack","Doohan"));


//commonjs is usually used in nodejs and es6 is used in browsers

