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

//  console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
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
//  console.log(findNumbers([555, 901, 482, 1771]));

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

//  console.log(uniqueOccurence([1, 2, 2, 1, 1, 3]));
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
// console.log(separateDigits([7, 1, 3, 9]));

// 47 => N-Repeated Element in Size 2N Array

// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5

function repeatedNTimes(nums) {
  let obj = {};

  nums.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });

  for (const value in obj) {
    if (obj[value] > 1) return Number(value);
  }
}

// console.log(repeatedNTimes([1, 2, 3, 3]));
// console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// Other Approch

function repeatedNTimes(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) return num;
    set.add(num);
  }
}

// console.log(repeatedNTimes([1, 2, 3, 3]));
// console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// 48 => Create Target Array in the Given Order

// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// Example 2:

// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

function createTargetArray(nums, index) {
  let result = [];
  for (let i = 0; i < index.length; i++) result.splice(index[i], 0, nums[i]);
  return result;
}

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

// 49 => Array partition

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Example 1:

// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.
// Example 2:

// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

function arrayPairSum(nums) {
  nums = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += Math.min(nums[i], nums[i + 1]);
  }
  return sum;
}

// console.log(arrayPairSum([1, 4, 3, 2]));
// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));

// 50 => find the diffrence of two array

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:
//
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

function findDiffrence(num1, num2) {
  const firstArray = [];
  const secondArray = [];

  num1 = Array.from(new Set(num1));
  num2 = Array.from(new Set(num2));

  for (let i = 0; i < num1.length; i++)
    if (!num2.includes(num1[i])) firstArray.push(num1[i]);

  for (let i = 0; i < num2.length; i++)
    if (!num1.includes(num2[i])) secondArray.push(num2[i]);

  return [firstArray, secondArray];
}

// console.log(findDiffrence([1, 2, 3], [2, 4, 6]));
// console.log(findDiffrence([1, 2, 3, 3], [1, 1, 2, 2]));

// 51 => Find the Integer Added to Array I

// You are given two arrays of equal length, nums1 and nums2.
// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.
// As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

// Return the integer x.
// Example 1:
// Input: nums1 = [2,6,4], nums2 = [9,7,5]
// Output: 3
// Explanation:

// The integer added to each element of nums1 is 3.
// Example 2:
// Input: nums1 = [10], nums2 = [5]
// Output: -5
// Explanation:
// The integer added to each element of nums1 is -5.
// Example 3:
// Iput: nums1 = [1,1,1,1], nums2 = [1,1,1,1]
// Output: 0
// Explanation:
// The integer added to each element of nums1 is 0.

function addedInteger(nums1, nums2) {
  let diff = [];
  for (let i = 0; i < nums2.length; i++) diff.push(nums2[i] - nums1[i]);
  return diff.reduce((average, current) => average + current, 0) / diff.length;
}

// console.log(addedInteger([2, 6, 4], [9, 7, 5]));
// console.log(addedInteger([10], [5]));
// console.log(addedInteger([1, 1, 1, 1], [1, 1, 1, 1]));

// 52 => Maximum Sum With Exactly K Elements

// You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:

// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

// Example 1:

// Input: nums = [1,2,3,4,5], k = 3
// Output: 18
// Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
// For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
// For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
// For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
// So, we will return 18.
// It can be proven, that 18 is the maximum answer that we can achieve.
// Example 2:

// Input: nums = [5,5,5], k = 2
// Output: 11
// Explanation: We need to choose exactly 2 elements from nums to maximize the sum.
// For the first iteration, we choose 5. Then sum is 5 and nums = [5,5,6]
// For the second iteration, we choose 6. Then sum is 5 + 6 = 11 and nums = [5,5,7]
// So, we will return 11.
// It can be proven, that 11 is the maximum answer that we can achieve.

function maximizeSum(nums, k) {
  let maxValue = Math.max(...nums);
  let sum = 0;
  for (let i = 0; i < k; i++) sum += maxValue + i;
  return sum;
}

