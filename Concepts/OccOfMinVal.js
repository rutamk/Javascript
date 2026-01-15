// Find the Number of Occurences of Minimum Value in List

const arr = [1,1,1,1,2,2,3,4,4,4,5];
const minValue = Math.min(...arr);
const minArr = arr.filter(el => el === minValue);
console.log(minArr.length);
