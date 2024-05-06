document.body.style.backgroundColor = "#212121";

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

// function leftRightDiffrence(nums) {
//   let leftsum = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += nums[j];
//       console.log(nums[j]);
//     }
//   }
//   // finding right sum
//   let rightsum = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       sum += nums[j];
//     }
//     rightsum.push(sum);
//   }
//   // finding the modulas of sum by Math.abs operator
//   let result = [];
//   for (let i = 0; i < leftsum.length; i++) {
//     result.push(Math.abs(leftsum[i] - rightsum[i]));
//   }
//   return result;
// }

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

// 15 => minimum number Game

// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
// Now, first Bob will append the removed element in the array arr, and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.

function numberGame(nums) {
  const sortArr = nums.slice().sort((a, b) => a - b);

  let arr = [];
  let counter = 0;
  let counter2 = 0;

  for (let i = 0; i < nums.length; i++) {
    counter++;
    let alice = sortArr.splice(0, counter);
    counter2++;
    let bob = sortArr.splice(0, counter2);

    arr.push(bob, alice);
    counter2 = 0;
    counter = 0;
  }
  return arr.flat();
}

// console.log(numberGame([5, 4, 2, 3]));
// console.log(numberGame([2, 7, 9, 6, 4, 6]));
// console.log(numberGame([18, 26, 37, 46, 13, 33, 39, 1, 37, 16]));

// 16 => Decompress Run-Length Encoded List

// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

function decompressRlElist(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const value = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      result.push(value);
    }
  }
  // return result;
}

// console.log(decompressRlElist([1, 2, 3, 4])); // Output: [2, 4, 4, 4]
// console.log(decompressRlElist([1, 1, 2, 3])); // Output: [1, 3]
// console.log(decompressRlElist([55, 11, 70, 26, 62, 64])); // Output: [11, 26, 26, ..., 64]

// 17 => Difference Between Element Sum and Digit Sum of an Array

// You are given a positive integer array nums.
// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

const diffrenceOfSum = (nums) => {
  let sum = 0;
  let digit = "";
  nums.forEach((element) => {
    sum += element;
    digit += element.toString().split("").join("");
  });

  const digitSumAdd = digit.split("").reduce((digitSum, current) => {
    current = +current;
    digitSum += current;
    return digitSum;
  }, 0);

  return sum - digitSumAdd;
};

// console.log(diffrenceOfSum([1, 15, 6, 3]));
// console.log(diffrenceOfSum([1, 2, 3, 4]));

// 18 => Number of Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

const arithmeticTriplets = (nums, diff) => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
// console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));

// 20 => Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

const countKDiffrence = (nums, k) => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] - nums[i] === k) {
        counter++;
      }
    }
  }
  return counter;
};

// console.log(countKDiffrence([1, 2, 2, 1], 1));
// console.log(countKDiffrence([1, 3], 3));
// console.log(countKDiffrence([3, 2, 1, 5, 4], 2));

// 21 =>  Minimum Operations to Exceed Threshold Value I

// You are given a 0-indexed integer array nums, and an integer k.
// In one operation, you can remove one occurrence of the smallest element of nums
// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

// Example 1:

// Input: nums = [2,11,10,1,3], k = 10
// Output: 3
// Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
// After two operations, nums becomes equal to [11, 10, 3].
// After three operations, nums becomes equal to [11, 10].
// At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
// It can be shown that 3 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

const minOperations = (nums, k) => {
  let storeValue = [];
  let arr;
  while (true) {
    let min = Math.min(...nums);
    if (min >= k) {
      break;
    }
    arr = nums.slice(); // Create a copy of nums
    arr.splice(arr.indexOf(min), 1);
    storeValue.push(min);
    nums = arr;
  }
  return storeValue.length;
};

// console.log(minOperations([2, 11, 10, 1, 3], 10)); // Output: 3
// console.log(minOperations([1, 1, 2, 4, 9], 9)); // Output: 3
// console.log(minOperations([1, 1, 2, 4, 9], 1));

