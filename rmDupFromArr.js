//remove duplicate elements from the array

// const uniqueArr = (arr) => {
//     return [...new Set(arr)];
// };

// const uniqueArr = (arr) => {
//     const result = [];
//     arr.forEach((item) => {
//         if(!result.includes(item)){
//             result.push(item);
//         }
//     });
//     return result;
// }

const uniqueArr = arr => {
    return arr.reduce((acc,el) => {
        return acc.includes(el) ? acc : [...acc,el];
    },[])
}

const arr = [1,1,2,2,3,3,4]
console.log(uniqueArr(arr));
