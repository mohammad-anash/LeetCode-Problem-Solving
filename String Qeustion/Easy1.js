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