// 25 => Maximum Product Difference Between Two Pairs

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

// Example 1:
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

function maxProductDiffrence(nums) {
  const ascendingOrder = nums.sort((a, b) => a - b).slice(0, 2);
  const descendingOrder = nums.sort((a, b) => b - a).slice(0, 2);

  for (let i = 0; i < ascendingOrder.length; i++) {
    return (
      descendingOrder[i] * descendingOrder[i + 1] -
      ascendingOrder[i] * ascendingOrder[i + 1]
    );
  }
}

// console.log(maxProductDiffrence([5, 6, 2, 7, 4]));
// console.log(maxProductDiffrence([4,2,5,9,7,4,8]));

// 26 => There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:

// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
function largestAltitude(gain) {
  let sum = 0;
  let maxAltitude = 0;

  gain.forEach((nums) => {
    sum += nums;
    maxAltitude = Math.max(maxAltitude, sum);
  });

  return maxAltitude;
}

// console.log(largestAltitude([-5, 1, 5, 0, -7]));
// console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

// 27 => maximum product of two element in array

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

function maxProduct(nums) {
  nums = nums.sort((a, b) => a - b).slice(-2);

  for (let i = 0; i < nums.length - 1; i++) {
    nums = (nums[i] - 1) * (nums[i + 1] - 1);
  }
  return nums;
}

// console.log(maxProduct([3, 4, 5, 2]));
// console.log(maxProduct([1, 5, 4, 5]))

// 28 => Find Common Elements Between Two Arrays

// You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.
// Consider calculating the following values:
// The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
// The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
// Return an integer array answer of size 2 containing the two values in the above order.

// Example 1:
// Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
// Output: [3,4]
// Explanation: We calculate the values as follows:
// - The elements at indices 1, 2, and 3 in nums1 occur at least once in nums2. So the first value is 3.
// - The elements at indices 0, 1, 3, and 4 in nums2 occur at least once in nums1. So the second value is 4.
var findInterSectionValues = function (a, b) {
  const seta = new Set(a);
  const setb = new Set(b);
  let countAinB = 0;
  for (const e of a) {
    if (setb.has(e)) countAinB++;
  }
  let countBinA = 0;
  for (const e of b) {
    if (seta.has(e)) countBinA++;
  }
  return [countAinB, countBinA];
};

// console.log(findInterSectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));
// console.log(findInterSectionValues([3, 4, 2, 3], [1, 5]));
// console.log(
//   findInterSectionValues(
//     [10, 30, 16, 18],
//     [23, 30, 30, 6, 10, 26, 9, 27, 6, 16, 18, 10, 27, 2, 20, 7, 16]
//   )
// );
// console.log(
//   findInterSectionValues(
//     [24, 28, 7, 27, 7, 27, 9, 24, 9, 10],
//     [12, 29, 9, 7, 5]
//   )
// );

// 29 => Minimum Number of Moves to Seat Everyone

// There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.
// You may perform the following move any number of times:
// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
// Note that there may be multiple seats or students in the same position at the beginning.

// Example 1:

// Input: seats = [3,1,5], students = [2,7,4]
// Output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

// function minMovesToSeat(seats, students) {
//   seats = seats.sort((a, b) => a - b);
//   students = students.sort((a, b) => a - b);

//   let result = 0;
//   for (let i = 0; i < seats.length; i++) {
//     result += Math.abs(seats[i] - students[i]);
//   }
//   return result;
// }

// console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
// console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]));
// console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
// console.log(minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 30 => You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A", "Z"]];
// Output: "Z";

function destCity(paths) {
  const outgoingCities = new Set();
  const destinations = new Set();
  for (const [start, end] of paths) {
    outgoingCities.add(start);
    destinations.add(end);
  }
  for (const city of destinations) {
    if (!outgoingCities.has(city)) {
      return city;
    }
  }
}

// console.log(
//   destCity([
//     ["London", "New York"],
//     ["New York", "Lima"],
//     ["Lima", "Sao Paulo"],
//   ])
// );

