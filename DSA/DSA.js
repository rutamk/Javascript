//Fibonnacci

const Fibonnacci = (n) => {
    if(n < 0) return -1;
    if(n === 1) return 0;
    if(n === 2) return 1;
    return Fibonnacci(n-2) + Fibonnacci(n-1);
}

console.log(Fibonnacci(1));
console.log(Fibonnacci(2));
console.log(Fibonnacci(3));
console.log(Fibonnacci(7));

//Palindrome

const IsPalindrome = (string) => {
    return string === string.split("").reverse().join("");
}

console.log("object", IsPalindrome("object"));
console.log("racecar", IsPalindrome("racecar"));

//Anagram ("listen" and "silent", dormitory and dirty room)

// const isAnagram = (str1, str2) => {
//     if(str1.length !== str2.length) return false;

//     const lowerStr1 = str1.toLowerCase();
//     const lowerStr2 = str2.toLowerCase();

//     if(lowerStr1 === lowerStr2) return false;

//     const sortedStr1 = lowerStr1.split("").sort().join("");
//     const sortedStr2 = lowerStr2.split("").sort().join("");

//     return sortedStr1 === sortedStr2;
// }

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const freq = {};

    for (let ch of s.toLowerCase()) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of t.toLowerCase()) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
};


console.log(isAnagram("listen","silent"));
console.log(isAnagram("dormitory","dirty room"));

//count vowels

const findVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return str
        .toLowerCase()
        .split("")
        .reduce((acc,char) => {
            return vowels.includes(char) ? acc + 1 : acc;
        }, 0)
}

// const findVowels = (str) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)) count++;
//     }

//     return count;
// }

console.log(findVowels("object"));