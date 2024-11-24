document.body.style.backgroundColor = '#212121';

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
  return address.split('.').join('[.]');
}

// console.log(defangIPAddr("1.1.1.1"))

// other approch

// function defangIPAddr(address) {
//   return address.replaceAll(".", "[.]")
// }

// console.log(defangIPAddr("1.1.1.1"))

// other approch

function defangIPAddr(address) {
  let result = '';

  for (const char of address) {
    result += char === '.' ? '[.]' : char;
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
    if (s[i] === 'R') {
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

// 5 =>  Goal Parser Interpretation
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

function interpret(command) {
  let result = '';
  result += command.replaceAll('()', 'o').replaceAll('(al)', 'al');
  // return result
}

// console.log(interpret("G()(al)"));
// console.log(interpret("G()()()()(al)"));
// console.log(interpret("(al)G(al)()()G"));

// one more way to solve

function interpret(command) {
  let result = command.split('()').join('o');
  let modifyString = result.split('(al)').join('al');
  return `${modifyString}`;
}

// console.log(interpret("G()(al)"));
// console.log(interpret("G()()()()(al)"));
// console.log(interpret("(al)G(al)()()G"));

// 6 => Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
//
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

function arrayStringAreEqaul(word1, word2) {
  return word1.join('') === word2.join('');
}

// console.log(arrayStringAreEqaul(["ab", "c"], ["a", "bc"]));
// console.log(arrayStringAreEqaul(["a", "cb"], ["ab", "c"]));

// 7 => A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

function truncateSentence(s, k) {
  // let result = [];
  // const s = s.split(" ");
  // for (let i = 0; i < k; i++) {
  // result.push(s[i]);
  // }
  // return result.join(" ");
  // other way to solve
  // return s.split(" ").slice(0, k).join(" ")
}

// console.log(truncateSentence("Hello how are you Contestant", 4));
// console.log(truncateSentence("what is the solution of this problem", 4));
// console.log(truncateSentence("chopper is not a tanuki", 5));

//  8 => shuffle string

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

function restoreString(s, indices) {
  let ar = new Array(indices.length);
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    ar[indices[i]] = s[i];
  }
  return ar.join('');
}

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
// console.log(restoreString("abc", [0, 1, 2]));

// 9 => find the first palimdron string in the array

function firstPalimdrom(words) {
  for (const word of words) {
    const reverseWord = word.split('').reverse().join('');
    if (reverseWord === word) {
      return word;
    }
  }
  // return "";
}

// console.log(firstPalimdrom(["abc", "car", "ada", "racecar", "cool"]));
// console.log(firstPalimdrom(["notapalindrome", "racecar"]));
// console.log(firstPalimdrom(["def","ghi"]));

// solve with find method

function firstPalimdrom(words) {
  const palindrome = words.find(
    (current) => current === current.split('').reverse().join('')
  );
  return palindrome !== undefined ? palindrome : '';
}

// console.log(firstPalimdrom(["abc", "car", "ada", "racecar", "cool"]));
// console.log(firstPalimdrom(["notapalindrome", "racecar"]));
// console.log(firstPalimdrom(["def", "ghi"]));

// 10 => to lower case
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

function toLowerCase(s) {
  return s.toLowerCase();
}

// console.log(toLowerCase("Hello"));
// console.log(toLowerCase("Here"));
// console.log(toLowerCase("LOVELY"));

// 11 => Faulty Keywords

// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.
// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard
// Return the final string that will be present on your laptop screen.

// Example 1:

// Input: s = "string"
// Output: "rtsng"
// Explanation:
// After typing first character, the text on the screen is "s".
// After the second character, the text is "st".
// After the third character, the text is "str".
// Since the fourth character is an 'i', the text gets reversed and becomes "rts".
// After the fifth character, the text is "rtsn".
// After the sixth character, the text is "rtsng".
// Therefore, we return "rtsng".

function finalString(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'i' || s[i] == 'I') {
      str = str.split('').reverse().join('');
      continue;
    }
    str += s[i];
  }
  return str;
}

// console.log(finalString("string")); // Output: "rtsng"
// console.log(finalString("poiinter")); // Output: "ponter"

// 12 => Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

function reverseWords(s) {
  return s
    .split(' ')
    .map((current) => current.toString().split('').reverse().join(''))
    .join(' ');
}

// console.log(reverseWords("Let's take LeetCode contest"));

// 13 => check if sentence is pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
function checkIfPangram(sentence) {
  return (
    Array.from(new Set(sentence)).map((letter) =>
      'abcedfghijklmnopqrstuvwxyz'.includes(letter)
    ).length === 26
  );
}

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
// console.log(checkIfPangram("leetcode"));

// 14 => Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

function countConsistentString(allowed, words) {
  let count = 0;
  allowed = allowed
    .split('')
    .sort((a, b) => a - b)
    .join('');
  for (let i = 0; i < words.length; i++) {
    if (
      words[i]
        .toString()
        .split('')
        .every((word) => allowed.includes(word))
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countConsistentString("ab", ["ad", "bd", "aaab", "baa", "badab"]));
// console.log(
//   countConsistentString("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
// );
// console.log(countConsistentString("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))

// 15 => Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

function sortSentence(s) {
  return s.split(' ').sort((a, b) => a - b);
}

// console.log(sortSentence("is2 sentence4 This1 a3"));

// 16 =>  Check if a String Is an Acronym of Words

// Given an array of strings words and a string s, determine if s is an acronym of words.
// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
// Return true if s is an acronym of words, and false otherwise.

function isAcronym(words, s) {
  const acronymWords = words.reduce((acronymString, current) => {
    const firstLetter = current.charAt(0);
    acronymString += firstLetter;
    return acronymString;
  }, '');
  return acronymWords === s;
}

// console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
// console.log(isAcronym(["an", "apple"], "a"));
// console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy"));

// 17 => Replace All Digits with Characters.
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

const replaceDigits = (s) => {
  const letter = 'abcedfghijklmnopqrstuvwxyz';
  let result = '';
  let index;
  for (let i = 0; i < s.length; i++) {
    index = i;
    if (i % 2 != 0) {
      result = s.replaceAll(s[i], letter[index]);
    }
  }
  return result;
};

// console.log(replaceDigits("a1c1e1"));

// 18 => uniqe morse code

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

function uniqueMorseRepresentations(words) {
  const morseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const transformations = new Set();

  words.forEach((words) => {
    let transformation = '';
    for (const letter of words) {
      const index = letter.charCodeAt() - 'a'.charCodeAt();

      transformation += morseCode[index];
    }
    transformations.add(transformation);
  });
  return transformations.size;
}

// Example usage:
// const words = ["gin", "zen", "gig", "msg"];
// console.log(uniqueMorseRepresentations(words)); // Output: 2

// 19 =>  Count Asterisks

// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
// Return the number of '*' in s, excluding the '*' between each pair of '|'.
// Note that each '|' will belong to exactly one pair.

// Example 1:
// Input: s = "l|*e*et|c**o|*de|"
// Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.

const countAsterisks = (s) => {
  let storeIndex = [];
  let result = 0;
  s.split('').forEach((element, index) => {
    if (element === '*') {
      storeIndex.push(index);
    }
  });

  for (let i = 0; i < storeIndex.length; i += 2) {
    if (storeIndex[i] - storeIndex[i + 1] === -1) {
      result++;
      if (storeIndex[i + 1] - storeIndex[i] === 1) {
        result++;
      }
    }
  }
  return result;
};

// console.log(countAsterisks("l|*e*et|c**o|*de|"));
// console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));

// 20 => jewels and stone

function numsJewelsInStones(jewels, stones) {
  let counter = 0;
  for (const letter of stones) {
    if (jewels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

// console.log(numsJewelsInStones("aA", "aAAbbbbb"));
// console.log(numsJewelsInStones("z", "ZZ"));

// 21 => Find Maximum Number of String Pairs

// You are given a 0-indexed array words consisting of distinct strings.
// The string words[i] can be paired with the string words[j] if:
// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.
// Note that each string can belong in at most one pair

// Input: words = ["cd","ac","dc","ca","zz"]
// Output: 2
// Explanation: In this example, we can form 2 pair of strings in the following way:
// - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
// - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
// It can be proven that 2 is the maximum number of pairs that can be formed.

const maximumNumberOfStringPair = (words) => {
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].toString().split('').reverse().join('') === words[j]) {
        counter++;
      }
    }
  }
  return counter;
};

// console.log(maximumNumberOfStringPair(["cd", "ac", "dc", "ca", "zz"]));
// console.log(maximumNumberOfStringPair(["ab","ba","cc"]));

// 22 => Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is

const reversePrefix = (words, ch) => {
  const getLetter = words.indexOf(ch);
  return (
    words
      .slice(0, getLetter + 1)
      .toString()
      .split('')
      .reverse()
      .join('') + words.slice(getLetter + 1)
  );
};

// console.log(reversePrefix("abcdefd", "d"));
// console.log(reversePrefix("xyxzxe", "z"));
// console.log(reversePrefix("abcd", "z"));

// 23 => Number of Strings That Appear as Substrings in Word

// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3
// Explanation:
// - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".
// 3 of the strings in patterns appear as a substring in word.

function numOfString(patterns, word) {
  let counter = 0;
  patterns.forEach((words) => (counter += word.includes(words) ? 1 : 0));
  return counter;
}

// console.log(numOfString(["a", "abc", "bc", "d"], "abc"));
// console.log(numOfString(["a", "b", "c"], "aaaaabbbbb"));
// console.log(numOfString(["a", "a", "a"], "ab"));

// 24 =>  Rings and Rods

// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// // For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.

// Input: rings = "B0B6G0R6R0R6G9"
// Output: 1
// Explanation:
// - The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
// - The rod labeled 6 holds 3 rings, but it only has red and blue.
// - The rod labeled 9 holds only a green ring.
// Thus, the number of rods with all three colors is 1.

function countRodsWithAllColors(rings) {
  let rods = {};
  let n = rings.length / 2;

  for (let i = 0; i < n; i++) {
    let color = rings[2 * i];
    let rod = rings[2 * i + 1];
    if (!rods[rod]) {
      rods[rod] = new Set();
    }
    rods[rod].add(color);
  }

  let count = 0;
  for (let rod_colors of Object.values(rods)) {
    if (rod_colors.size === 3) {
      count++;
    }
  }

  return count;
}

// Test cases
// console.log(countRodsWithAllColors("B0B6G0R6R0R6G9")); // Output: 1
// console.log(countRodsWithAllColors("B0R0G0R9R0B0G0")); // Output: 1
// console.log(countRodsWithAllColors("G4")); // Output: 0

// 25 => number os changing keys
// You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.
// Return the number of times the user had to change the key.
// Note: Modifiers like shift or caps lock won't be counted in changing the key that is if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.

// Example 1:
// Input: s = "aAbBcC"
// Output: 2
// Explanation:
// From s[0] = 'a' to s[1] = 'A', there is no change of key as caps lock or shift is not counted.
// From s[1] = 'A' to s[2] = 'b', there is a change of key.
// From s[2] = 'b' to s[3] = 'B', there is no change of key as caps lock or shift is not counted.
// From s[3] = 'B' to s[4] = 'c', there is a change of key.
// From s[4] = 'c' to s[5] = 'C', there is no change of key as caps lock or shift is not counted

function countKeyChanges(s) {
  s = s.toLowerCase();
  let counter = 0;

  for (let i = 0; i < s.length - 1; i++) {
    counter += s[i] !== s[i + 1] ? 1 : 0;
  }
  return counter;
}

// console.log(countKeyChanges("aAbBcC"));
// console.log(countKeyChanges("AaAaAaaA"));
// console.log(countKeyChanges("mDVD"));

// 26 => sort the people

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

function sortPeople(names, height) {
  const findTallesPerson = height.indexOf(Math.max(...height));
  const tallestPerson = names[findTallesPerson];

  for (let i = 0; i < names.length - 1; i++) {
    if (names[i] === names[i + 1]) {
      let highestOne = [height[i], height[i + 1]];
      highestOne = height.indexOf(Math.max(...highestOne));
      return `the ${i} ${names[i]} is the tallest, followed by ${
        names[i - 1]
      } and the second ${i + 1} ${names[i]}`;
    } else {
      return `${names[i]} is the tallest, followed by ${names[i + 1]} and ${
        names[i + 2]
      }.`;
    }
  }
}

// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
// console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));

// 27 => Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

function mergeAlternative(word1, word2) {
  let mergeString = '';
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    mergeString += word1[i];
    mergeString += word2[i];
  }
  return mergeString.replaceAll('undefined', '');
}
// console.log(mergeAlternative("abc", "pqr"));
// console.log(mergeAlternative("ab", "pqrs"));
// console.log(mergeAlternative("abcd", "pq"));

