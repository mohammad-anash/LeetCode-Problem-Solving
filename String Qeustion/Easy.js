document.body.style.backgroundColor = "#212121";

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
  let result = "";
  result += command.replaceAll("()", "o").replaceAll("(al)", "al");
  // return result
}

// console.log(interpret("G()(al)"));
// console.log(interpret("G()()()()(al)"));
// console.log(interpret("(al)G(al)()()G"));

// one more way to solve

function interpret(command) {
  let result = command.split("()").join("o");
  let modifyString = result.split("(al)").join("al");
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
  return word1.join("") === word2.join("");
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
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    ar[indices[i]] = s[i];
  }
  return ar.join("");
}

// console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
// console.log(restoreString("abc", [0, 1, 2]));

// 9 => find the first palimdron string in the array

function firstPalimdrom(words) {
  for (const word of words) {
    const reverseWord = word.split("").reverse().join("");
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
    (current) => current === current.split("").reverse().join("")
  );
  return palindrome !== undefined ? palindrome : "";
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
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "i" || s[i] == "I") {
      str = str.split("").reverse().join("");
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
    .split(" ")
    .map((current) => current.toString().split("").reverse().join(""))
    .join(" ");
}

// console.log(reverseWords("Let's take LeetCode contest"));

// 13 => check if sentence is pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
function checkIfPangram(sentence) {
  return (
    Array.from(new Set(sentence)).map((letter) =>
      "abcedfghijklmnopqrstuvwxyz".includes(letter)
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
    .split("")
    .sort((a, b) => a - b)
    .join("");
  for (let i = 0; i < words.length; i++) {
    if (
      words[i]
        .toString()
        .split("")
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
  return s.split(" ").sort((a, b) => a - b);
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
  }, "");
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
  const letter = "abcedfghijklmnopqrstuvwxyz";
  let result = "";
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
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const transformations = new Set();

  words.forEach((words) => {
    let transformation = "";
    for (const letter of words) {
      const index = letter.charCodeAt() - "a".charCodeAt();

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
  s.split("").forEach((element, index) => {
    if (element === "*") {
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
      if (words[i].toString().split("").reverse().join("") === words[j]) {
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
      .split("")
      .reverse()
      .join("") + words.slice(getLetter + 1)
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
  let mergeString = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    mergeString += word1[i];
    mergeString += word2[i];
  }
  return mergeString.replaceAll("undefined", "");
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
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
  };
  const letterJToZ = {
    j: "10#",
    k: "11#",
    l: "12#",
    m: "13#",
    n: "14#",
    o: "15#",
    p: "16#",
    q: "17#",
    r: "18#",
    s: "19#",
    t: "20#",
    u: "21#",
    v: "22#",
    w: "23#",
    x: "24#",
    y: "25#",
    z: "26#",
  };

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
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
    if ("aeiou".includes(stringFirst[i])) counter1++;
    if ("aeiou".includes(stringSecond[i])) counter2++;
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
    if (s[i] === "I") {
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
    .split("")
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

  s.split("").forEach((letter) => {
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
  let removeParentheses = "";
  let openParenthesesCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (openParenthesesCount > 0) {
        removeParentheses += "(";
      }
      openParenthesesCount++;
    } else if (s[i] === ")") {
      openParenthesesCount--;
      if (openParenthesesCount > 0) {
        removeParentheses += ")";
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
    if (move === "U") {
      y++;
    } else if (move === "D") {
      y--;
    } else if (move === "R") {
      x++;
    } else if (move === "L") {
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
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };
  const getValue = (word) => {
    let value = "";
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
    (s.split("").filter((char) => char === letter).length / s.length) * 100
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
      "aeiou".includes(words[i].charAt(0)) &&
      "aeiou".includes(words[i].charAt(words[i].length - 1))
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
      if (splitWords[j] !== "") {
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

  let arr = text.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (const letter of brokenLetters) {
      if (arr[i].includes(letter)) {
        counter++;
        break;
      }
    }
  }
  return text.split(" ").length - counter;
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
  return result[k - 1] === undefined ? "" : result[k - 1];
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
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
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

  s.split("").forEach(
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
    if (val === "b") x = true;
    if (val === "a" && x) return false;
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
      s = s.split("").filter((val, index) => ![i, i + 1].includes(index));
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
  s.split(" ").forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        newStr[word[i]] = word.slice(0, i);
      }
    }
  });
  return newStr.join(" ").trim();
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
    if (val === "|") boolean = !boolean;
    else if (val === "*" && !boolean) counter++;
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
  return s.split("").sort().join("") === t.split("").sort().join("");
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
  const splitWords = words.trim().split(" ");
  const stringReverse = splitWords
    .reverse()
    .filter((word) => word.length >= 1)
    .join(" ");
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
  s = s.split(" ");
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
  let updateString = "";

  return string
    .split(" ")
    .map((val, i) => {
      if ("aeiouAEIOU".includes(val[0])) updateString = val + "ma";
      else updateString = val.slice(1) + val[0] + "ma";
      updateString += "a".repeat(i + 1);
      return updateString;
    })
    .join(" ");
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

  return result.join("");
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
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return t.split("").find((letter, i) => {
    if (!letter.split("").includes(s[i])) return letter;
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
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return t.split("").find((letter, i) => (letter !== s[i] ? letter : ""));
}

// console.log(findTheDiffrence("abcd", "abcde"));
// console.log(findTheDiffrence("", "y"));
// console.log(
//   findTheDiffrence(
//     "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
//     "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
//   )
// );