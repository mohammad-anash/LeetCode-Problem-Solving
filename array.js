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

// console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));

// 6 => Number of Employees Who Met the Target

// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.

// Example 1:

// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.

function numberOffEmployeeWhoMetTheTarget(arr) {
  let metTheTarget = [];

  for (const char of arr) {
    if (char >= 2) {
      metTheTarget.push(char);
    }
  }
  // return metTheTarget.length;
}

// console.log(numberOffEmployeeWhoMetTheTarget([0, 1, 2, 3, 4]));

function numberOffEmployeeWhoMetTheTarget(arr, target) {
  return arr.filter((char) => char >= target).length;
}

// console.log(numberOffEmployeeWhoMetTheTarget([0, 1, 2, 3, 4], 2));
// console.log(numberOffEmployeeWhoMetTheTarget([5, 1, 4, 2, 2], 6));

// 7 => Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

function maximumWealth(accounts) {
  let moneyStore = [];
  let sum = 0;
  for (const customer of accounts) {
    sum = 0;
    for (const char of customer) {
      sum += char;
    }
    moneyStore.push(sum);
  }
  return Math.max(...moneyStore);
}

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );

// 8 => Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

function kidsWithCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  return candies.map((candyCount) => candyCount + extraCandies >= maxCandies);
}

// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));

// 9 => Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

function runningSum(nums) {
  let runningSumStore = [];

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    runningSumStore.push(sum);
  }
  // return runningSumStore
}

// console.log(runningSum([1, 2, 3, 4]));

// solve with reduce

function runningSum(nums) {
  let sum = 0;
  return nums.reduce((prev, current) => {
    sum += current;
    prev.push(sum);
    // return prev;
  }, []);
}

// console.log(runningSum([1, 2, 3, 4]));

// 10 => How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4, 0, 1, 1, 3];
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

function smallerNumberThenCurrent(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && j !== i) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}

// console.log(smallerNumberThenCurrent([8, 1, 2, 2, 3]));

// 11 => Maximum Number of Words Found in Sentences

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

function mostWordFound(sentence) {
  let storeLength = [];

  for (let i = 0; i < sentence.length; i++) {
    storeLength.push(sentence[i].toString().split(" ").length);
  }
  const maximumLength = Math.max(...storeLength);
  // return maximumLength
}

// console.log(
//   mostWordFound([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );

// other approch

function mostWordFound(sentence) {
  return sentence.reduce((maxLength, currentElement) => {
    const breakWords = currentElement.toString().split(" ").length;
    if (breakWords > maxLength) {
      maxLength = breakWords;
    }
    // return maxLength
  }, 0);
}

// console.log(
//   mostWordFound([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );

// 12 =>

// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.

// example 1:

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
// Example 2:

// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]

// function decode(encoded, first) {
// let arr = [first];
// for (let i = 0; i < encoded.length; i++) {
//   let nextElement = arr[i] ^ encoded[i];
//   // console.log(arr[i], encoded[i])
//   arr.push(nextElement);
// }
// return arr;
// }

// console.log(decode([1, 2, 3], 1));

// 13 => Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

function leftRightDiffrence(nums) {
  let leftsum = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += nums[j];
      console.log(nums[j]);
    }
  }
  // finding right sum
  let rightsum = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
    }
    rightsum.push(sum);
  }
  // finding the modulas of sum by Math.abs operator
  let result = [];
  for (let i = 0; i < leftsum.length; i++) {
    result.push(Math.abs(leftsum[i] - rightsum[i]));
  }
  return result;
}

// console.log(leftRightDiffrence([10, 4, 8, 3]));

// 14 => Count Pairs Whose Sum is Less than Target

// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

function countPairs(nums, target) {
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(countPairs([-1, 1, 2, 3, 1], 2)); // Output: 4
// console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // Output: 9