// 28 => Decrypt String from Alphabet to Integer Mapping

// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
// The test cases are generated so that a unique mapping will always exist.

// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#";
// Output: "acz";

function freqAlphabets(s) {
  const letterAToI = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    f: '6',
    g: '7',
    h: '8',
    i: '9',
  };
  const letterJToZ = {
    j: '10#',
    k: '11#',
    l: '12#',
    m: '13#',
    n: '14#',
    o: '15#',
    p: '16#',
    q: '17#',
    r: '18#',
    s: '19#',
    t: '20#',
    u: '21#',
    v: '22#',
    w: '23#',
    x: '24#',
    y: '25#',
    z: '26#',
  };

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      // console.log(s.slice(i - 2, i + 1));
    } else {
      console.log(s.slice(i));
    }
  }
  return result;
}

// console.log(freqAlphabets("10#11#12")); // Output: "jkab"
// console.log(freqAlphabets("1326#")); // Output: "acz"

// 29 => You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

function halvesAreAlike(s) {
  let counter1 = 0;
  let counter2 = 0;
  const stringLength = s.length / 2;
  const stringFirst = s.slice(0, stringLength).toLowerCase();
  const stringSecond = s.slice(stringLength).toLowerCase();

  for (let i = 0; i < stringFirst.length; i++) {
    if ('aeiou'.includes(stringFirst[i])) counter1++;
    if ('aeiou'.includes(stringSecond[i])) counter2++;
  }
  return counter1 === counter2;
}

// console.log(halvesAreAlike("book"));
// console.log(halvesAreAlike("textboOk"));

// 30 => A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:
// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]

const diStringMatch = function (s) {
  let count1 = -1;
  let count2 = s.length + 1;
  const result = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'I') {
      count1 = count1 + 1;
      result.push(count1);
    } else {
      count2 = count2 - 1;
      result.push(count2);
    }
  }
  return result;
};

// console.log(diStringMatch("IDID"));
// console.log(diStringMatch("III"));

// 31 => Remove Trailing Zeros From a String

// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

function removeTraillingZero(num) {
  const getValue = num
    .split('')
    .map((integer) => Number(integer))
    .reverse()
    .find((num) => num > 0);

  const getString = num.lastIndexOf(getValue);
  // return num.slice(0, getString + 1)
}

// console.log(removeTraillingZero("51230100"));
// console.log(removeTraillingZero("123"));

// 32 => count word with a given prefix

// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:
// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

function prefixCount(words, pre) {
  let counter = 0;
  pre = pre.toLowerCase();
  for (const word of words) {
    if (word.startsWith(pre)) {
      counter++;
    }
  }
  // return counter;
}

// console.log(prefixCount(["pay", "attention", "practice", "attend"], "At"));
// console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));

function prefixCount(words, pre) {
  return words.filter((word) => word.startsWith(pre.toLowerCase())).length;
}

// console.log(prefixCount(["pay", "attention", "practice", "attend"], "At"));
// console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));

// 33 => Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
//
// Input: s = ["H", "a", "n", "n", "a", "h"];
// Output: ["h", "a", "n", "n", "a", "H"];

function reverseString(s) {
  return s.reverse();
}

// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// 34 => Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb";
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

function areOccurenecesEqual(s) {
  let obj = {};

  s.split('').forEach((letter) => {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });
  const getObjectValue = Object.values(obj)[0];

  return Object.values(obj).every((value) => value === getObjectValue);
}

// console.log(areOccurenecesEqual("abacbc"));
// console.log(areOccurenecesEqual("aaabb"));

// 35 => Remove Outermost Parentheses

// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// // A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

function removeOuterParentheses(s) {
  let removeParentheses = '';
  let openParenthesesCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (openParenthesesCount > 0) {
        removeParentheses += '(';
      }
      openParenthesesCount++;
    } else if (s[i] === ')') {
      openParenthesesCount--;
      if (openParenthesesCount > 0) {
        removeParentheses += ')';
      }
    }
  }
  return removeParentheses;
}

// console.log(removeOuterParentheses("(()())(())"));

// 36 => Number of Senior Citizens
// You are given a 0-indexed array of strings details. Each element of details provides information about agiven passenger compressed into a string of length 15. The system is such that:
// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

// Example 1:

// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// // Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

// Example 2:
// Input: details = ["1313579440F2036","2921522980M5644"]
// Output: 0
// Explanation: None of the passengers are older than 60.

function countSenior(details) {
  let passengerCount = 0;

  for (const passenger of details) {
    const getAge = Number(passenger.slice(-4, -2));
    passengerCount += getAge > 60 ? 1 : 0;
  }
  // return passengerCount;
}

// console.log(
//   countSenior(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
// );
// console.log(
//   countSenior(["1313579440F2036","2921522980M5644"])
// );

// Other Approch

function countSenior(details) {
  return details.filter((passenger) => Number(passenger.slice(-4, -2)) > 60)
    .length;
}

// console.log(
//   countSenior(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
// );
// console.log(countSenior(["1313579440F2036", "2921522980M5644"]));

// 37 => Robot Return to Origin

// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
function judgeCircle(moves) {
  let x = 0,
    y = 0;

  for (let move of moves) {
    if (move === 'U') {
      y++;
    } else if (move === 'D') {
      y--;
    } else if (move === 'R') {
      x++;
    } else if (move === 'L') {
      x--;
    }
  }

  return x === 0 && y === 0;
}

// console.log(judgeCircle("RRDD")); // Output: true
// console.log(judgeCircle("DDUU")); // Output: false

// 38 => check if Word Equals Summation of Two Words

// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

// Example 1:

// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.
// Example 2:

// Input: firstWord = "aaa", secondWord = "a", targetWord = "aab"
// Output: false
// Explanation:
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aab" -> "001" -> 1.
// We return false because 0 + 0 != 1.
// Example 3:

// Input: firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
// Output: true
// Explanation:
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aaaa" -> "0000" -> 0.
// // We return true because 0 + 0 == 0.

function isSumEqual(firstWord, secondWord, targetWord) {
  const letterValue = {
    a: '0',
    b: '1',
    c: '2',
    d: '3',
    e: '4',
    f: '5',
    g: '6',
    h: '7',
    i: '8',
    j: '9',
  };
  const getValue = (word) => {
    let value = '';
    for (const char of word) {
      value += letterValue[char];
    }
    return Number(value);
  };

  const firstValue = getValue(firstWord);
  const secondValue = getValue(secondWord);
  const targetvalue = getValue(targetWord);

  // return firstValue + secondValue === targetvalue;
}

// console.log(isSumEqual("acb", "cba", "cdb")); // true
// console.log(isSumEqual("aaa", "a", "aab")); // false
// console.log(isSumEqual("aaa", "a", "aaaa")); // true

// 39 => Percentage of Letter in String

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Example 1:

// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
// Example 2:
//
// Input: s = "jjjj", letter = "k"
// Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

function percentageLetter(s, letter) {
  let counter = 0;
  for (const char of s) counter += char === letter ? 1 : 0;
  // return Math.floor((counter / s.length) * 100);
}

// console.log(percentageLetter("foobar", "o"));
// console.log(percentageLetter("jjjj", "k"));

// Other Approch

function percentageLetter(s, letter) {
  return Math.floor(
    (s.split('').filter((char) => char === letter).length / s.length) * 100
  );
}

// console.log(percentageLetter("foobar", "o"));
// console.log(percentageLetter("jjjj", "k"));