// console.log(maximizeSum([1, 2, 3, 4, 5], 3));
// console.log(maximizeSum([5, 5, 5], 2));

// 53 => Neither Minimum nor Maximum

// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
// Return the selected integer.
// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
// Example 3:

// Input: nums = [2,1,3]
// Output: 2
// // Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.

function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return -1;
  }
  return nums[1];
}

// console.log(findNonMinOrMax([3, 2, 1, 4]));
// console.log(findNonMinOrMax([1, 2]));
// console.log(findNonMinOrMax([2, 1, 3]));

// 54 => BaseBall Game

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:
//
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:
//
// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.

function calPoints(operations) {
  let score = [];
  for (let i = 0; i < operations.length; i++) {
    if (!Number.isNaN(Number(operations[i]))) {
      score.push(Number(operations[i]));
    } else if (operations[i] === "C") {
      score.pop();
    } else if (operations[i] === "D") {
      const doubleValue = score[score.length - 1] * 2;
      score.push(doubleValue);
    } else if (operations[i] === "+") {
      const lastTwoScoresSum =
        score[score.length - 1] + score[score.length - 2];
      score.push(lastTwoScoresSum);
    }
  }
  return score.reduce((acc, val) => acc + val, 0);
}

// console.log(calPoints(["5", "2", "C", "D", "+"]));
// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
// console.log(calPoints(["1", "C"]));

// 55 => sort array by parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

function sortArrayByParity(nums) {
  const evenNumber = nums.filter((num) => num % 2 === 0);
  const oddNumber = nums.filter((num) => num % 2 !== 0);

  // return [...evenNumber, ...oddNumber];
}

// console.log(sortArrayByParity([3, 1, 2, 4]));
// console.log(sortArrayByParity([0]));

// Other Approch

function sortArrayByParity(nums) {
  let evenStore = [];
  let oddStore = [];

  nums.forEach((nums) => {
    if (nums % 2 === 0) evenStore.push(nums);
    else oddStore.push(nums);
  });

  return [...evenStore, ...oddStore];
}

// console.log(sortArrayByParity([3, 1, 2, 4]));
// console.log(sortArrayByParity([0]));

// 56 => Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1;
// Output: [0];

function sumZero(k) {
  let storeValue = [];
  for (let i = 1; i <= k / 2; i++) {
    storeValue.push(i);
    storeValue.push(-i);
  }
  if (k % 2 !== 0) {
    storeValue.push(0);
  }
  return storeValue;
}

// console.log(sumZero(5));
// console.log(sumZero(3));

// 57 => Find Target Indices After Sorting Array

// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:

// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// // The index where nums[i] == 5 is 4.

function targetIndeces(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const result = [];
  nums.forEach((value, index) => {
    if (value === target) result.push(index);
  });
  return result;
}

// console.log(targetIndeces([1, 2, 5, 2, 3], 2));
// console.log(targetIndeces([1, 2, 5, 2, 3], 3));
// console.log(targetIndeces([1, 2, 5, 2, 3], 5));

// 58 => Maximum xor pair

// You are given a 0-indexed integer array nums. A pair of integers x and y is called a strong pair if it satisfies the condition:
// |x - y| <= min(x, y)
// You need to select two integers from nums such that they form a strong pair and their bitwise XOR is the maximum among all strong pairs in the array.
// Return the maximum XOR value out of all possible strong pairs in the array nums.
// Note that you can pick the same integer twice to form a pair.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: 7
// Explanation: There are 11 strong pairs in the array nums: (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5) and (5, 5).
// The maximum XOR possible from these pairs is 3 XOR 4 = 7.
// Example 2:

