// function sortByCharFrequency(s) {
//   let obj = {};

//   s.split("").forEach((char) => {
//     if (obj[char]) obj[char]++;
//     else obj[char] = 1;
//   });

//   const getValues = Object.values(obj).sort((a, b) => a - b);
//   let newString = "";

//   for (let i = getValues.length - 1; i >= 0; i--) {
//     for (const [key, value] of Object.entries(obj)) {
//       if (value === getValues[i]) {
//         newString += key.repeat(value);
//       }
//     }
//   }
//   return newString.slice(0, s.length);
// }

// console.log(sortByCharFrequency("banana"));
// console.log(sortByCharFrequency("anash"));
// console.log(sortByCharFrequency("shahid"));
// console.log(sortByCharFrequency("test"));
// console.log(sortByCharFrequency("javascript"));
// console.log(sortByCharFrequency("shahid"));
// console.log(sortByCharFrequency("apple"));
// console.log(sortByCharFrequency("aabbcc"));