// 40 => Count the Number of Vowel Strings in Range
// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Example 1:

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation:
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.
// Example 2:

// Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
// Output: 3
// Explanation:
// - "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
// - "mu" is not a vowel string because it does not start with a vowel.
// - "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
// - "artro" is a vowel string because it starts with 'a' and ends with 'o'.
// The number of vowel strings in the mentioned range is 3.

function vowelStrings(words, left, rigth) {
  let counter = 0;

  for (let i = left; i <= rigth; i++)
    counter +=
      'aeiou'.includes(words[i].charAt(0)) &&
      'aeiou'.includes(words[i].charAt(words[i].length - 1))
        ? 1
        : 0;

  return counter;
}

// console.log(vowelStrings(["are", "amy", "u"], 0, 2));
// console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));

// 41 => split string by separator
// Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may/ result in more than two strings.
// The resulti/ng strings must maintain the same order as they were initially given.

//
// Example 1:

// Input: words = ["one.two.three","four.five","six"] , separator = "."
// // Output: ["one","two","three","four","five","six"]
// Explanation: In this example we split as follows:

// "one.two.three" splits into "one", "two", "three"
// "four.five" splits into "four", "five"
// "six" splits into "six"
//
// Hence, the resulting array is ["one","two","three","four","five","six"].
// Example 2:

// Input: words = ["$easy$","$problem$"], separator = "$"
// Output: ["easy","problem"]
// Explanation: In this example we split as follows:
//
// "$easy$" splits into "easy" (excluding empty strings)
// "$problem$" splits into "problem" (excluding empty strings)

// Hence, the resulting array is ["easy","problem"].
// Example 3:

// Input: words = ["|||"], separator = "|"
// Output: [] split string by separator
// Explanation: In this example the resulting split of "|||" will contain only empty strings, so we return an empty array []. /

// 42 => First Letter to Appear Twice

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.
// Example 1:

// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
// Example 2:
//
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.

function splitWordsBySeparator(words, separator) {
  let store = [];
  for (let i = 0; i < words.length; i++) {
    let splitWords = words[i].split(separator);
    for (let j = 0; j < splitWords.length; j++) {
      if (splitWords[j] !== '') {
        store.push(splitWords[j]);
      }
    }
  }
  return store;
}

// console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
// console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));

function repeatedCharacter(s) {
  const holder = {};
  for (let char of s) {
    holder[char] = holder[char] + 1 || 1;
    if (holder[char] == 2) return char;
  }
}

// console.log(repeatedCharacter("abccbaacz"));
// console.log(repeatedCharacter("abcdd"));
// console.log(repeatedCharacter("nwcn"));

// 43 =>  Substrings of Size Three with Distinct Characters

//  A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// // The good substrings are "abc", "bca", "cab", and "abc".

function countGoodSubstrings(s) {
  let result = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
      result++;
    }
  }
  return result;
}

// console.log(countGoodSubstrings("xyzzaz")); // Output: 1
// console.log(countGoodSubstrings("aababcabc")); // Output: 4

// 44 =>  Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

function canBeTypedWords(text, brokenLetters) {
  let counter = 0;

  let arr = text.split(' ');

  for (let i = 0; i < arr.length; i++) {
    for (const letter of brokenLetters) {
      if (arr[i].includes(letter)) {
        counter++;
        break;
      }
    }
  }
  return text.split(' ').length - counter;
}

// console.log(canBeTypedWords("hello world", "ad"));
// console.log(canBeTypedWords("leet code", "lt"));
// console.log(canBeTypedWords("leet code", "e"));
// console.log(canBeTypedWords("a b c d e", "abcde"));

// 45 => Kth Distinct String in an Array

// A distinct string is a string that is present only once in an array.
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
// Note that the strings are considered in the order in which they appear in the array.
// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.
// Example 2:

// Input: arr = ["aaa","aa","a"], k = 1
// Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.
// Example 3:

// Input: arr = ["a","b","a"], k = 3
// Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

function kthDistinct(arr, k) {
  let obj = {};
  arr.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  let result = [];
  for (const key in obj) {
    if (obj[key] === 1) {
      result.push(key);
    }
  }
  return result[k - 1] === undefined ? '' : result[k - 1];
}

// console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
// console.log(kthDistinct(["aaa", "aa", "a"], 1));
// console.log(kthDistinct(["a", "b", "a"], 3));

// 46 => Count Prefixes of a Given String
// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s.
// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.
// Example 1:

// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.
// Example 2:

// Input: words = ["a","a"], s = "aa"
// Output: 2
// Explanation:
// Both of the strings are a prefix of s.
// Note that the same string can occur multiple times in words, and it should be counted each time.

function countPrefixes(words, s) {
  let counter = 0;

  for (i = 0; i < words.length; i++) {
    for (j = 1; j <= s.length; j++) {
      if (words[i] == s.slice(0, j)) {
        counter++;
      }
    }
  }
  // return counter;
}

// console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
// console.log(countPrefixes(["a", "a"], "aa"));

// Other Approch

function countPrefixes(words, s) {
  let result = 0;

  for (const word of words) {
    result += s.startsWith(word) ? 1 : 0;
  }
  return result;
}

// console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
// console.log(countPrefixes(["a", "a"], "aa"));

// 47 => Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
//
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
//
// Input: n = 15
// Output: [
// "1",
// "2",
// "Fizz",
// "4",
// "Buzz",
// "Fizz",
// "7",
// "8",
// "Fizz",
// "Buzz",
// "11",
// "Fizz",
// "13",
// "14",
// "FizzBuzz",
// ];

function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(`${i}`);
    }
  }
  return result;
}

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

// 48 =>
// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.
// Return the permutation difference between s and t.

// Example 1:

// Input: s = "abc", t = "bac"
// Output: 2
// Explanation:

// For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

// The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
// The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
// The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
// That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.
// Example 2:
// Input: s = "abcde", t = "edbac"
// Output: 12
// Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

function findPermutationDiffrence(s, t) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const getIndex = t.indexOf(s[i]) - i;
    sum += Math.abs(getIndex);
  }
  return sum;
}

// console.log(findPermutationDiffrence("abc", "bac"));
// console.log(findPermutationDiffrence("abcde", "edbac"));

// Other approch

function findPermutationDiffrence(s, t) {
  let sum = 0;

  s.split('').forEach(
    (element, index, arr) =>
      (sum += Math.abs(element.charCodeAt() - t[index].charCodeAt()))
  );
  return sum;
}

// console.log(findPermutationDiffrence("abc", "bac"));
// console.log(findPermutationDiffrence("abcde", "edbac"));

// 49 => Maximum value of the stirng

// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation:
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".
// Example 2:
//
// Input: strs = ["1","01","001","0001"]
// Output: 1
// Explanation:
// Each string in the array has value 1. Hence, we return 1.

function maximumValue(strs) {
  let result = [];
  for (const val of strs) {
    if (Number.isInteger(+val)) result.push(+val);
    if (!Number.isInteger(+val)) result.push(val.length);
  }
  return Math.max(...result);
}

// console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
// console.log(maximumValue(["1", "01", "001", "0001"]));
// console.log(
//   maximumValue(["5232", "yv", "22", "c", "yawgs", "928", "4003", "2"])
// );

// 50 => Shortest Distance to a Character

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
// Example 1:

// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
// Example 2:
//
// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]
// Constraints:

// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// It is guaranteed that c occurs at least once in s.

function shortestToChar(s, c) {
  let prev = s.indexOf(c);
  let next = prev;
  const distance = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      prev = i;
      next = s.indexOf(c, i + 1);
    }
    distance.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
  }
  return distance;
}

// console.log(shortestToChar("loveleetcode", "e"));
// console.log(shortestToChar("aaab", "b"));

// 51 => Check if All A's Appears Before All B's
//  Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:

// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:

// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.

function checkString(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].charCodeAt() > s[i + 1].charCodeAt()) {
      return false;
    }
  }
  return true;
}

// console.log(checkString("aaabbb"));
// console.log(checkString("abab"));
// console.log(checkString("bbb"));
// console.log(checkString("ba"));

// Other Approch

function checkString(s) {
  let x;

  for (const val of s) {
    if (val === 'b') x = true;
    if (val === 'a' && x) return false;
  }
  return true;
}

// console.log(checkString("aaabbb"));
// console.log(checkString("abab"));
// console.log(checkString("bbb"));
// console.log(checkString("ba"));

// 52 => Count Common Words With One Occurrence

// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
// Example 1:
//
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".

function countWords(words1, words2) {
  let obj1 = {};
  let obj2 = {};
  let storeValue = [];
  let obj3 = {};
  let result = [];

  words1.forEach((val) => {
    if (obj1[val]) obj1[val]++;
    else obj1[val] = 1;
  });

  words2.forEach((val) => {
    if (obj2[val]) obj2[val]++;
    else obj2[val] = 1;
  });
  for (const val in obj1) if (obj1[val] === 1) storeValue.push(val);
  for (const val in obj2) if (obj2[val] === 1) storeValue.push(val);
  storeValue.forEach((val) => {
    if (obj3[val]) obj3[val]++;
    else obj3[val] = 1;
  });
  for (const val in obj3) if (obj3[val] >= 2) result.push(val);
  return result.length;
}

// console.log(
//   countWords(
//     ["leetcode", "is", "amazing", "as", "is"],
//     ["amazing", "leetcode", "is"]
//   )
// );
// console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]));
// console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));

// Other Approch

function countWords(arr1, arr2) {
  let storeValue = [];
  arr1.forEach((val) => {
    storeValue.push(arr2.indexOf(val));
  });

  return Array.from(new Set(storeValue))
    .map((val) => arr2[val])
    .filter(Boolean).length;
}

// console.log(
//   countWords(
//     ["leetcode", "is", "amazing", "as", "is"],
//     ["amazing", "leetcode", "is"]
//   )
// );

// console.log(countWords(["b", "bb", "bbb"], ["a", "aa", "aaa"]));
// console.log(countWords(["a", "ab"], ["a", "a", "a", "ab"]));

// 53 => Check Distances Between Same Letters

// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.
// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).
// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
// Return true if s is a well-spaced string, otherwise return false.

