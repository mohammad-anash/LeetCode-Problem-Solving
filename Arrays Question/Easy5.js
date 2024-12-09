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
