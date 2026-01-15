//Write a fn which implement range

//range(1,50)
//1,2,3,4,...,50

//  This function returns an array of numbers starting from start
//  up to but not including end.
//  It creates an array of length end - start,
//  extracts its index values (0 to end - start - 1) using .keys(),
//  converts them into an array, and then shifts each value by adding start.
//  As a result, the generated array represents a numeric range
//  where start is inclusive and end is exclusive.

const range = (start,end) => {
    return [...Array(end-start).keys()].map((el) => el + start);
}

// const range = (start,end) => {
//     const result = [];
//     for (let i = start; i <= end ; i++) {
//         result.push(i);
//     }
//     return result;
// }

console.log(range(1,50));