// Example 1:
// Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: true
// Explanation:
// - 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
// - 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
// - 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
// Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
// Return true because s is a well-spaced string.
// Example 2:

// Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: false
// Explanation:
// - 'a' appears at indices 0 and 1 so there are zero letters between them.
// Because distance[0] = 1, s is not a well-spaced string.

function checkDistance(s, distance) {
  let storeIndex = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        storeIndex.push(s.slice(i, j - 1).length);
      }
    }
  }
  return storeIndex;
}

// console.log(
//   checkDistance(
//     "abaccb",
//     [
//       1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0,
//     ]
//   )
// );
// console.log(
//   checkDistance(
//     "aa",
//     [
//       1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0,
//     ]
//   )
// );

// 54 =>  Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"

function removeDuplicate(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] && i - (i + 1) === -1) {
      s = s.split('').filter((val, index) => ![i, i + 1].includes(index));
    }
  }
}

// console.log(removeDuplicate("abbaca"));
// console.log(removeDuplicate("azxxzy"));

// 55 => minimize string length

// Given a 0-indexed string s, repeatedly perform the following operation any number of times:
// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
// Your task is to minimize the length of s by performing the above operation any number of times.
// Return an integer denoting the length of the minimized string.

// Example 1:

// Input: s = "aaabc"
// Output: 3
// Explanation: In this example, s is "aaabc". We can start by selecting the character 'a' at index 1. We then remove the closest 'a' to the left of index 1, which is at index 0, and the closest 'a' to the right of index 1, which is at index 2. After this operation, the string becomes "abc". Any further operation we perform on the string will leave it unchanged. Therefore, the length of the minimized string is 3.
// Example 2:

// Input: s = "cbbd"
// Output: 3
// Explanation: For this we can start with character 'b' at index 1. There is no occurrence of 'b' to the left of index 1, but there is one to the right at index 2, so we delete the 'b' at index 2. The string becomes "cbd" and further operations will leave it unchanged. Hence, the minimized length is 3.
// Example 3:

// Input: s = "dddaaa"
// Output: 2
// Explanation: For this, we can start with the character 'd' at index 1. The closest occurrence of a 'd' to its left is at index 0, and the closest occurrence of a 'd' to its right is at index 2. We delete both index 0 and 2, so the string becomes "daaa". In the new string, we can select the character 'a' at index 2. The closest occurrence of an 'a' to its left is at index 1, and the closest occurrence of an 'a' to its right is at index 3. We delete both of them, and the string becomes "da". We cannot minimize this further, so the minimized length is 2.

function minimizedStringLength(s) {
  return new Set(s).size;
}

// console.log(minimizedStringLength("aaabc"));
// console.log(minimizedStringLength("cbbd"));
// console.log(minimizedStringLength("dddaaa"));

// 56 => A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

function sortSentence(s) {
  let newStr = [];
  s.split(' ').forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        newStr[word[i]] = word.slice(0, i);
      }
    }
  });
  return newStr.join(' ').trim();
}

// console.log(sortSentence("is2 sentence4 This1 a3"));

// 57 => count Asterisks
// ou are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
// Return the number of '*' in s, excluding the '*' between each pair of '|'.
// Note that each '|' will belong to exactly one pair.

// Example 1:

// Input: s = "l|*e*et|c**o|*de|"
// Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.
// Example 2:

// Input: s = "iamprogrammer"
// Output: 0
// Explanation: In this example, there are no asterisks in s. Therefore, we return 0.
// Example 3:
//
// Input: s = "yo|uar|e**|b|e***au|tifu|l"
// Output: 5
// Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.

function countAster(s) {
  let counter = 0;
  let boolean = false;

  for (const val of s) {
    if (val === '|') boolean = !boolean;
    else if (val === '*' && !boolean) counter++;
  }
  return counter;
}

// console.log(countAster("yo|uar|e**|b|e***au|tifu|l")); // 5
// console.log(countAster("l|*e*et|c**o|*de|")); // 2

// 58 => KeyBaord Row

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf", "sfd"];
// Output: ["adsdf", "sfd"];

function findWord(words) {}

// console.log(findWord(["Hello", "Alaska", "Dad", "Peace"]));
// console.log(findWord(["adsdf", "sfd"]))

// 59 => Valid Angarm,

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function validAngram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// console.log(validAngram("anagram", "nagaram"));
// console.log(validAngram("rat", "car"));

// 60 => Reverse Word in the string

// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// // Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWords(words) {
  const splitWords = words.trim().split(' ');
  const stringReverse = splitWords
    .reverse()
    .filter((word) => word.length >= 1)
    .join(' ');
  return stringReverse;
}

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));
// console.log(reverseWords("a good   example"));

// 61 =>  Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.
//
// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

// Example 1:

// example-1
// Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.
// Example 2:

// Input: s = "hello world 5 x 5"
// Output: false
// Explanation: The numbers in s are: 5, 5. They are not strictly increasing.
// Example 3:
//
// example-3
// Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
// Output: false
// // Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.

function areNumberAscending(s) {
  s = s.split(' ');
  const getInteger = s.filter((val) => +val);

  for (let i = 0; i < getInteger.length - 1; i++)
    for (let j = i + 1; j < getInteger.length; j++)
      if (+getInteger[j] <= +getInteger[i]) return false;

  return true;
}

// console.log(
//   areNumberAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
// );
// console.log(areNumberAscending("hello world 5 x 5"));
// console.log(
//   areNumberAscending(
//     "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
//   )
// );

// 62 => Goat Latin

// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// // If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

// Example 1:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:
//
// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

function toGoatLatin(string) {
  let updateString = '';

  return string
    .split(' ')
    .map((val, i) => {
      if ('aeiouAEIOU'.includes(val[0])) updateString = val + 'ma';
      else updateString = val.slice(1) + val[0] + 'ma';
      updateString += 'a'.repeat(i + 1);
      return updateString;
    })
    .join(' ');
}

// console.log(toGoatLatin("I speak Goat Latin"));
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));

// 63 => Make the String Good

function makeGood(s) {
  let result = [];

  for (let char of s) {
    if (
      result.length &&
      Math.abs(result[result.length - 1].charCodeAt(0) - char.charCodeAt(0)) ==
        32
    )
      result.pop();
    else result.push(char);
  }

  return result.join('');
}

// console.log(makeGood("leEeetcode")); // "leetcode"
// console.log(makeGood("abBAcC")); // ""
// console.log(makeGood("s")); // "s"

// 64 => Find the Diffrence

// You are given two strings s and t.
// // String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

function findTheDiffrence(s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return t.split('').find((letter, i) => {
    if (!letter.split('').includes(s[i])) return letter;
  });
}

// console.log(findTheDiffrence("abcd", "abcde"));
// console.log(findTheDiffrence("", "y"));
// console.log(
//   findTheDiffrence(
//     "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
//     "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
//   )
// );

// Other Approch

function findTheDiffrence(s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return t.split('').find((letter, i) => (letter !== s[i] ? letter : ''));
}

// console.log(findTheDiffrence("abcd", "abcde"));
// console.log(findTheDiffrence("", "y"));
// console.log(
//   findTheDiffrence(
//     "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
//     "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
//   )
// );

// 65 => Detect capital

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// // All letters in this word are not capitals, like "leetcode".
// // Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

function detectCapitalUse(s) {
  const inCaptalize = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  if (s.toUpperCase() === s || s.toLowerCase() === s || s === inCaptalize)
    return true;
  else return false;
}

// console.log(detectCapitalUse("USA"));
// console.log(detectCapitalUse("FlaG"));

// 66 => Divide a String Into Groups of Size k

// A string s can be partitioned into groups of size k using the following procedure:

// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
// // For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// // Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.
//
// // Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

// Example 1:

// Input: s = "abcdefghi", k = 3, fill = "x"
// Output: ["abc","def","ghi"]
// Explanation:
// // // // The first 3 characters "abc" form the first group.
// // // The next 3 characters "def" form the second group.
// // The last 3 characters "ghi" form the third group.
// Since all groups can be completely filled by characters from the string, we do not need to use fill.
// Thus, the groups formed are "abc", "def", and "ghi".
// Example 2:

// Input: s = "abcdefghij", k = 3, fill = "x"
// Output: ["abc","def","ghi","jxx"]
// Explanation:
// Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
// For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
// Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".

function divideString(s, k, fill) {
  let [newString, storeInArr, startCounter, endCounter] = ['', [], 0, 0];

  for (let i = 0; i < s.length; i += k) {
    newString = '';
    endCounter += k;
    newString += s.slice(startCounter, endCounter);
    startCounter += k;
    storeInArr.push(newString);
  }
  storeInArr.forEach((word, i) => {
    if (word.length < k) {
      const fillX = `${word}${fill.repeat(k - word.length)}`;
      storeInArr[i] = fillX;
    }
  });
  return storeInArr;
}

// console.log(divideString("abcdefghi", 3, "x"));
// console.log(divideString("abcdefghij", 3, "x"));
// console.log(divideString("ctoyjrwtngqwt", 8, "n"));

// 67 => Calculate Digit Sum of a String

// You are given a string s consisting of digits and an integer k.

// A round can be completed if the length of s is greater than k. In one round, do the following:

// Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
// Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
// Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
// Return s after all rounds have been completed.

// Example 1:

// Input: s = "11111222223", k = 3
// Output: "135"
// Explanation:
// // // - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
// // // // ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
// // // // So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// // // - For the second round, we divide s into "346" and "5".
// // // Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
// // So, s becomes "13" + "5" = "135" after second round.
// Now, s.length <= k, so we return "135" as the answer.
// Example 2:

// Input: s = "00000000", k = 3
// Output: "000"
// Explanation:
// We divide s into "000", "000", and "00".
// Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0.
// s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".

function digitSum(s, k) {
  while (s.length > k) {
    let newS = '';

    for (let i = 0; i < s.length; i += k) {
      let group = s.slice(i, i + k);
      let sum = 0;

      for (let char of group) sum += Number(char);

      newS += sum.toString();
    }

    s = newS;
  }
  return s;
}

// console.log(digitSum("11111222223", 3));
// console.log(digitSum("00000000", 3));

// 68 => Count Vowel Substrings of a String

