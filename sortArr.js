// Sort array of numbers

const arr = [3,5,1];
const result = arr.sort((a,b) => a - b);
console.log(arr,result);

//Sort array of objects by authors lastname

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((b1,b2) => {
    const aLN1 = b1.author.split(" ")[1];
    const aLN2 = b2.author.split(" ")[1];
    return aLN1 < aLN2 ? -1 : 1;
});

console.log(books);