// Input: nums = [10,100]
// Output: 0
// Explanation: There are 2 strong pairs in the array nums: (10, 10) and (100, 100).
// The maximum XOR possible from these pairs is 10 XOR 10 = 0 since the pair (100, 100) also gives 100 XOR 100 = 0.
// Example 3:
//
// Input: nums = [5,6,25,30]
// Output: 7
// Explanation: There are 6 strong pairs in the array nums: (5, 5), (5, 6), (6, 6), (25, 25), (25, 30) and (30, 30).
// The maximum XOR possible from these pairs is 25 XOR 30 = 7 since the only other non-zero XOR value is 5 XOR 6 = 3.
function maximumXOR(nums) {
  let max_xor = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        max_xor = Math.max(max_xor, nums[i] ^ nums[j]);
      }
    }
  }

  return max_xor;
}

// // Test cases
// console.log(maximumXOR([1, 2, 3, 4, 5])); // Output: 7
// console.log(maximumXOR([10, 100])); // Output: 0
// console.log(maximumXOR([5, 6, 25, 30])); // Output: 7

// 59 => Number of Students Doing Homework at a Given Time

// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Example 1:

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
// Example 2:

// Input: startTime = [4], endTime = [4], queryTime = 4
// Output: 1
// Explanation: The only student was doing their homework at the queryTime.

function busyStudent(startTime, endTime, queryTime) {
  let counter = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) counter++;
  }
  return counter;
}

// console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
// console.log(busyStudent([4], [4], 4));

// 60 => ROW With Maximum Ones

// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
// Return an array containing the index of the row, and the number of ones in it.

// Example 1:

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1].
// Example 2:

// Input: mat = [[0,0,0],[0,1,1]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
// Example 3:

// Input: mat = [[0,0],[1,1],[0,0]]
// Output: [1,2]
// // Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].

function rowAndMaximumOnes(nums) {
  let max_Count = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    nums[i].forEach((value) => {
      if (value === 1) {
        count++;
      }
    });
    if (count > max_Count) {
      max_Count = count;
      index = i;
    }
  }
  return [index, max_Count];
}

// console.log(
//   rowAndMaximumOnes([
//     [0, 1],
//     [1, 0],
//   ])
// );
// console.log(
//   rowAndMaximumOnes([
//     [0, 0, 0],
//     [0, 1, 1],
//   ])
// );
// console.log(
//   rowAndMaximumOnes([
//     [0, 0],
//     [1, 1],
//     [0, 0],
//   ])
// );

// 61 => Largest Positive Integer That Exists With Its Negative

// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Example 1:

// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.
// Example 2:

// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
// Example 3:
//
// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.

function findMaxK(arr) {
  let value = [];
  for (const nums of arr) {
    if (nums < 0) value.push(Math.abs(nums));
  }
  const result = value.filter((num) => arr.includes(num));
  // return result == 0 ? -1 : Math.max(...result);
}

// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
// console.log(findMaxK([-1, 2, -3, 3]));
// console.log(findMaxK([-10, 8, 6, 7, -2, -3]));

// Other Approch

function findMaxK(nums) {
  const equalValue = nums.map((value) => Math.abs(value));
  let set = {};
  for (const num of equalValue) {
    if (set[num]) {
      set[num]++;
    } else {
      set[num] = 1;
    }
  }
  const result = [];

  for (const values in set) {
    if (set[values] >= 2) {
      result.push(+values);
    }
  }
  return result == 0 ? -1 : Math.max(...result);
}

// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
// console.log(findMaxK([-1, 2, -3, 3]));
// console.log(findMaxK([-10, 8, 6, 7, -2, -3]));

// 62 => find the peaks

// You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.
// Return an array that consists of indices of peaks in the given array in any order.
// Notes:
// A peak is defined as an element that is strictly greater than its neighboring elements.
// The first and last elements of the array are not a peak.

// Example 1:

// Input: mountain = [2,4,4]
// Output: []
// Explanation: mountain[0] and mountain[2] can not be a peak because they are first and last elements of the array.
// mountain[1] also can not be a peak because it is not strictly greater than mountain[2].
// So the answer is [].
// Example 2:

// Input: mountain = [1,4,3,8,5]
// Output: [1,3]
// Explanation: mountain[0] and mountain[4] can not be a peak because they are first and last elements of the array.
// mountain[2] also can not be a peak because it is not strictly greater than mountain[3] and mountain[1].
// But mountain [1] and mountain[3] are strictly greater than their neighboring elements.
// So the answer is [1,3].

function findPeaks(nums) {
  if (nums.length < 3) {
    return [];
  }

  let result = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      result.push(i);
    }
  }
  return result;
}

// console.log(findPeaks([2, 4, 4]));
// console.log(findPeaks([1, 4, 3, 8, 5]));

// 63 => Two Out Of Three

// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

// Example 1:

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]
// Explanation: The values that are present in at least two arrays are:
// - 3, in all three arrays.
// - 2, in nums1 and nums2.
// Example 2:

// Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
// Output: [2,3,1]
// Explanation: The values that are present in at least two arrays are:
// - 2, in nums2 and nums3.
// - 3, in nums1 and nums2.
// - 1, in nums1 and nums3.
// Example 3:

// Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
// Output: []
// Explanation: No value is present in at least two arrays.

function twoOutOfThree(nums1, nums2, nums3) {
  const nums1RemDupl = Array.from(new Set(nums1));
  const nums2RemDupl = Array.from(new Set(nums2));
  const nums3RemDupl = Array.from(new Set(nums3));

  const allInOne = [...nums1RemDupl, ...nums2RemDupl, ...nums3RemDupl];
  let obj = {};
  const result = [];

  allInOne.forEach((value) => {
    if (obj[value]) obj[value]++;
    else obj[value] = 1;
  });

  for (const values in obj) {
    if (obj[values] >= 2) {
      result.push(+values);
    }
  }
  return result;
}
// console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
// console.log(twoOutOfThree([1, 3], [2, 3], [1, 2]));
// console.log(twoOutOfThree([1, 2, 2], [4, 4, 3], [5]));

// 64 => find Missing And Repeated Value

function findMissingAndRepeatedValue(nums) {
  let inOneArr = nums.flat();
  inOneArr = inOneArr.sort((a, b) => a - b);

  let repeatedValue;
  let missingValue;

  for (let i = 0; i < inOneArr.length - 1; i++) {
    if (inOneArr[i + 1] - inOneArr[i] === 0) {
      repeatedValue = inOneArr[i];
    }
  }

  for (let i = 1; i <= inOneArr.length; i++) {
    if (!inOneArr.includes(i)) {
      missingValue = i;
      break;
    }
  }

  return [repeatedValue, missingValue];
}

// console.log(
//   findMissingAndRepeatedValue([
//     [1, 3],
//     [2, 2],
//   ])
// );

// console.log(
//   findMissingAndRepeatedValue([
//     [9, 1, 7],
//     [8, 9, 2],
//     [3, 4, 6],
//   ])
// );

// 65 => Ant on the Boundary

// An ant is on a boundary. It sometimes goes left and sometimes right.

// You are given an array of non-zero integers nums. The ant starts reading nums from the first element of it to its end. At each step, it moves according to the value of the current element:

// If nums[i] < 0, it moves left by -nums[i] units.
// If nums[i] > 0, it moves right by nums[i] units.
// Return the number of times the ant returns to the boundary.
// Notes:
// There is an infinite space on both sides of the boundary.
// // We check whether the ant is on the boundary only after it has moved |nums[i]| units. In other words, if the ant crosses the boundary during its movement, it does not count.

// Example 1:

// Input: nums = [2,3,-5]
// Output: 1
// Explanation: After the first step, the ant is 2 steps to the right of the boundary.
// After the second step, the ant is 5 steps to the right of the boundary.
// After the third step, the ant is on the boundary.
// So the answer is 1.
// Example 2:

