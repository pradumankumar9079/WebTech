// function reverseString(str) {
// return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("hello world"));

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));

// function countCharacters(str) {
//     const charCount = {};

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
// }

// console.log(countCharacters("hello"));
function replaceSpaces(str, replacement) {
  return str.split(" ").join(replacement);
}

console.log(replaceSpaces("hello world", "-"));
