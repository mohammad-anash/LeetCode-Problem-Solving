// 373 => XOR Queries of a Subarray

// You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

// For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

// Return an array answer where answer[i] is the answer to the ith query.

// Example 1:

// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8]
// Explanation:
// The binary representation of the elements in the array are:
// 1 = 0001
// 3 = 0011
// 4 = 0100
// 8 = 1000
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2
// [1,2] = 3 xor 4 = 7
// [0,3] = 1 xor 3 xor 4 xor 8 = 14
// [3,3] = 8
// Example 2:

// Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// Output: [8,0,4,4]

const xorQueries = (arr, queries) => {
  const n = arr.length;
  const result = [];
  const prefixXor = new Array(n).fill(0);

  prefixXor[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixXor[i] = prefixXor[i - 1] ^ arr[i];
  }

  for (const [l, r] of queries) {
    if (l === 0) {
      result.push(prefixXor[r]);
    } else {
      result.push(prefixXor[r] ^ prefixXor[l - 1]);
    }
  }
  return result;
};

// console.log(
//   xorQueries(
//     [1, 3, 4, 8],
//     [
//       [0, 1],
//       [1, 2],
//       [0, 3],
//       [3, 3],
//     ]
//   )
// );

// 374 => Special Array II

// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

// You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not.

// Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

// Example 1:
// // Input: nums = [3,4,1,2,6], queries = [[0,4]]
// Output: [false]
// Explanation:
// The subarray is [3,4,1,2,6]. 2 and 6 are both even.

// Example 2:
// Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]
// Output: [false,true]
// Explanation:
// The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
// The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true

const isArraySpecial = (nums, queries) => {
  const n = nums.length;
  const prefixArray = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefixArray[i] = prefixArray[i - 1];
    if (
      (nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) ||
      (nums[i - 1] % 2 !== 0 && nums[i] % 2 !== 0)
    ) {
      prefixArray[i]++;
    }
  }

  const answer = [];
  for (const [from, to] of queries) {
    const invalidPairs = prefixArray[to] - prefixArray[from];
    answer.push(invalidPairs === 0);
  }

  return answer;
};

// Example Test Cases
// console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]])); // [false]
// console.log(
//   isArraySpecial(
//     [4, 3, 1, 6],
//     [
//       [0, 2],
//       [2, 3],
//     ]
//   )
// ); // [false, true]

// 375 => Palimdrom Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalimdrom = (x) => {
  return +x.toString().split('').reverse().join('') === x;
};

// console.log(isPalimdrom(121));
// console.log(isPalimdrom(123));

// 376 => Maximum Value of an Ordered Triplet II

// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

// Example 1:

// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77.
// Example 2:

// Input: nums = [1,10,3,4,19]
// Output: 133
// Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
// It can be shown that there are no ordered triplets of indices with a value greater than 133.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
// Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.
//
function maximumTripletValue(nums) {
  const n = nums.length;
  if (n < 3) return 0;

  const max_Left = new Array(n).fill(0);
  max_Left[0] = -Infinity;
  for (let i = 1; i < n; i++) {
    max_Left[i] = Math.max(max_Left[i - 1], nums[i - 1]);
  }

  const max_Right = new Array(n).fill(0);
  max_Right[n - 1] = -Infinity;
  for (let j = n - 2; j >= 0; j--) {
    max_Right[j] = Math.max(max_Right[j + 1], nums[j + 1]);
  }

  let maxTriplet = 0;
  for (let j = 1; j < n - 1; j++) {
    const current = (max_Left[j] - nums[j]) * max_Right[j];
    maxTriplet = Math.max(maxTriplet, current);
  }

  return maxTriplet > 0 ? maxTriplet : 0;
}

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
// console.log(maximumTripletValue([1, 10, 3, 4, 19]));
// console.log(maximumTripletValue([1, 2, 3]));

// 377 =>  Divisible and Non-divisible Sums Difference

// You are given positive integers n and m.
// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

// Example 1:

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.
// Example 2:

// Input: n = 5, m = 6
// Output: 15
// // Explanation: In the given example:
// // - Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// - Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// We return 15 - 0 = 15 as the answer.
// Example 3:

// Input: n = 5, m = 1
// Output: -15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
// - Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
// We return 0 - 15 = -15 as the answer.

const differenceOfNums = (n, m) => {
  let nonSumDivisible = 0;
  let divisibleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleSum += i;
    } else {
      nonSumDivisible += i;
    }
  }
  return nonSumDivisible - divisibleSum;
};

// console.log(differenceOfNums(10, 3));
// console.log(differenceOfNums(5, 6));
// console.log(differenceOfNums(5, 1));