// Input: nums = [3,2,-3,-4]
// Output: 0
// Explanation: After the first step, the ant is 3 steps to the right of the boundary.
// After the second step, the ant is 5 steps to the right of the boundary.
// After the third step, the ant is 2 steps to the right of the boundary.
// After the fourth step, the ant is 2 steps to the left of the boundary.
// The ant never returned to the boundary, so the answer is 0.

function returnToBoundaryCount(nums) {
  let sum = 0;
  let counter = 0;
  for (const num of nums) {
    if (num > 0) sum += num;
    else sum -= Math.abs(num);
    if (sum === 0) counter++;
  }
  // return counter;
}

// console.log(returnToBoundaryCount([2, 3, -5]));
// console.log(returnToBoundaryCount([3, 2, -3, -4]));

// Other Approch

function returnToBoundaryCount(nums) {
  return (
    nums.reduce(
      (sum, current) =>
        current < 0 ? (sum -= Math.abs(current)) : (sum += current),
      0
    ) === 0
  );
}

// console.log(returnToBoundaryCount([2, 3, -5]));
// console.log(returnToBoundaryCount([3, 2, -3, -4]));

// 66 =>  Sum of All Odd Length Subarrays

// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
// A subarray is a contiguous subsequence of the array.
// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:
//
// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:
//
// Input: arr = [10,11,12]
// Output: 66

var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      for (let k = i; k <= j; k++) {
        result += arr[k];
      }
    }
  }

  return result;
};

// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

// 67 => Number Of Rectangles That Can Form The Largest Square
// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.
// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.
// Return the number of rectangles that can make a square with a side length of maxLen.
//
// Example 1:
// Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.
// Example 2:
// Input: rectangles = [
// [2, 3],
// [3, 7],
// [4, 3],
// [3, 7],
// ];
// Output: 3;

function countGoodLength(rectangles) {
  let minStore = [];
  for (let i = 0; i < rectangles.length; i++) {
    minStore.push(Math.min(...rectangles[i]));
  }

  const maxValue = Math.max(...minStore);
  // return minStore.filter((value) => maxValue === value).length;
}

// console.log(
//   countGoodLength([
//     [5, 8],
//     [3, 9],
//     [5, 12],
//     [16, 5],
//   ])
// );

// console.log(
//   countGoodLength([
//     [2, 3],
//     [3, 7],
//     [4, 3],
//     [3, 7],
//   ])
// );

// Other Approch

function countGoodLength(nums) {
  const minValue = nums.map((value) => Math.min(...value));
  return minValue.filter((value) => Math.max(...minValue) === value).length;
}

// console.log(
//   countGoodLength([
//     [5, 8],
//     [3, 9],
//     [5, 12],
//     [16, 5],
//   ])
// );

// console.log(
//   countGoodLength([
//     [2, 3],
//     [3, 7],
//     [4, 3],
//     [3, 7],
//   ])
// );

// 68 => flipping an image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

function flipAndInvertImage(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let updateArr = [];
    const reverseImg = nums[i].reverse();
    for (let val of reverseImg) {
      if (val === 0) val = 1;
      else val = 0;
      updateArr.push(val);
    }
    result.push(updateArr);
  }
  return result;
}

// console.log(
//   flipAndInvertImage([
//     [1, 1, 0],
//     [1, 0, 1],
//     [0, 0, 0],
//   ])
// );
// console.log(
//   flipAndInvertImage([
//     [1, 1, 0, 0],
//     [1, 0, 0, 1],
//     [0, 1, 1, 1],
//     [1, 0, 1, 0],
//   ])
// );

// Other Approch

function flipAndInvertImage(nums) {
  const reverse = [];
  nums.forEach((element) => {
    reverse.push(element.reverse());
  });

  reverse.forEach((element) => {
    element.forEach((val, index, arr) => {
      if (val === 1) arr[index] = 0;
      else arr[index] = 1;
    });
  });
  return reverse;
}