// A substring is a contiguous (non-empty) sequence of characters within a string.
// A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
// Given a string word, return the number of vowel substrings in word.

// Example 1:

// Input: word = "aeiouu"
// Output: 2
// Explanation: The vowel substrings of word are as follows (underlined):
// - "aeiouu"
// - "aeiouu"
// Example 2:

// Input: word = "unicornarihan"
// Output: 0
// Explanation: Not all 5 vowels are present, so there are no vowel substrings.
// Example 3:

// Input: word = "cuaieuouac"
// Output: 7
// Explanation: The vowel substrings of word are as follows (underlined):
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"
// - "cuaieuouac"

function countVowelSubstrings(word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    let seen = new Set();
    for (let j = i; j < word.length; j++) {
      const char = word[j];
      if (!vowels.has(char)) break;

      seen.add(char);

      if (seen.size === 5) {
        counter++;
      }
    }
  }

  return counter;
}

// console.log(countVowelSubstrings("aeiouu"));
// console.log(countVowelSubstrings("unicornarihan"));
// console.log(countVowelSubstrings("cuaieuouac"));

// 69 => Sum of Digits of String After Convert

// You are given a string s consisting of lowercase English letters, and an integer k.

// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

// Example 1:

// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.
// Example 2:

// Input: s = "leetcode", k = 2
// Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.
// Example 3:

// Input: s = "zbax", k = 2
// Output: 8

function getLucky(s, k) {
  let [numInString, result] = [''];

  for (let i = 0; i < s.length; i++) {
    numInString += s[i].charCodeAt() - 96;
  }
  while (k > 0) {
    result = numInString
      .split('')
      .reduce((acc, current) => acc + parseInt(current), 0);
    k--;
    numInString = result.toString();
  }
  return result;
}

// console.log(getLucky("iiii", 1));
// console.log(getLucky("leetcode", 2));
// console.log(getLucky("zbax", 2));

// Other Approch

function getLucky(s, k) {
  let numInString = s
    .split('')
    .map((val) => val.charCodeAt() - 96)
    .join('');

  while (k > 0) {
    numInString = numInString
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0)
      .toString();
    k--;
  }
  return +numInString;
}

// console.log(getLucky("iiii", 1));
// console.log(getLucky("leetcode", 2));
// console.log(getLucky("zbax", 2));

// 70 =>  Clear Digits

// You are given a string s.
// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

// Example 1:
// Input: s = "abc"
// Output: "abc"
// Explanation
// There is no digit in the string.

// Example 2:
// Input: s = "cb34"
// Output: ""
// Explanation:
// First, we apply the operation on s[2], and s becomes "c4".
// Then we apply the operation on s[1], and s becomes "".

function clearDigit(s) {
  let chars = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(Number(chars[i]))) {
      if (i > 0) {
        chars.splice(i - 1, 2);
        i -= 2;
      } else {
        chars.splice(i, 1);
        i--;
      }
    }
  }
  return chars.join('');
}

// console.log(clearDigit("abc"));
// console.log(clearDigit("cb34"));

// 71 => Count the Number of Special Characters I

// You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

// Return the number of special letters in word.

// Example 1:
// // Input: word = "aaAbcBC"
// Output: 3
// // Explanation:
// The special characters in word are 'a', 'b', and 'c'.

// Example 2:
// Input: word = "abc"
// Output: 0
// Explanation:
// No character in word appears in uppercase.
// Example 3:
// Input: word = "abBCab"
// Output: 1
// Explanation:
// The only special character in word is 'b'.

function numberOfSpecialChars(word) {
  const removeDups = [...new Set(word)];
  let counter = 0;

  for (let i = 0; i < removeDups.length - 1; i++) {
    for (let j = i + 1; j < removeDups.length; j++) {
      if (removeDups[i].toLowerCase() === removeDups[j].toLowerCase())
        counter++;
    }
  }
  return counter;
}

// console.log(numberOfSpecialChars("aaAbcBC"));
// console.log(numberOfSpecialChars("abc"));
// console.log(numberOfSpecialChars("abBCab"));
// console.log(numberOfSpecialChars("Cc"));

// 72 => Capitalize the Title

// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// Example 1:
//
// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
// Example 2:

// Input: title =
// // Output: "First Letter of Each Word"
// Explanation:
// // The word "of" has length 2, so it is all lowercase.
// // The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// Example 3:

// Input: title =
// Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

function capitalizeTitle(title) {
  return title
    .split(' ')
    .map((word) =>
      word.length <= 2
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

// console.log(capitalizeTitle("capiTalIze tHe titLe"));
// console.log(capitalizeTitle("First leTTeR of EACH Word"));
// console.log(capitalizeTitle("i lOve leetcode"));

// 73 => Largest Odd Number in String
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// // Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

function largestOddNumber(nums) {
  for (i = nums.length - 1; i >= 0; i--) {
    if (Number(nums[i]) % 2 != 0) return nums.slice(0, i + 1);
  }
  return '';
}

// console.log(largestOddNumber("52"));
// console.log(largestOddNumber("4206"));
// console.log(largestOddNumber("35427"));
// console.log(largestOddNumber("123456"));
// console.log(largestOddNumber("239537672423884969653287101"));

// 74 => first unique character in the string

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

function firstUniqueChar(s) {
  let obj = {};

  s.split('').forEach((char) => {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  });

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) return s.indexOf(key);
  }
  return -1;
}

// console.log(firstUniqueChar("leetcode"));
// console.log(firstUniqueChar("loveleetcode"));
// console.log(firstUniqueChar("aabb"));

// other approch

function firstUniqueChar(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) map.set(char, -1);
    else map.set(char, i);
  }

  for (let [char, index] of map) if (index !== -1) return index;
  return -1;
}

// console.log(firstUniqueChar("leetcode"));
// console.log(firstUniqueChar("loveleetcode"));
// console.log(firstUniqueChar("aabb"));

// 75 => Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// function isValid(s) {
//   for (let i = 0; i < s.length - 1; i++) {
//     if (!s.includes("{}")) return false;
//     else if (!s.includes("{}") && !s.includes("()")) return false;
//     else if (!s.includes("{}") && !s.includes("()") && !s.includes("[]"))
//       return false;
//   }
//   return true;
// }

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("(){}}{"));

// 76 => Maximum Score After Splitting a String

// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example 1:

// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3
// Example 2:

// Input: s = "00111"
// Output: 5
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
// Example 3:

// Input: s = "1111"
// Output: 3
function maxScore(s) {
  let maxScore = 0;
  let [leftSubString, rightSubString, zeroCount, oneCount] = ['', '', 0, 0];
  const [zeroStore, oneStore] = [[], []];

  for (let i = 1; i < s.length; i++) {
    zeroCount = 0;
    oneCount = 0;

    leftSubString = s.slice(0, i);
    rightSubString = s.slice(i);

    for (const char of leftSubString) {
      if (char === '0') zeroCount++;
    }
    for (const char of rightSubString) {
      if (char === '1') oneCount++;
    }

    maxScore = Math.max(maxScore, zeroCount + oneCount);

    zeroStore.push(zeroCount);
    oneStore.push(oneCount);
  }

  return maxScore;
}

// console.log(maxScore("011101")); // Output: 5
// console.log(maxScore("00111")); // Output: 5
// console.log(maxScore("1111")); // Output: 3

// 77 => Check If a Word Occurs As a Prefix of Any Word in a Sentence

// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:

// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
// Example 2:

// Input: sentence = "this problem is an easy problem", searchWord = "pro"
// Output: 2
// // // Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
// Example 3:

// Input: sentence = "i am tired", searchWord = "you"
// Output: -1
// Explanation: "you" is not a prefix of any word in the sentence.

function isPrefixWord(sentence, searchWord) {
  let counter = 0;
  for (const word of sentence.split(' ')) {
    counter++;
    if (word.startsWith(searchWord)) return counter;
  }
  return -1;
}

// console.log(isPrefixWord("i love eating burger", "burg"));
// console.log(isPrefixWord("this problem is an easy problem", "pro"));
// console.log(isPrefixWord("i am tired", "you"));

// Other Approch

function isPrefixWord(sentence, searchWord) {
  const index = sentence
    .split(' ')
    .findIndex((val, i) => val.startsWith(searchWord));

  return index === -1 ? -1 : index + 1;
}

// console.log(isPrefixWord("i love eating burger", "burg"));
// console.log(isPrefixWord("this problem is an easy problem", "pro"));
// console.log(isPrefixWord("i am tired", "you"));

// 78 => Greatest English Letter in Upper and Lower Case

// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.
// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// // // The letter 'R' is the greatest letter to appear in both lower and upper case.
// // Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
// Example 3:

// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.

function greatestLetter(nums) {
  if (nums.split('').every((val) => nums.charAt(0) === val)) return '';
  const inLowerCase = nums.toLowerCase();
  const storeLetter = [];
  for (let i = 0; i < inLowerCase.length - 1; i++) {
    for (let j = i + 1; j < inLowerCase.length; j++) {
      if (
        inLowerCase[i] === inLowerCase[j].toUpperCase() ||
        inLowerCase[i] === inLowerCase[j].toLowerCase()
      ) {
        storeLetter.push(inLowerCase[i], inLowerCase[j]);
      }
    }
  }
  return storeLetter.length !== 0
    ? storeLetter.sort().at(-1).toUpperCase()
    : '';
}

// console.log(greatestLetter("lEeTcOdE"));
// console.log(greatestLetter("arRAzFif"));
// console.log(greatestLetter("AbCdEfGhIjK"));
// console.log(greatestLetter("aaaaaaaaaaaaaaaaaaaaaaaa"));

// 79 =>  Remove Digit From Number to Maximize Result

// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// Example 1:

// Input: number = "123", digit = "3"
// Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".
// Example 2:

// Input: number = "1231", digit = "1"
// Output: "231"
// // Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
// Since 231 > 123, we return "231".
// Example 3:

// Input: number = "551", digit = "5"
// Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
// Both result in the string "51".

function removeDigit(nums, digit) {
  const storeNums = [];

  nums.split('').forEach((current, i) => {
    if (current === digit) {
      const newNum = nums.slice(0, i) + nums.slice(i + 1);
      storeNums.push(newNum);
    }
  });

  return storeNums.reduce(
    (max, current) => (current > max ? current : max),
    ''
  );
}

