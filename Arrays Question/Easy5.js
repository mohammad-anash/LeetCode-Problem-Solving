// 279 => Minimum Positive Sum Subarray

// You are given an integer array nums and two integers l and r. Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.

// Return the minimum sum of such a subarray. If no such subarray exists, return -1.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [3, -2, 1, 4], l = 2, r = 3
// Output: 1
// Explanation:
// The subarrays of length between l = 2 and r = 3 where the sum is greater than 0 are:

// [3, -2] with a sum of 1
// [1, 4] with a sum of 5
// [3, -2, 1] with a sum of 2
// [-2, 1, 4] with a sum of 3
// Out of these, the subarray [3, -2] has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.

// Example 2:
// Input: nums = [-2, 2, -3, 1], l = 2, r = 3
// Output: -1
// Explanation:
// There is no subarray of length between l and r that has a sum greater than 0. So, the answer is -1.

// Example 3:
// Input: nums = [1, 2, 3, 4], l = 2, r = 4
// Output: 3
// Explanation:
// The subarray [1, 2] has a length of 2 and the minimum sum greater than 0. So, the answer is 3

function minimumSumSubArray(nums, l, r) {
  let minSum = Number.MAX_SAFE_INTEGER;
  let i = 0;

  while (i < nums.length) {
    let sum = 0;
    let counter = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      counter++;

      if (counter >= l && counter <= r && sum > 0) {
        minSum = Math.min(minSum, sum);
      }

      if (counter > r) break;
    }

    i++;
  }

  return minSum === Number.MAX_SAFE_INTEGER ? -1 : minSum;
}

// console.log(minimumSumSubArray([3, -2, 1, 4], 2, 3));
// console.log(minimumSumSubArray([-2, 2, -3, 1], 2, 3));
// console.log(minimumSumSubArray([1, 2, 3, 4], 2, 4));

// 280 =>  Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// // // Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

function countSubarrays(arr, k, threshold) {
  if (arr.length < k) return 0;

  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let counter = 0;
  let currentSum = maxSum;

  if (currentSum / k >= threshold) counter++;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    if (currentSum / k >= threshold) {
      counter++;
    }
  }

  return counter;
}

// console.log(countSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));

// 281 => Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substringwithout repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  let [l, r, maxlength] = [0, 0, 0];

  while (r < s.length) {
    if (substringWithoutRepChar(l, r)) {
      maxlength = Math.max(maxlength, r - l + 1);
      r++;
    } else {
      l++;
    }
  }

  function substringWithoutRepChar(l, r) {
    const slices = s.slice(l, r + 1);
    const obj = {};

    for (let char of slices) {
      if (obj[char]) return false;
      obj[char] = true;
    }

    return true;
  }

  return maxlength;
};

// console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3
// console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1
// console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3

// 282 => Max Consecutive Ones III

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// // Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// // Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

const longestOnes = (nums, k) => {
  let [l, r, zeros, maxlen] = [0, 0, 0, 0];

  while (r < nums.length) {
    if (nums[r] === 0) {
      zeros++;
    }

    if (zeros > k) {
      if (nums[l] === 0) {
        zeros--;
      }
      l++;
    }

    maxlen = Math.max(maxlen, r - l + 1);
    r++;
  }
  return maxlen;
};

// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

// 283 => Maximum Length Substring With Two Occurrences

// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.

// Example 1:
// Input: s = "bcbbbcba"
// Output: 4
// Explanation:
// The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba".

// Example 2:
// Input: s = "aaaa"
// Output: 2
// Explanation:
// The following substring has a length of 2 and contains at most two occurrences of each character: "aaaa".

const numberOfSubstring = (s) => {
  let [l, r, maxlen] = [0, 0, 0];
  const freq = {};

  while (r < s.length) {
    freq[s[r]] = (freq[s[r]] || 0) + 1;

    while (Object.values(freq).some((count) => count > 2)) {
      freq[s[l]]--;
      if (freq[s[l]] === 0) delete freq[s[l]];
      l++;
    }

    maxlen = Math.max(maxlen, r - l + 1);
    r++;
  }

  return maxlen;
};

// console.log(numberOfSubstring('bcbbbcba')); // Output: 4
// console.log(numberOfSubstring('aaaa')); // Output: 2

// 284 => Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

