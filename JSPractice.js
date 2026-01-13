// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];


// 1 get all usernames
const names = users.map((user) => user.name);
console.log("all names are: " + names);

// const names = [];
// users.forEach((user) => {
//     names.push(user.name);
// })
// console.log(names);

// const names = [];
// for(let i = 0 ; i < users.length ; i++){
//     names.push(users[i].name);
// }
// console.log(names);

// 2. get only active usernames
const activeNames = users.filter((user) => user.isActive).map((user) => user.name);
console.log("Active names are: " + activeNames);

// 3. sort age desc

const descActiveNames = users
    .sort((user1,user2) => (user1.age < user2.age ? 1 : -1)) // 1 : -1 for desc and -1 : 1 for asc
    .filter((user) => user.isActive)
    .map((user) => user.name)

console.log(descActiveNames);

