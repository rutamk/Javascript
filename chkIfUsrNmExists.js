// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// const isNameExists = (name, users) => users.some((user) => user.name === name);

// const isNameExists = (name, users) => {
//     const user = users.find((user) => user.name === name);
//     console.log(user);
//     return Boolean(user);
// }

const isNameExists = (name, users) => {
    const index = users.findIndex((user) => user.name === name);
    console.log(index);
    return index == -1 ? false : true;
}

// const isNameExists = (name ,users) => {
//     let exists = false;
//     for (let l = 0; l < users.length; l++) {
//         if(users[l].name === name){
//             exists = true;
//         }
//     }
//     return exists
// }
console.log(isNameExists('Jack',users));
console.log(isNameExists('Jacrk',users));