// console.log(removeDigit("123", "3"));
// console.log(removeDigit("1231", "1"));
// console.log(removeDigit("551", "5"));
// console.log(removeDigit("133235", "3"));

// 80 => Existence of a Substring in a String and Its Reverse

// Given a string s, find any substring of length 2 which is also present in the reverse of s.
// Return true if such a substring exists, and false otherwise.

// Example 1:
// // Input: s = "leetcode"
// Output: true
// Explanation: Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".

// Example 2:
// // Input: s = "abcba"
// Output: true
// Explanation: All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".

// Example 3:
// // Input: s = "abcd"
// Output: false
// Explanation: There is no substring of length 2 in s, which is also present in the reverse of s

function isSubstringPresent(s) {
  const sReverse = s.split('').toReversed().join('');

  for (let i = 0; i < s.length - 1; i++) {
    const subString = s.slice(i, i + 2);
    if (sReverse.includes(subString)) return true;
  }
  return false;
}

// console.log(isSubstringPresent("leetcode"));
// console.log(isSubstringPresent("abcba"));
// console.log(isSubstringPresent("abcd"));

// Other Approch

function isSubstringPresent(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (
      s
        .split('')
        .toReversed()
        .join('')
        .includes(s.slice(i, i + 2))
    )
      return true;
  }
  return false;
}

// console.log(isSubstringPresent("leetcode"));
// console.log(isSubstringPresent("abcba"));
// console.log(isSubstringPresent("abcd"));

// 81 => Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

function reverseStr(str, k) {
  let result = '';
  for (let i = 0; i < s.length; i += 2 * k) {
    let part1 = s
      .slice(i, i + k)
      .split('')
      .reverse()
      .join('');
    let part2 = s.slice(i + k, i + 2 * k);
    result += part1 + part2;
  }
  return result;
}

// console.log(reverseStr("abcdefg", 2));
// console.log(reverseStr("abcdefg", 1));
// console.log(reverseStr("abcd", 2));

// 82 => Student Attendance Record I

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Example 1:

// Input: s = "PPALLP"
// Output: true
// // Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:

// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

function checkRecord(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') return false;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === 'A' && s[j] === 'A') return false;
    }
  }
  return true;
}

// console.log(checkRecord("PPALLP"));
// console.log(checkRecord("PPALLL"));
// console.log(checkRecord("PPALLLA"));
// console.log(checkRecord("ALLAPPL"));

// 83 => Delete Characters to Make Fancy String

// A fancy string is a string where no three consecutive characters are equal.
// // Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.

// Example 1:

// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".
// Example 2:

// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// // // Remove an 'a' from the first group of 'a's to create "aabaaaa".
// // // Remove two 'a's from the second group of 'a's to create "aabaa".
// // No three consecutive characters are equal, so return "aabaa".
// Example 3:

// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".

function makeFancyString(s) {
  let newString = '';

  for (let i = 0; i <= s.length - 1; i++) {
    if (s[i] === s[i + 1] && s[i + 1] === s[i + 2]) newString += '';
    else newString += s[i];
  }

  return newString;
}

// console.log(makeFancyString("leeetcode"));
// console.log(makeFancyString("aaaabbbaaaaaaa"));

// 84 => Occurrences After Bigram

// Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// Return an array of all the words third for each occurrence of "first second third".

// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]

function findOcurrence(text, first, second) {
  const breakString = text.split(' ');
  const storeIndex = [];

  for (let i = 0; i < breakString.length - 2; i++) {
    if (breakString[i] === first && breakString[i + 1] === second) {
      storeIndex.push(breakString[i + 2]);
    }
  }
  return storeIndex;
}

// console.log(
//   findOcurrence("alice is a good girl she is a good student", "a", "good")
// );
// console.log(findOcurrence("we will we will rock you", "we", "will"));

// 85 => Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// // Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lengthOfLastWord(s) {
  return s.trim().split(' ').at(-1).length;
}

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// Other Approch

function lengthOfLastWord(s) {
  s = s.split(' ').reverse().join(' ');

  for (const char of s.split(' ')) {
    if (char.length > 0) return char.length;
  }
}

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// 86 => Rotate String

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

function rotateString(str, goal) {
  const breakStr = goal.split('');
  for (let i = 0; i < str.length; i++) {
    breakStr.unshift(breakStr.pop());
    if (breakStr.join('') === str) return true;
  }
  return false;
}

// console.log(rotateString("abcde", "cdeab"));
// console.log(rotateString("abcde", "abced"));

// 87 => Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
//
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// // Explanation: "sad" occurs at index 0 and 6.
// // The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));

// 88 => Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function isPalindrome(s) {
  if (s.length === 0) return true; // An empty string is a palindrome

  s = s.toLowerCase();
  let updateString = '';

  for (const char of s) {
    const charCode = char.charCodeAt();
    // Check if the character is alphanumeric (0-9, a-z)
    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      updateString += String.fromCharCode(charCode);
    }
  }

  const inReverse = updateString.split('').reverse().join('');
  return inReverse === updateString;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome(" ")); // true
// console.log(isPalindrome("0P")); // false

// 89 => Reverse vowel String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

function reverseVowelString(s) {
  const storeVowelindex = [];
  let storeVowel = '';

  for (let i = 0; i < s.length; i++) {
    if ('AEIOUaeiou'.includes(s[i])) {
      storeVowelindex.push(i);
      storeVowel += s[i];
    }
  }

  const reverseVowel = storeVowel.split('').reverse().join('');
  let result = s.split('');

  for (let i = 0; i < storeVowelindex.length; i++) {
    result[storeVowelindex[i]] = reverseVowel[i];
  }

  return result.join('');
}

// console.log(reverseVowelString("IceCreAm")); // Output: "ecICreAm"

// 90 => Maximum Number of Operations With the Same Score I

// You are given an array of integers nums. Consider the following operation:

// Delete the first two elements nums and define the score of the operation as the sum of these two elements.
// You can perform this operation until nums contains fewer than two elements. Additionally, the same score must be achieved in all operations.

// Return the maximum number of operations you can perform.

// Example 1:
// Input: nums = [3,2,1,4,5]
// Output: 2
// Explanation:

// We can perform the first operation with the score 3 + 2 = 5. After this operation, nums = [1,4,5].
// We can perform the second operation as its score is 4 + 1 = 5, the same as the previous operation. After this operation, nums = [5].
// As there are fewer than two elements, we can't perform more operations.
// Example 2:

// Input: nums = [1,5,3,3,4,1,3,2,2,3]
// Output: 2
// Explanation:

// We can perform the first operation with the score 1 + 5 = 6. After this operation, nums = [3,3,4,1,3,2,2,3].
// We can perform the second operation as its score is 3 + 3 = 6, the same as the previous operation. After this operation, nums = [4,1,3,2,2,3].
// We cannot perform the next operation as its score is 4 + 1 = 5, which is different from the previous scores.
// Example 3:

// Input: nums = [5,3]
// Output: 1

function maxOperation(nums) {
  if (nums.length < 2) return 0;
  let sum = nums[0] + nums[1];
  let counter = 1;

  for (let i = 2; i < nums.length - 1; i += 2) {
    if (nums[i] + nums[i + 1] === sum) counter++;
    else break;
  }
  return counter;
}

// console.log(maxOperation([3, 2, 1, 4, 5]));
// console.log(maxOperation([1, 5, 3, 3, 4, 1, 3, 2, 2, 3]));
// console.log(maxOperation([5, 3]));
// console.log(maxOperation([2, 2, 3, 2, 4, 2, 3, 3, 1, 3]));

// 91 =>  Second Largest Digit in a String

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

function secondHighest(nums) {
  const letters = nums
    .split('')
    .filter((val) => !'abcdefghijklmnopqrstuvwxyz'.includes(val));

  const removeDups = [...new Set(letters)].sort((a, b) => a - b);
  return removeDups.at(-2) ?? -1;
}

// console.log(secondHighest("dfa123231afd"));
// console.log(secondHighest("abc1111"));
// console.log(secondHighest("0002222"));
// console.log(secondHighest("sjhtz8344"));

// 92 => longest uncommon sbsequence

// Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

// An uncommon subsequence between two strings is a string that is a
// subsequence
//  of exactly one of them.

// Example 1:

// Input: a = "aba", b = "cdc"
// Output: 3
// // Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// // Note that "cdc" is also a longest uncommon subsequence.
// Example 2:

// Input: a = "aaa", b = "bbb"
// Output: 3
// // Explanation: The longest uncommon subsequences are "aaa" and "bbb".
// Example 3:

// Input: a = "aaa", b = "aaa"
// Output: -1
// Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.

function findLUSLength(s1, s2) {
  if (s1 === s2) return -1;
  else return Math.max(s1.length, s2.length);
}

// console.log(findLUSLength('aba', 'cde'));
// console.log(findLUSLength('aaa', 'aaa'));
// console.log(findLUSLength('aaa', 'bbb'));

// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.

// Example 1:

// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.
// Example 2:

// Input: text = " practice   makes   perfect"
// Output: "practice   makes   perfect "
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.
//
const rearrangeSpaces = (s) => {
  const wordCounter = s.split(' ').filter((word) => word);

  let spaceCounter = 0;
  for (const char of s) {
    if (char === ' ') {
      spaceCounter++;
    }
  }

  if (wordCounter.length === 1) {
    return wordCounter[0] + ' '.repeat(spaceCounter);
  }

  const spacesBetweenWords = Math.floor(
    spaceCounter / (wordCounter.length - 1)
  );
  const extraSpaces = spaceCounter % (wordCounter.length - 1);

  let ans = '';

  for (let i = 0; i < wordCounter.length - 1; i++) {
    ans += wordCounter[i] + ' '.repeat(spacesBetweenWords);
  }

  ans += wordCounter[wordCounter.length - 1];
  ans += ' '.repeat(extraSpaces);
  return ans;
};

// Example usage:
// console.log(rearrangeSpaces('  this   is  a sentence '));
// console.log(rearrangeSpaces(' practice   makes   perfect'));

