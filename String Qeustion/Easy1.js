// 130 => Report Spam Message

// You are given an array of strings message and an array of strings bannedWords.
// // An array of words is considered spam if there are at least two words in it that exactly match any word in bannedWords.
// Return true if the array message is spam, and false otherwise.

// Example 1:
// Input: message = ["hello","world","leetcode"], bannedWords = ["world","hello"]
// Output: true
// Explanation:
// The words "hello" and "world" from the message array both appear in the bannedWords array.

// Example 2:
// // Input: message = ["hello","programming","fun"], bannedWords = ["world","programming","leetcode"]
// Output: false
// Explanation:
// Only one word from the message array ("programming") appears in the bannedWords array.

const reportSpam = (message, bannedWords) => {
  let countWords = 0;
  const set = new Set(bannedWords);

  for (const word of message) {
    if (set.has(word)) {
      countWords++;
    }
  }

  return countWords >= 2 ? true : false;
};

// console.log(reportSpam(['hello', 'world', 'leetcode'], ['world', 'hello']));
// console.log(
//   reportSpam(
//     ['t', 'j', 'w', 'g', 'x', 'v', 'b', 'j'],
//     ['e', 'q', 's', 'j', 'q', 'w', 'k', 'w']
//   )
// );

// 131 => Check If Digits Are Equal in String After Operations I

// You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:

// For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
// Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.
// Return true if the final two digits in s are the same; otherwise, return false.

// Example 1:
// Input: s = "3902"
// Output: true
// Explanation:

// Initially, s = "3902"
// First operation:
// (s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
// (s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
// (s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
// s becomes "292"
// Second operation:
// (s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
// (s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
// s becomes "11"
// Since the digits in "11" are the same, the output is true.

// Example 2:
// Input: s = "34789"
// Output: false
// Explanation:

// Initially, s = "34789".
// After the first operation, s = "7157".
// After the second operation, s = "862".
// After the third operation, s = "48".
// Since '4' != '8', the output is false

const hasSameDigits = (s) => {
  while (s.length !== 2) {
    let result = '';
    for (let i = 0; i < s.length - 1; i++) {
      const operaiton = +s[i] + +s[i + 1];
      const addModulo = operaiton % 10;
      result += addModulo;
    }
    s = result;
  }
  return s[0] === s[1];
};

// console.log(hasSameDigits('3902'));
// console.log(hasSameDigits('34789'))

// 132 => Rearrange Words in a Sentence;

// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.
//
// Return the new text following the format shown above.

// Example 1:

// Input: text = "Leetcode is cool"
// Output: "Is cool leetcode"
// Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
// Output is ordered by length and the new first word starts with capital letter.
// Example 2:

// Input: text = "Keep calm and code on"
// Output: "On and keep calm code"
// Explanation: Output is ordered as follows:
// "On" 2 letters.
// "and" 3 letters.
// "keep" 4 letters in case of tie order by position in original text.
// "calm" 4 letters.
// "code" 4 letters.
// Example 3:

// Input: text = "To be or not to be"
// Output: "To be or to be not"

const arrangeWords = (text) => {
  text = text
    .toLowerCase()
    .split(' ')
    .sort((a, b) => a.length - b.length);
  text[0] = text[0][0].toUpperCase() + text[0].slice(1).toLowerCase();
  return text.join(' ');
};

// console.log(arrangeWords('Leetcode is cool'));
// console.log(arrangeWords('Keep calm and code on'));
// console.log(arrangeWords('To be or not to be'));

// 133 => Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"

const convertToTitle = (columnNumber) => {
  let result = '';
  while (columnNumber > 0) {
    columnNumber--; // Convert to 0-based
    const remainder = columnNumber % 26;
    result = String.fromCharCode('A'.charCodeAt(0) + remainder) + result; // Prepend
    columnNumber = Math.floor(columnNumber / 26); // Update with quotient
  }
  return result;
};

// console.log(convertToTitle(1));
// console.log(convertToTitle(28));
// console.log(convertToTitle(701));

// 134 => Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

const addDigits = (x) => {
  let inString = String(x);

  while (inString.length !== 1) {
    let sum = 0;
    for (let i = 0; i < inString.length; i++) {
      sum += +inString[i];
    }
    inString = String(sum);
  }
  return +inString;
};

// console.log(addDigits(38));
// console.log(addDigits(0));

// 135 => find Special substring of length k

// You are given a string s and an integer k.
// Determine if there exists a substring of length exactly k in s that satisfies the following conditions:
// The substring consists of only one distinct character (e.g., "aaa" or "bbb").
// If there is a character immediately before the substring, it must be different from the character in the substring.
// If there is a character immediately after the substring, it must also be different from the character in the substring.
// Return true if such a substring exists. Otherwise, return false.

// Example 1:
// Input: s = "aaabaaa", k = 3
// Output: true
// Explanation:
// The substring s[4..6] == "aaa" satisfies the conditions.

// It has a length of 3.
// All characters are the same.
// The character before "aaa" is 'b', which is different from 'a'.
// There is no character after "aaa".

// Example 2:
// Input: s = "abc", k = 2
// Output: false
// Explanation:
// There is no substring of length 2 that consists of one distinct character and satisfies the conditions.

const hasSpecialSubstring = (s, k) => {
  for (let i = 0; i <= s.length - k; i++) {
    const substring = s.slice(i, i + k);
    const allSame = new Set(substring).size === 1;

    if (allSame && substring.length === k) {
      const beforeValid = s[i - 1] !== substring[0];

      const afterValid = s[i + k] !== substring[0];

      if (beforeValid && afterValid) {
        return true;
      }
    }
  }
  return false;
};

// console.log(hasSpecialSubstring('aaabaaa', 3));
// console.log(hasSpecialSubstring('abc', 2));

// 136 => Find the Divisibility Array of a String

// You are given a 0-indexed string word of length n consisting of digits, and a positive integer m.

// The divisibility array div of word is an integer array of length n such that:

// div[i] = 1 if the numeric value of word[0,...,i] is divisible by m, or
// div[i] = 0 otherwise.
// Return the divisibility array of word.

// Example 1:

// Input: word = "998244353", m = 3
// // Output: [1,1,0,0,0,1,1,0,0]
// // Explanation: There are only 4 prefixes that are divisible by 3: "9", "99", "998244", and "9982443".
// Example 2:

// Input: word = "1010", m = 10
// Output: [0,1,0,1]
// Explanation: There are only 2 prefixes that are divisible by 10: "10", and "1010".

const divisibilityArray = (word, m) => {
  const div = [];
  let remainder = 0;

  for (const char of word) {
    const digit = parseInt(char, 10);
    remainder = (remainder * 10 + digit) % m;
    div.push(remainder === 0 ? 1 : 0);
  }

  return div;
};

// console.log(divisibilityArray('998244353', 3));
// console.log(divisibilityArray('1010', 10));
// console.log(divisibilityArray('86217457695827338571', 8));
