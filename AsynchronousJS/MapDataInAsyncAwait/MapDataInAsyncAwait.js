// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
// using async await.

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find(
       (userStatus) => userStatus.id === user.id
      ).isActive;
      return {...user,isActive};
    });
    console.log(mappedUsers);
  } catch (error) {
    console.log(error);
  }
};

getMappedUsers();

// // sol 2.3 more readable and then chaining
// const mapUsers = (users, userStatuses) => {
//   return users.map((user) => {
//       const isActive = userStatuses.find(
//         (userStatus) => 
//         userStatus.id === user.id
//       ).isActive;
//       return {...user,isActive};
//     });
// }
// Promise.all([getUsers(),getUserStatuses()])
//   .then(([users,userStatuses]) => mapUsers(users, userStatuses))
//   .then((mappedUsers) => {
//     console.log("mappedUsers",mappedUsers);
//   })

// // sol 2.2 more readable 
// const mapUsers = (users, userStatuses) => {
//   return users.map((user) => {
//       const isActive = userStatuses.find(
//         (userStatus) => 
//         userStatus.id === user.id
//       ).isActive;
//       return {...user,isActive};
//     });
// }
// Promise.all([getUsers(),getUserStatuses()]).then(([users,userStatuses]) => {
//   const mappedUsers = mapUsers(users, userStatuses)
//     console.log("mappedUsers",mappedUsers);
// })

// sol 2.1
// Promise.all([getUsers(),getUserStatuses()]).then(([users,userStatuses]) => {
//   const mappedUsers = users.map((user) => {
//       const isActive = userStatuses.find(
//         (userStatus) => 
//         userStatus.id === user.id
//       ).isActive;
//       return {...user,isActive};
//     });
//     console.log("mappedUsers",mappedUsers);
// })

// //sol 1 (slow, both promises are not dependant on each other so makes no sense to wait for one promise before calling the other one)
// getUsers().then((users) => {
//   getUserStatuses().then((userStatuses) => {
//     const mappedUsers = users.map((user) => {
//       const isActive = userStatuses.find(
//         (userStatus) => 
//         userStatus.id === user.id
//       ).isActive;
//       return {...user,isActive};
//     });
//     console.log("mappedUsers",mappedUsers);
//   })
// })