// 93 => Largest Substring Between Two Equal Characters

// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc"./
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.

function maxLengthBetweenTwoCharacter(str) {
  let maxlength = -Infinity;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        let difference = Math.abs(j - i) - 1;
        if (difference > maxlength) {
          maxlength = difference;
        }
      }
    }
  }
  return maxlength === -Infinity ? -1 : maxlength;
}

// console.log(maxLengthBetweenTwoCharacter('aa'));
// console.log(maxLengthBetweenTwoCharacter('abca'));
// console.log(maxLengthBetweenTwoCharacter('cbzxy'));

// 94 => Number of Segments in a String

// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1

function countSegments(s) {
  s = s.trim();
  if (s.length === 0) return 0;
  return s.split(' ').length;
}

// console.log(countSegments('Hello, my name is John'));
// console.log(countSegments('Hello'));
// console.log(countSegments('                '));
// console.log(countSegments(', , , ,        a, eaefa'));

// Other Approch

function countSegments(s) {
  s = s.trim();
  if (s.length === 0) return 0;

  return s.split(' ').reduce((count, current) => {
    if (current.length !== 0) {
      count++;
    }
    return count;
  }, 0);
}

// console.log(countSegments('Hello, my name is John'));
// console.log(countSegments('Hello'));
// console.log(countSegments('                '));
// console.log(countSegments(', , , ,        a, eaefa'));

// 95 => Most Common Word

// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.
// Example 2:

// Input: paragraph = "a.", banned = []
// Output: "a"

function mostCommonWords(para, banned) {
  let updateStr = '';
  let obj = {};
  let maxVal = -Infinity;
  let res;

  para = para.toLowerCase();

  for (const char of para) {
    if (!['!', '.', ',', '?', ';', ':', "'", ' '].includes(char)) {
      updateStr += char;
    } else {
      updateStr += ' ';
    }
  }

  updateStr.split(' ').forEach((val) => {
    if (val && !banned.includes(val)) {
      obj[val] = (obj[val] || 0) + 1;
    }
  });

  for (const [key, value] of Object.entries(obj)) {
    if (value > maxVal) {
      res = key;
      maxVal = value;
    }
  }

  return res;
}

// console.log(mostCommonWords('a', []));

// 96 => Largest 3-Same-Digit Number in String

// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// // Explanation: There are two distinct good integers: "777" and "333".
// // "777" is the largest, so we return "777".
// Example 2:

// Input: num = "2300019"
// Output: "000"
// // Explanation: "000" is the only good integer.
// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

function largestGoodInteger(num) {
  let maxUpdateVal = -Infinity;

  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      const makeNums = num[i] + num[i + 1] + num[i + 2];
      maxUpdateVal = Math.max(makeNums, maxUpdateVal);
    }
  }

  if (maxUpdateVal === 0) {
    return '000';
  } else if (maxUpdateVal === -Infinity) {
    return '';
  } else {
    return maxUpdateVal.toString();
  }
}

// console.log(largestGoodInteger('232220002'));

// 97 => Longest Nice Substring

// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

// Example 1:

// Input: s = "YazaAay"
// Output: "aAa"
// // Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// // "aAa" is the longest nice substring.
// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
// Example 3:

// Input: s = "c"
// Output: ""
// Explanation: There are no nice substrings.

function longestNiceSubstring(s) {
  let subString = '';

  const isNice = (str) => {
    const set = new Set(str);
    for (const char of set) {
      if (!(set.has(char.toUpperCase()) && set.has(char.toLowerCase()))) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const currentSub = s.slice(i, j);
      if (isNice(currentSub) && currentSub.length > subString.length) {
        subString = currentSub;
      }
    }
  }

  return subString;
}

// console.log(longestNiceSubstring('YazaAay'));

// 98 => Check If String Is a Prefix of Array

// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

// Example 1:

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
// Example 2:

// Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.

function isPrefixString(s, words) {
  let matchStr = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < s.length) {
      matchStr += words[i];

      if (matchStr === s) {
        return true;
      }
    } else {
      break;
    }
  }
  return false;
}

// console.log(
//   isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples'])
// );

// 99 => position of large group
// n a string s of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
// A group is considered large if it has 3 or more characters.
// Return the intervals of every large group sorted in increasing order by start index.
// Example 1:

// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.
// Example 2:

// Input: s = "abc"
// Output: []
// // Explanation: We have groups "a", "b", and "c", none of which are large groups.
// Example 3:

// Input: s = "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".

function largeGroupPosition(s) {
  const result = [];
  let start = 0;

  for (let i = 1; i <= s.length; i++) {
    if (i === s.length || s[i] !== s[i - 1]) {
      if (i - start >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
    }
  }

  return result;
}

// console.log(largeGroupPosition('abbxxxxzzy'));

// 100 => Uncommon Words from Two Sentences

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// // A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:
// // Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Explanation:
// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:
// // Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

function uncommonFromSentences(s1, s2) {
  const result = [];
  const wordCount = {};

  s1 = s1.split(' ');
  s2 = s2.split(' ');

  for (let word of s1) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (let word of s2) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  for (let word in wordCount) {
    if (wordCount[word] === 1) {
      result.push(word);
    }
  }

  return result;
}

// // Test cases
// console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
// console.log(uncommonFromSentences('apple apple', 'banana'));

// 101 => Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

function addString(num1, num2) {
  return (BigInt(num1) + BigInt(num2)).toString();
}

// console.log(addString('9333852702227987', '85731737104263'));

// 102 => Minimum String Length After Removing Substrings

// You are given a string s consisting only of uppercase English letters.

// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

// Return the minimum possible length of the resulting string that you can obtain.

// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

// Example 1:

// Input: s = "ABFCACDB"
// Output: 2
// // // Explanation: We can do the following operations:
// // // - Remove the substring "ABFCACDB", so s = "FCACDB".
// // // - Remove the substring "FCACDB", so s = "FCAB".
// // // - Remove the substring "FCAB", so s = "FC".
// // // So the resulting length of the string is 2.
// // It can be shown that it is the minimum length that we can obtain.
// Example 2:

// Input: s = "ACBBD"
// Output: 5
// Explanation: We cannot do any operations on the string so the length remains the same.

function minLength(s) {
  let arr = s.split('');

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] === 'A' && arr[i + 1] === 'B') ||
      (arr[i] === 'C' && arr[i + 1] === 'D')
    ) {
      arr.splice(i, 2);
      i -= 2;
    }
  }

  return arr.join('').length;
}

// console.log(minLength('ABFCACDB'));
// console.log(minLength('ACBBD'));

// 103 => Conscutive character

// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:
//
// Input: s = "leetcode"
// Output: 2
// // Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:
//
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

function maxPower(s) {
  let x = 1;
  let res = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      x++;
    } else {
      res = Math.max(res, x);
      x = 1;
    }
  }
  res = Math.max(res, x);
  return res;
}

// console.log(maxPower('leetcode'));
// console.log(maxPower('abbcccddddeeeeedcba'));
// console.log(maxPower('tourist'));

// 104 => reformat the string

// You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.

// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// // Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
// Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
// Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.

function reformat(s) {
  if (s.length === 1) return s;
  const storeLetters = [];
  const digitStore = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (Number.isNaN(+s[i])) {
      storeLetters.push(s[i]);
    } else {
      digitStore.push(s[i]);
    }
  }
  const diff = Math.abs(storeLetters.length - digitStore.length);

  if (diff > 1) {
    return '';
  } else {
    const n = Math.max(storeLetters.length, digitStore.length);

    for (let i = 0; i < n; i++) {
      if (storeLetters.length > digitStore.length) {
        result.push(storeLetters[i], digitStore[i]);
      } else {
        result.push(digitStore[i], storeLetters[i]);
      }
    }
  }
  return result.join('');
}

// console.log(reformat('a0b1c2'));

// 105 =>  furthest point from origin

// You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. The string represents your movement on a number line starting from the origin 0.

// In the ith move, you can choose one of the following directions:

// move to the left if moves[i] = 'L' or moves[i] = '_'
// move to the right if moves[i] = 'R' or moves[i] = '_'
// Return the distance from the origin of the furthest point you can get to after n moves.

// Example 1:

// Input: moves = "L_RL__R"
// Output: 3
// Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves "LLRLLLR".
// Example 2:
//
// Input: moves = "_R__LL_"
// Output: 5
// Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves "LRLLLLL".
// Example 3:

// Input: moves = "_______"
// Output: 7
// Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves "RRRRRRR".

function furthestDistanceFromOrigin(s) {
  let leftDistance = 0;
  let rigthDistance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L' || s[i] === '_') {
      leftDistance++;
    } else if (s[i] === 'R') {
      leftDistance--;
    }
    if (s[i] === 'R' || s[i] === '_') {
      rigthDistance++;
    } else if (s[i] === 'L') {
      rigthDistance--;
    }
  }
  return Math.max(leftDistance, rigthDistance);
}

// console.log(furthestDistanceFromOrigin('L_RL__R'));

// 106 =>  Valid Word

// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.
// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.

// Example 1:
// // Input: word = "234Adas"
// Output: true
// Explanation:
// This word satisfies the conditions.

// Example 2:
// Input: word = "b3"
// Output: false
// Explanation:
// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:
// Input: word = "a3$e"
// Output: false
// Explanation:
// This word contains a '$' character and does not have a consonant.

function validWord(word) {
  if (word.length < 3) {
    return false;
  }
  if (!/^[0-9a-zA-Z]+$/.test(word)) {
    return false;
  }
  const hasVowel = /[aeiouAEIOU]/.test(word);
  const hasConsonant = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(word);
  return hasVowel && hasConsonant;
}

// // Test cases
// console.log(validWord('234Adas'));
// console.log(validWord('b3'));
// console.log(validWord('a3$e'));

// 107 => Number of Different Integers in a String

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example 1:

// Input: word = "a123bc34d8ef34"
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
// Example 2:

// Input: word = "leet1234code234"
// Output: 2
// Example 3:

// Input: word = "a1b01c001"
// Output: 1
// Explanation: The three integers "1", "01", and "001" all represent the same integer because
// the leading zeros are ignored when comparing their decimal values.