// console.log(
//   destCity([
//     ["B", "C"],
//     ["D", "B"],
//     ["C", "A"],
//   ])
// );

// console.log(destCity([["A", "Z"]]));
// console.log(
//   destCity([
//     ["pYyNGfBYbm", "wxAscRuzOl"],
//     ["kzwEQHfwce", "pYyNGfBYbm"],
//   ])
// );

// 31 => sum of sqaure of special Element

// You are given a 1-indexed integer array nums of length n.
// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.
// Return the sum of the squares of all special elements of nums.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: 21
// // Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4.
// // Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.
// Example 2:
// Input: nums = [2,7,1,19,18,3]
// Output: 63
// Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6.
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63.

// function sumOfSquare(nums) {
//   let n = nums.length;
//   let sum = 0;
//   for (let i = 1; i <= nums.length; i++) {
//     if (n % i === 0) sum += nums[i - 1] * nums[i - 1];
//   }
//   return sum;
// }

// console.log(sumOfSquare([1, 2, 3, 4]));
// console.log(sumOfSquare([2, 7, 1, 19, 18, 3]));

// 32 => Count Tested Devices After Test Operations

// You are given a 0-indexed integer array batteryPercentages having length n, denoting the battery percentages of n 0-indexed devices.
// Your task is to test each device i in order from 0 to n - 1, by performing the following test operations:
// If batteryPercentages[i] is greater than 0:
// Increment the count of tested devices.
// Decrease the battery percentage of all devices with indices j in the range [i + 1, n - 1] by 1, ensuring their battery percentage never goes below 0, i.e, batteryPercentages[j] = max(0, batteryPercentages[j] - 1).
// Move to the next device.
// Otherwise, move to the next device without performing any test.
// Return an integer denoting the number of devices that will be tested after performing the test operations in order.

// Example 1:

// Input: batteryPercentages = [1,1,2,1,3]
// Output: 3
// Explanation: Performing the test operations in order starting from device 0:
// At device 0, batteryPercentages[0] > 0, so there is now 1 tested device, and batteryPercentages becomes [1,0,1,0,2].
// At device 1, batteryPercentages[1] == 0, so we move to the next device without testing.
// At device 2, batteryPercentages[2] > 0, so there are now 2 tested devices, and batteryPercentages becomes [1,0,1,0,1].
// At device 3, batteryPercentages[3] == 0, so we move to the next device without testing.
// At device 4, batteryPercentages[4] > 0, so there are now 3 tested devices, and batteryPercentages stays the same.
// So, the answer is 3.

function countTestedDevices(batteryPercentages) {
  let counter = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      counter++;
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
    }
  }
  return counter;
}

// Test cases
// console.log(countTestedDevices([1, 1, 2, 1, 3]));
// console.log(countTestedDevices([0, 1, 2]));

// 33 => count Good Triplets

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x
// Return the number of good triplets

// Example 1:

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// Example 2:

// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.
const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};

// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)); // Output: 4
// console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)); // Output: 0

// 34 => Count Equal and Divisible Pairs in an Array

// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

// Example 1:

// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

function countPair(nums, k) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(countPair([3, 1, 2, 2, 2, 1, 3], 2));

// 35 => delete Greatest Value in each row
// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.

function deleteGreatestValue(grid) {
  grid.forEach((row) => row.sort((a, b) => a - b));
  let sum = 0;

  while (grid[0].length) {
    let column = [];
    for (let row of grid) column.push(row.pop());
    sum += Math.max(...column);
  }

  return sum;
}

// console.log(
//   deleteGreatestValue([
//     [1, 2, 4],
//     [3, 3, 1],
//   ])
// );

// console.log(deleteGreatestValue([[10]]));

// 36 => minimum operation to make array

// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

// Example 1:

// Input: nums = [1,1,1]
// Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].

function solveQuestion(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        counter += arr[i] - arr[j] + 1;

        arr[j] = arr[i] + 1;
      }
    }
  }
  return counter;
}

