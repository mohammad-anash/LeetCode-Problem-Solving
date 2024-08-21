// 1 => Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// // Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

function nextGreatestLetter(letter, char) {
  const storeEle = [];
  letter.forEach((ele) => {
    if (ele > char) storeEle.push(ele);
  });
  return storeEle[0] === undefined ? letter[0] : storeEle[0];
}

// console.log(nextGreatestLetter(["c", "f", "j"], "a"));
// console.log(nextGreatestLetter(["c", "f", "j"], "c"));
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));

// Solve with Binary Search

function nextGreatestLetter(lett, char) {
  let low = 0;
  let high = lett.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (lett[mid] <= char) low = mid + 1;
    else high = mid - 1;
  }

  return lett[low % lett.length];
}

// console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
// console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // Output: "x"

// 2 => Arranging Coins

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Input: n = 5
// Output: 2
// // Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

function arrangeCoins(n) {
  if (n === 1) return n;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum > n) return i - 1;
  }
}

// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));

// Other Approch

function arranageCoins(n) {
  let row = 0;
  let coinUsed = 0;

  while (coinUsed <= n) {
    row++;
    coinUsed += row;
  }
  return row - 1;
}

// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));