// console.log(
//   flipAndInvertImage([
//     [1, 1, 0],
//     [1, 0, 1],
//     [0, 0, 0],
//   ])
// );
// console.log(
//   flipAndInvertImage([
//     [1, 1, 0, 0],
//     [1, 0, 0, 1],
//     [0, 1, 1, 1],
//     [1, 0, 1, 0],
//   ])
// );

function numberOfPoints(nums) {
  let storeRange = [];
  nums.forEach((element) => {
    for (let i = element[0]; i <= element[1]; i++) {
      storeRange.push(i);
    }
  });
  return Array.from(new Set(storeRange)).length;
}

// console.log(
//   numberOfPoints([
//     [3, 6],
//     [1, 5],
//     [4, 7],
//   ])
// );
// console.log(
//   numberOfPoints([
//     [1, 3],
//     [5, 8],
//   ])
// );

// Other Approch

function numberOfPoints(nums) {
  let store = [];
  nums.map((element) => {
    for (let i = element[0]; i <= element[1]; i++) {
      store.push(i);
    }
  });
  return Array.from(new Set(store)).length;
}

// console.log(
//   numberOfPoints([
//     [3, 6],
//     [1, 5],
//     [4, 7],
//   ])
// );
// console.log(
//   numberOfPoints([
//     [1, 3],
//     [5, 8],
//   ])
// );

// 69 => special array

// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

//
// Example 1:
// Input: nums = [1]
// Output: true
// Explanation:
// There is only one element. So the answer is true.
// Example 2:
// Input: nums = [2,1,4]
// Output: true
// Explanation:
// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.
// Example 3:
// Input: nums = [4,3,1,6]
// Output: false
// Explanation:
// nums[1] and nums[2] are both odd. So the answer is false.

function isArraySpecial(nums) {
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0) {
      return false;
    } else if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isArraySpecial([1])); // Should output true
// console.log(isArraySpecial([2, 1, 4])); // Should output true
// console.log(isArraySpecial([4, 3, 1, 6])); // Should output false
// console.log(isArraySpecial([2, 10])); // Should output false

// 70 => relative ranks

// you are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
//
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

function findRelativeRanks(score) {
  const sortedIndices = score
    .map((s, i) => i)
    .sort((a, b) => score[b] - score[a]);

  const result = Array(score.length);

  sortedIndices.forEach((index, rank) => {
    if (rank === 0) result[index] = "Gold Medal";
    else if (rank === 1) result[index] = "Silver Medal";
    else if (rank === 2) result[index] = "Bronze Medal";
    else result[index] = (rank + 1).toString();
  });

  return result;
}

// console.log(findRelativeRanks([5, 4, 3, 2, 1]));
// console.log(findRelativeRanks([10, 3, 8, 9, 4]));

// 71 => remove duplicate from sorted array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
// assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Other Approch

function removeDuplicate(nums) {
  let i = 0;

  for (let j = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i;
}

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 72 => make array zero by subtracting equal amount

// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
// Example 2:

// Input: nums = [0]
// Output: 0
// Explanation: Each element in nums is already 0 so no operations are needed.

function minimumOperation(nums) {
  let operation = 0;

  while (nums.some((num) => num > 0)) {
    let minValue = Math.min(...nums.filter((num) => num > 0));

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        nums[i] -= minValue;
      }
    }
    operation++;
  }
  return operation;
}

// console.log(minimumOperation([1, 5, 0, 3, 5]));

// 73 => divide array into equal pair
// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

// Example 1:

// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation:
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.

function divideArray(nums) {
  let set = {};

  nums.forEach((element) => {
    if (set[element]) set[element]++;
    else set[element] = 1;
  });

  return Object.values(set).every((nums) => nums % 2 === 0);
}

// console.log(divideArray([3, 2, 3, 2, 2, 2]));
// console.log(divideArray([1, 2, 3, 4]));