// console.log(solveQuestion([1, 1, 1]));
// console.log(solveQuestion([1, 5, 2, 4, 1]));

// 37 => Count Elements With Maximum Frequency

// You are given an array nums consisting of positive integers.
// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
// The frequency of an element is the number of occurrences of that element in the array.

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// // So the number of elements in the array with maximum frequency is 5.

function maxFerquenceElements(nums) {
  let obj = {};

  nums.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });
  const getValue = Object.values(obj);
  const getMaxValue = Math.max(...getValue);
  return getValue.reduce((sum, current) => {
    if (getMaxValue === current) {
      sum += current;
    }
    return sum;
  }, 0);
}

// console.log(maxFerquenceElements([1, 2, 2, 3, 1, 4]));
// console.log(maxFerquenceElements([1, 2, 3, 4, 5]));

// 38 => Final Prices With a Special Discount in a Shop

// You are given an integer array prices where prices[i] is the price of the ith item in a shop.

// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

// Example 1:

// Input: prices = [8,4,6,2,3]
// Output: [4, 2, 4, 2, 3];
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.
// Example 3:

// Input: prices = [10, 1, 1, 6];
// Output: [9, 0, 1, 6];

function finalPrices(prices) {
  let storePrices = [];
  for (let i = 0; i < prices.length; i++) {
    let discountApplied = false;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        storePrices.push(prices[i] - prices[j]);
        discountApplied = true;
        break;
      }
    }
    if (!discountApplied) {
      storePrices.push(prices[i]);
    }
  }
  return storePrices;
}

// console.log(finalPrices([8, 4, 6, 2, 3]));
// console.log(finalPrices([1, 2, 3, 4, 5]));
// console.log(finalPrices([10, 1, 1, 6]));

// 39 => find greatest common divisor of array

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// // The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

function findGCD(nums) {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  const maxValue = Math.max(...nums);
  const minValue = Math.min(...nums);

  return gcd(maxValue, minValue);
}

// console.log(findGCD([2, 5, 6, 9, 10]));
// console.log(findGCD([7, 5, 6, 8, 3]));
// console.log(findGCD([3, 3]));

// 40 => sum of unique element

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

function sumOfUnique(nums) {
  let obj = {};

  nums.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });

  let sum = 0;
  for (const values in obj)
    if (Number(obj[values]) === 1) sum += Number(values);

  return sum;
}

// console.log(sumOfUnique([1, 2, 3, 2]));
// console.log(sumOfUnique([1, 1, 1, 1, 1]));
// console.log(sumOfUnique([1, 2, 3, 4, 5]));

// 41 => Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

function countNegatives(arr) {
  return arr.flat().filter((nums) => nums < 0).length;
}

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

// console.log(
//   countNegatives([
//     [3, 2],
//     [1, 0],
//   ])
// );

// 42 => Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

function findNumbers(nums) {
  let counter = 0;

  for (const num of nums) {
    counter += num.toString().length % 2 === 0 ? 1 : 0;
  }
  // return counter;
}

// console.log(findNumbers([12, 345, 2, 6, 7896]));
// console.log(findNumbers([555, 901, 482, 1771]));

// Other Approch

function findNumbers(nums) {
  return nums.filter((num) => num.toString().length % 2 === 0).length;
}

// console.log(findNumbers([12, 345, 2, 6, 7896]));
// console.log(findNumbers([555, 901, 482, 1771]));

// 43 => Find the Distinct Difference Array

// Input: nums = [1, 2, 3, 4, 5];
// Output: [-3,-1,1,3,5]
// Explanation: For index i = 0, there is 1 element in the prefix and 4 distinct elements in the suffix. Thus, diff[0] = 1 - 4 = -3.
// For index i = 1, there are 2 distinct elements in the prefix and 3 distinct elements in the suffix. Thus, diff[1] = 2 - 3 = -1.
// For index i = 2, there are 3 distinct elements in the prefix and 2 distinct elements in the suffix. Thus, diff[2] = 3 - 2 = 1.
// For index i = 3, there are 4 distinct elements in the prefix and 1 distinct element in the suffix. Thus, diff[3] = 4 - 1 = 3.
// For index i = 4, there are 5 distinct elements in the prefix and no elements in the suffix. Thus, diff[4] = 5 - 0 = 5.
// Example 2:

