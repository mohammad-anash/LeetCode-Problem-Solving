// 1 => Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]

const buildArray = (nums) => {
  let ans = [...nums];
  for (let i = 0; i < ans.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

// console.log(buildArray([0, 2, 1, 5, 3, 4]));

// 2 => Numbers of Good Pair

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

let numIdeanticalPair = (arr) => {
  let goodPair = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && i < j) {
        goodPair++;
      }
    }
  }
  return goodPair;
};

// console.log(numIdeanticalPair([1, 2, 3, 1, 1, 3]));

// 3 => Final Value of Variable After Performing Operations

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

function finalValueAfterOperation(arr) {
  let x = 0;

  for (const operation of arr) {
    if (operation === "++X" || operation === "X++") {
      x++;
    } else if (operation === "--X" || operation === "X--") {
      x--;
    }
  }
  // return x;
}

// console.log(finalValueAfterOperation(["--X", "X++", "X++"]));

// other approch solve

function finalValueAfterOperation(arr) {
  return arr.reduce((x, current) => {
    if (current === "++X" || current === "X++") {
      x++;
    } else if (current === "--X" || current === "X--") {
      x--;
    }
    return x;
  }, 0);
}

// console.log(finalValueAfterOperation(["--X", "X++", "X++"]));

// 4 => Shuffle the Array

// Given the array nums consisting of 2n elements in the form [,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since =2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

function shuffle(arr) {
  let n = arr.length / 2;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
    result.push(arr[i + n]);
  }
  return result;
}

// console.log(shuffle([2, 5, 1, 3, 4, 7]));

function shuffle(arr, n) {
  return arr.reduce((prev, current, index, array) => {
    if (index < n) {
      prev.push(array[index]); // Add x1, x2, ..., xn
      prev.push(array[index + n]); // Add y1, y2, ..., yn
    }
    return prev;
  }, []);
}
// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

// 5 => Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.
// // Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.
// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

function findWordsContaining(arr, x) {
  let indeces = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(x)) {
      indeces.push(i);
    }
  }
  return indeces;
}

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));