const isHappy = (n) => {
  let sum = n;

  while (sum !== 1 && sum !== 4) {
    sum = sum
      .toString()
      .split('')
      .reduce((acc, digit) => acc + digit * digit, 0);
  }

  return sum === 1;
};

// console.log(isHappy(19));

// 285 => Find the Power of K-Size Subarrays I

// You are given an array of integers nums of length n and a positive integer k.
// The power of an array is defined as:

// Its maximum element if all of its elements are consecutive and sorted in ascending order.-1 otherwise.You need to find the power of all subarrays of nums of size k.

// Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].

// Example 1:
// Input: nums = [1,2,3,4,3,2,5], k = 3
// Output: [3,4,-1,-1,-1]
// Explanation:

// There are 5 subarrays of nums of size 3:
// [1, 2, 3] with the maximum element 3.
// [2, 3, 4] with the maximum element 4.
// [3, 4, 3] whose elements are not consecutive.
// [4, 3, 2] whose elements are not sorted.
// [3, 2, 5] whose elements are not consecutive.

// Example 2:
// Input: nums = [2,2,2,2,2], k = 4
// Output: [-1,-1]
// Example 3:
// Input: nums = [3,2,3,2,3,2], k = 2
// Output: [-1,3,-1,3,-1]

const resultArray = (nums, k) => {
  const result = [];
  const ans = [];

  for (let i = 0; i < k; i++) {
    ans.push(nums[i]);
  }

  if (checkConditions(ans)) {
    result.push(Math.max(...ans));
  } else {
    result.push(-1);
  }

  for (let i = k; i < nums.length; i++) {
    ans.shift();
    ans.push(nums[i]);

    if (checkConditions(ans)) {
      result.push(Math.max(...ans));
    } else {
      result.push(-1);
    }
  }

  function checkConditions(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return false;
      }
    }
    return true;
  }

  return result;
};

// console.log(resultArray([1, 2, 3, 4, 3, 2, 5], 3));
// console.log(resultArray([2, 2, 2, 2, 2], 4));
// console.log(resultArray([3, 2, 3, 2, 3, 2], 2));

// 295 => Maximum Sum of Distinct Subarrays With Length K

// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
// Example 2:

// Input: nums = [4,4,4], k = 3
// Output: 0
// Explanation: The subarrays of nums with length 3 are:
// - [4,4,4] which does not meet the requirements because the element 4 is repeated.
// We return 0 because no subarrays meet the conditions.

const maximumSubArraySum = (nums, k) => {
  if (nums.length < k) return 0;

  let maxSum = 0;
  let currentSum = 0;
  const numCount = new Map();

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
    numCount.set(nums[i], (numCount.get(nums[i]) || 0) + 1);
  }

  if (numCount.size === k) {
    maxSum = currentSum;
  }

  for (let i = k; i < nums.length; i++) {
    const outElement = nums[i - k];
    numCount.set(outElement, numCount.get(outElement) - 1);
    if (numCount.get(outElement) === 0) {
      numCount.delete(outElement);
    }

    const inElement = nums[i];
    currentSum = currentSum - outElement + inElement;
    numCount.set(inElement, (numCount.get(inElement) || 0) + 1);

    if (numCount.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
};

// console.log(maximumSubArraySum([1, 5, 4, 2, 9, 9, 9], 3));
// console.log(maximumSubArraySum([9, 9, 9], 3));

// 296 =>  Subarrays Distinct Element Sum of Squares I

// You are given a 0-indexed integer array nums.

// The distinct count of a subarray of nums is defined as:

// Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].
// Return the sum of the squares of distinct counts of all subarrays of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,2,1]
// Output: 15
// // Explanation: Six possible subarrays are:
// // [1]: 1 distinct value
// // [2]: 1 distinct value
// // [1]: 1 distinct value
// [1,2]: 2 distinct values
// [2,1]: 2 distinct values
// // [1,2,1]: 2 distinct values
// // The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.
// Example 2:

// Input: nums = [1,1]
// Output: 3
// Explanation: Three possible subarrays are:
// [1]: 1 distinct value
// [1]: 1 distinct value
// [1,1]: 1 distinct value
// The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 = 3.

function sumCount(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const slices = nums.slice(i, j);
      const distinct = [...new Set(slices)].length;
      count += distinct * distinct;
    }
  }

  return count;
}

// console.log(sumCount([1, 2, 1]));
// console.log(sumCount([1, 1]));