// Input: nums = [3,2,3,4,2]
// Output: [-2,-1,0,2,3]
// Explanation: For index i = 0, there is 1 element in the prefix and 3 distinct elements in the suffix. Thus, diff[0] = 1 - 3 = -2.
// For index i = 1, there are 2 distinct elements in the prefix and 3 distinct elements in the suffix. Thus, diff[1] = 2 - 3 = -1.
// For index i = 2, there are 2 distinct elements in the prefix and 2 distinct elements in the suffix. Thus, diff[2] = 2 - 2 = 0.
// For index i = 3, there are 3 distinct elements in the prefix and 1 distinct element in the suffix. Thus, diff[3] = 3 - 1 = 2.
// For index i = 4, there are 3 distinct elements in the prefix and no elements in the suffix. Thus, diff[4] = 3 - 0 = 3.

function distinctDiffrenceArray(nums) {
  const distinctDiffrence = [];
  for (let i = 0; i < nums.length; i++) {
    distinctDiffrence.push(
      nums.slice(0, i + 1).length - nums.slice(i + 1, nums.length).length
    );
  }
  return distinctDiffrence;
}

// console.log(distinctDiffrenceArray([1, 2, 3, 4, 5]));
// console.log(distinctDiffrenceArray([3, 2, 3, 4, 2]));

// 44 => Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// // Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

function uniqueOccurence(arr) {
  let obj = {};

  arr.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });

  const occurence = new Set();

  for (const keys in obj) {
    if (occurence.has(obj[keys])) {
      return false;
    } else {
      occurence.add(obj[keys]);
    }
  }
  return true;
}

// console.log(uniqueOccurence([1, 2, 2, 1, 1, 3]));
// console.log(uniqueOccurence([1, 2]));
// console.log(uniqueOccurence([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
// console.log(uniqueOccurence([0, 0, -2, -1, 4, 8, -3, 9, 6]));

// 45 => Height Checker

// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

function heightChecker(heights) {
  let counter = 0;
  const expected = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != expected[i]) counter++;
  }
  // return counter;
}

// console.log(heightChecker([1, 1, 4, 2, 1, 3]));
// console.log(heightChecker([5, 1, 2, 3, 4]));
// console.log(heightChecker([1, 2, 3, 4, 5]));

// Other Approch

function heightChecker(heights) {
  const expected = [...heights].sort((a, b) => a - b);

  return heights.filter((value, index) => value !== expected[index]).length;
}

// console.log(heightChecker([1, 1, 4, 2, 1, 3]));
// console.log(heightChecker([5, 1, 2, 3, 4]));
// console.log(heightChecker([1, 2, 3, 4, 5]));

// 46 => Separate the Digits in an Array

// Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.
// To separate the digits of an integer is to get all the digits it has in the same order.
// For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].

// Example 1:

// Input: nums = [13,25,83,77]
// Output: [1,3,2,5,8,3,7,7]
// Explanation:
// - The separation of 13 is [1,3].
// - The separation of 25 is [2,5].
// - The separation of 83 is [8,3].
// - The separation of 77 is [7,7].
// answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.
// Example 2:
//
// Input: nums = [7,1,3,9]
// Output: [7,1,3,9]
// Explanation: The separation of each integer in nums is itself.
// answer = [7,1,3,9].

function separateDigits(nums) {
  let storeNumber = [];
  nums = nums.join("");
  for (const num of nums) storeNumber.push(Number(num));
  return storeNumber;
}

// console.log(separateDigits([13, 25, 83, 77]));
// console.log(separateDigits([7, 1, 3, 9]));z

