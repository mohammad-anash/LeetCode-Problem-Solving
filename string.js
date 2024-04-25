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

// 17 => Count Asterisks

// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.
// Note that each '|' will belong to exactly one pair.

const countAsterisks = (s) => {
  return s.split("|")
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));