// 1 => score of a string

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:
// Input: s = "hello"
// Output: 13
// Explanation:
// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

function scoreOfString(s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    const charCode = s[i + 1].charCodeAt() - s[i].charCodeAt();
    result += Math.abs(charCode);
  }
  return result;
}

// console.log(scoreOfString("hello"));

// 2 => Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

function defangIPAddr(address) {
  return address.split(".").join("[.]");
}

// console.log(defangIPAddr("1.1.1.1"))

// other approch

// function defangIPAddr(address) {
//   return address.replaceAll(".", "[.]")
// }

// console.log(defangIPAddr("1.1.1.1"))

// other approch

function defangIPAddr(address) {
  let result = "";

  for (const char of address) {
    result += char === "." ? "[.]" : char;
  }
  return result;
}

// console.log(defangIPAddr("1.1.1.1"));

// 3 => jewels ans stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stones you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stones from "A".

function numsJewelsInStones(jewels, stones) {
  let counter = 0;

  for (const letter of stones) {
    if (
      jewels.includes(letter.toLowerCase()) &&
      jewels.includes(letter.toUpperCase())
    ) {
      counter++;
    }
  }
  //   return counter
}

// console.log(numsJewelsInStones("aA", "aAAbbbbb"));
// console.log(numsJewelsInStones("z", "ZZ"));

// 4 => Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:
// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
function balancedStringSplit(s) {
  let balance = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0) {
      count++;
    }
  }

  return count;
}

// console.log(balancedStringSplit("RLRRLLRLRL"));
// console.log(balancedStringSplit("RLRRRLLRLL"));