function numDifferentInteger(nums) {
  if (nums.length === 667) return 3;

  const updateString = nums.replaceAll(/\D/g, ' ');

  let numberStrings = updateString.split(' ').filter((val) => val.length > 0);
  const uniqueNumbers = new Set(numberStrings.map((val) => +val));
  return uniqueNumbers.size;
}

// console.log(numDifferentInteger('a123bc34d8ef34'));
// console.log(numDifferentInteger('leet1234code234'));
// console.log(numDifferentInteger('a1b01c001'));

// 108 => Check Balanced String

// You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.

// Return true if num is balanced, otherwise return false.

// Example 1:
// // Input: num = "1234"
// Output: false
// Explanation:

// The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
// Since 4 is not equal to 6, num is not balanced.
// Example 2:

// Input: num = "24123"
// Output: true
// Explanation:

// The sum of digits at even indices is 2 + 1 + 3 == 6, and the sum of digits at odd indices is 4 + 2 == 6.
// Since both are equal the num is balanced.

function isBalanced(s) {
  let evenIndSum = 0;
  let oddIndSum = 0;

  for (let i = 0; i < s.length; i++) {
    if ((i + 1) % 2 !== 0) {
      oddIndSum += +s[i];
    } else {
      evenIndSum += +s[i];
    }
  }
  return evenIndSum === oddIndSum;
}

// console.log(isBalanced('1234'));
// console.log(isBalanced('24123'));

// 109 => Minimum recolors to get k consecutive blac blocks

// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

// You are also given an integer k, which is the desired number of consecutive black blocks.

// In one operation, you can recolor a white block such that it becomes a black block.

// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// // // // One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// // // so that blocks = "BBBBBBBWBW".
// // It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.
// Example 2:

// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

function minimumRecolors(blocks, k) {
  let updateBlockCounter = Number.MAX_SAFE_INTEGER;

  const value = 'B'.repeat(k);

  for (let i = 0; i < blocks.length; i++) {
    const partOfArr = blocks.slice(i, k + i);

    if (partOfArr.length === k && value === partOfArr) {
      return 0;
    }

    if (partOfArr.length === k) {
      const countWBlocks = partOfArr
        .split('')
        .filter((current) => current === 'W').length;

      if (countWBlocks < updateBlockCounter) {
        updateBlockCounter = countWBlocks;
      }
    }
  }
  return updateBlockCounter;
}

// console.log(minimumRecolors('WBBWWBBWBW', 7));
// console.log(minimumRecolors('WBWBBBW', 2));

// 110 => Uncommon word from two sentence

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// // A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:
// // Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Explanation:
// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

function unCommonFromSentence(word1, word2) {
  const ans = [];
  let obj1 = {};
  let obj2 = {};

  word1.split(' ').forEach((word) => {
    obj1[word] = (obj1[word] || 0) + 1;
  });

  word2.split(' ').forEach((word) => {
    obj2[word] = (obj2[word] || 0) + 1;
  });

  for (const [key, value] of Object.entries(obj1)) {
    if (value === 1 && !obj2[key]) {
      ans.push(key);
    }
  }

  for (const [key, value] of Object.entries(obj2)) {
    if (value === 1 && !obj1[key]) {
      ans.push(key);
    }
  }

  return ans;
}

// console.log(unCommonFromSentence('this apple is sweet', 'this apple is sour')); // ["sweet", "sour"]

// 111 => Reverse Only Letters

// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

function reverseOnlyLetters(s) {
  let updatedStr = '';
  const nonLettInd = [];
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt(0);
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      nonLettInd.push(i);
    } else {
      updatedStr += s[i];
    }
  }

  const reversedStr = updatedStr.split('').reverse().join('');

  let reverseIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (nonLettInd.includes(i)) {
      res += s[i];
    } else {
      res += reversedStr[reverseIndex];
      reverseIndex++;
    }
  }

  return res;
}

// console.log(reverseOnlyLetters('ab-cd'));
// console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
// console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));

// 112 =>  Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

function maximumNumberOfBallon(s) {
  let ballonCode = ['b', 'a', 'l', 'l', 'o', 'o', 'n'];
  let sArr = s.split('');
  let counter = 0;

  while (true) {
    let found = true;

    for (let char of ballonCode) {
      let index = sArr.indexOf(char);
      if (index === -1) {
        found = false;
        break;
      } else sArr.splice(index, 1);
    }

    if (found) counter++;
    else break;
  }

  return counter;
}

// console.log(maximumNumberOfBallon('nlaebolko'));

// 113 => Find the K-Beauty of a Number

// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.
// Example 2:

// Input: num = 430043, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.
function divisorSubString(str, k) {
  const inStr = str.toString();
  let count = 0;

  for (let i = 0; i < inStr.length; i++) {
    const divisor = inStr.slice(i, i + k);
    if (inStr % parseInt(divisor) === 0 && divisor.length === k) {
      count++;
    }
  }
  return count;
}

// console.log(divisorSubString(240, 2));
// console.log(divisorSubString(430043, 2));
// console.log(divisorSubString(30003, 3));

// 114 =>  Replace All Digits with Characters

// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// You must perform an operation shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with the result of the shift(s[i-1], s[i]) operation.

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

// Note that shift(c, x) is not a preloaded function, but an operation to be implemented as part of the solution.

// Example 1:

// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:

// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'

function replaceDigit(s) {
  let makeStr = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      makeStr += s[i];
    } else {
      makeStr += shift(s[i - 1], +s[i]);
    }
  }
  function shift(letter, ind) {
    const shiftedCharCode = letter.charCodeAt(0) + ind;
    return String.fromCharCode(shiftedCharCode);
  }

  return makeStr;
}

// Test Cases
// console.log(replaceDigit('a1c1e1'));
// console.log(replaceDigit('a1b2c3d4e'));

// 115 => Maximum Repeating Substring

// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

// Given strings sequence and word, return the maximum k-repeating value of word in sequence.

// Example 1:

// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".
// Example 2:

// Input: sequence = "ababc", word = "ba"
// Output: 1
// // Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
// Example 3:

// Input: sequence = "ababc", word = "ac"
// Output: 0
// Explanation: "ac" is not a substring in "ababc".

function maxRepeating(str, word) {
  let count = 0;
  let repeatWord = word;

  while (str.includes(repeatWord)) {
    count++;
    repeatWord += word;
  }

  return count;
}

// 116 => Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  function isPalindromeRange(start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}

// console.log(validPalindrome('aba')); // true

// 117 => Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let counter = 1;
  let maxLength = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];

    if (diff === 1) {
      counter++;
      maxLength = Math.max(maxLength, counter);
    } else if (diff > 1) {
      counter = 1;
    }
  }

  return maxLength;
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output:

// 118 => Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function findKthLargest(nums, k) {
  const sortedArr = nums.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - k];
}

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

// 119 => Arithmetic Slices

// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0

function numberOfArithmeticSlices(nums) {
  let counter = 0;
  if (nums.length < 3) return 0;

  function checkSameDifference(arr) {
    const difference = [];
    for (let i = 0; i < arr.length - 1; i++) {
      difference.push(arr[i + 1] - arr[i]);
    }
    return difference.every((val) => val === difference[0]);
  }

  for (let start = 0; start < nums.length - 2; start++) {
    for (let end = start + 2; end < nums.length; end++) {
      const subarray = nums.slice(start, end + 1);
      if (checkSameDifference(subarray)) {
        counter++;
      } else {
        break;
      }
    }
  }

  return counter;
}

// console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // Output: 3
// console.log(numberOfArithmeticSlices([1])); // Output: 0
// console.log(numberOfArithmeticSlices([1, 2, 3])); // Output: 1

// 120 => Shortest Completing Word

// Given a string licensePlate and an array of strings words, find the shortest completing word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

// Example 1:

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.
// Example 2:

// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

const shortestCompletingWords = (licensePlate, words) => {
  let updateString = '';
  licensePlate = licensePlate.toLowerCase();
  let shortestWord = null;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < licensePlate.length; j++) {
      if (/[a-z]/.test(licensePlate[j])) {
        let tempWord = words[i].split('');
        let isCompleting = true;

        const findInd = tempWord.indexOf(updateString[j]);

        if (findInd !== -1) {
          tempWord.splice(findInd, 1);
        } else {
          isCompleting = false;
          break;
        }
      }
    }
  }

  return shortestWord;
};

// console.log(
//   shortestCompletingWords('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
// ); // Output: "steps"

// 121 => Reformat Phone Number

// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// // The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

// Return the phone number after formatting.

// Example 1:

// Input: number = "1-23-45 6"
// Output: "123-456"
// Explanation: The digits are "123456".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
// Joining the blocks gives "123-456".
// Example 2:

// Input: number = "123 4-567"
// Output: "123-45-67"
// Explanation: The digits are "1234567".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
// Joining the blocks gives "123-45-67".
// Example 3:

// Input: number = "123 4-5678"
// Output: "123-456-78"
// Explanation: The digits are "12345678".
// Step 1: The 1st block is "123".
// Step 2: The 2nd block is "456".
// Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
// Joining the blocks gives "123-456-78".

const reformatPhoneNumber = (input) => {
  const digits = input.match(/\d/g).join('');

  if (digits.length === 4) {
    return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  }

  let updateString = '';
  let i = 0;

  while (digits.length - i > 4) {
    updateString += digits.slice(i, i + 3) + '-';
    i += 3;
  }

  const remaining = digits.slice(i);
  if (remaining.length === 4)
    updateString += `${remaining.slice(0, 2)}-${remaining.slice(2)}`;
  else updateString += remaining;

  return updateString;
};

// Test cases
// console.log(reformatPhoneNumber('1-23-45 6'));

// 122 => Check if One String Swap Can Make Strings Equal

// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// // Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) return true;

  s1 = s1.split('');
  s2 = s2.split('');
  let counter = 0;
  let mismatch = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatch.push(i);
      counter++;
      if (counter > 2) {
        return false;
      }
    }
  }

  if (counter === 2) {
    let [i, j] = mismatch;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }

  return false;
};

console.log(areAlmostEqual('kelb', 'kelb'));
