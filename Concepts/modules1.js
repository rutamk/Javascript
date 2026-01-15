//Create a es6 module with function getName and getSurName and defult export getFullName
// export const getname  = (name) => name;
// export const getSurName  = (surname) => surname;

// export default (name,surname) => `${getname(name)} ${getSurName(surname)}`;

//create the same with commonJS Module

//getname and getsurname are now private and we can only access getfullname
// const getname = (name) => name;
// const getSurName = (surname) => surname;
// module.exports.getFullName = (name,surname) => `${getname(name)} ${getSurName(surname)}`;

//have access of all three
const getname = (name) => name;
const getSurName = (surname) => surname;

module.exports.getname = getname
module.exports.getSurName = getSurName
module.exports.getFullName = (name,surname) => 
    `${getname(name)} ${getSurName(surname)}`;