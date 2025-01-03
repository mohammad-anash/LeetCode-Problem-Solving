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

// 297 => Number of Subarrays with Bounded Maximum

// Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,1,4,3], left = 2, right = 3
// Output: 3
// Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
// Example 2:

// Input: nums = [2,9,2,5,6], left = 2, right = 8
// Output: 7

const numSubArrayBoundedMax = (nums, left, right) => {
  let [l, count, prevCount] = [0, 0, 0];

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] >= left && nums[r] <= right) {
      prevCount = r - l + 1;
      count += prevCount;
    } else if (nums[r] > right) {
      l = r + 1;
      prevCount = 0;
    } else {
      count += prevCount;
    }
  }

  return count;
};

// console.log(numSubArrayBoundedMax([2, 1, 4, 3], 2, 3)); // Output: 3
// console.log(numSubArrayBoundedMax([2, 9, 2, 5, 6], 2, 8)); // Output: 7

// 298 => Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// // Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

const maxVowels = (s, k) => {
  let [l, r, maxVow, count] = [0, 0, 0, 0];

  const vowels = 'aeiou';
  while (r < s.length) {
    if (vowels.includes(s[r])) count++;

    if (r - l + 1 > k) {
      if (vowels.includes(s[l])) count--;

      l++;
    }

    maxVow = Math.max(maxVow, count);
    r++;
    x;
  }
  return maxVow;
};

// console.log(maxVowels('abciiidef', 3));
// console.log(maxVowels('aioeu', 2));
// console.log(maxVowels('leetcode', 3));

// 299 => Count Subarrays Where Max Element Appears at Least K Times

// You are given an integer array nums and a positive integer k.
// // Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.
// A subarray is a contiguous sequence of elements within an array.

// Example 1:

// Input: nums = [1,3,2,3,3], k = 2
// Output: 6
// // // Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
// Example 2:

// Input: nums = [1,4,2,1], k = 3
// Output: 0
// Explanation: No subarray contains the element 4 at least 3 times.

const countSubarray = (nums, k) => {
  const maxVal = Math.max(...nums);
  let [res, count, left] = [0, 0, 0];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == maxVal) {
      count++;
    }

    while (count >= k) {
      if (nums[left++] == maxVal) {
        count--;
      }
    }

    res += left;
  }

  return res;
};

// console.log(countSubarray([1, 3, 2, 3, 3], 2));
// console.log(countSubarray([1, 4, 2, 1], 3));

// 300 => Strong Password Checker II

// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

// Example 1:

// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.
// Example 2:
//
// Input: password = "Me+You--IsMyDream"
// Output: false
// // // Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
// Example 3:

// Input: password = "1aB!"
// Output: false
// Explanation: The password does not meet the length requirement. Therefore, we return false.

// 301 => /K-th Smallest Prime Fraction

// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

// Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

// Example 1:

// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.
// Example 2:

// Input: arr = [1,7], k = 1
// Output: [1,7]

const strongPasswordChecker = (str) => {
  if (str.length < 8) return false;

  const hasLowercase = /[a-z]/.test(str);
  const hasUppercase = /[A-Z]/.test(str);
  const hasDigit = /\d/.test(str);
  const hasSpecialChar = /[!@#$%^&*()\-\+]/.test(str);

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return false;
  }

  return hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
};

// console.log(strongPasswordChecker('IloveLe3tcode!'));
// console.log(strongPasswordChecker('Me+You--IsMyDream'));
// console.log(strongPasswordChecker('1aB!'));
// console.log(strongPasswordChecker('"vpWkmkfSAcCLDBNRfH"'));

// 302 =>  K-th Smallest Prime Fraction

// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.

// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].

// Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

// Example 1:

// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.
// Example 2:

// Input: arr = [1,7], k = 1
// Output: [1,7]

const kthSmallestPrimeFraction = (arr, k) => {
  const n = arr.length;
  const fractions = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      fractions.push([arr[i], arr[j]]);
    }
  }

  fractions.sort((a, b) => a[0] / a[1] - b[0] / b[1]);

  return fractions[k - 1];
};

// console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3)); // Output: [2, 5]
// console.log(kthSmallestPrimeFraction([1, 7], 1)); // Output: [2, 5]

// 303 => Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// // Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]

const singleNumber = (nums) => {
  const storeNums = [];
  let obj = {};

  nums.forEach((ele) => {
    if (obj[ele]) obj[ele]++;
    else obj[ele] = 1;
  });

  for (const keys in obj) {
    if (obj[keys] === 1 && storeNums.length < 3) storeNums.push(+keys);
  }

  return storeNums;
};

// console.log(singleNumber([1, 2, 1, 3, 2, 5]));
// console.log(singleNumber([1, 0]));

// 304 => Subarray Sums Divisible by K

// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

const subarraysDivByK = (nums, k) => {
  let count = 0;
  let prefixSum = 0;
  let resmainderMap = { 0: 1 };

  for (const num of nums) {
    prefixSum += num;
    let remainder = prefixSum % k;

    if (remainder < 0) {
      remainder += k;
    }

    if (remainder in resmainderMap) {
      count += resmainderMap[remainder];
    }

    resmainderMap[remainder] = (resmainderMap[remainder] || 0) + 1;
  }

  return count;
};

// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
// console.log(subarraysDivByK([5], 9));

// 305 =>  Sum of Square Numbers
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
// Example 1:

// Input: c = 5
// Output: true
// // Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false

const judgeSquareSum = (c) => {
  for (let a = 0; a * a <= c; a++) {
    let bSquared = c - a * a;
    let b = Math.sqrt(bSquared);
    if (b === Math.floor(b)) {
      return true;
    }
  }
  return false;
};

// console.log(judgeSquareSum(5));
// console.log(judgeSquareSum(3));
// console.log(judgeSquareSum(4));

// 306 =>  Max Number of K-Sum Pairs

// You are given an integer array nums and an integer k.
// // In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

function maxOperation(nums, k) {
  let countOperation = 0;
  const map = new Map();

  for (const num of nums) {
    const complement = k - num;

    if (map.get(complement) > 0) {
      countOperation++;
      map.set(complement, map.get(complement) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return countOperation;
}

// console.log(maxOperation([1, 2, 3, 4], 5));
// console.log(
//   maxOperation([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
// );

// 307 => Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

function maxVowel(s, k) {
  const isVowel = (char) => 'aeiou'.includes(char);
  let maxVow = 0,
    currentVow = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) currentVow++;
  }
  maxVow = currentVow;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) currentVow++;
    if (isVowel(s[i - k])) currentVow--;
    maxVow = Math.max(maxVow, currentVow);
  }

  return maxVow;
}

// console.log(maxVowel('abciiidef', 3));
// console.log(maxVowel('aeiou', 2));

// 308 => Count Number of Bad Pairs

// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].
// Return the total number of bad pairs in nums.

// Example 1:

// Input: nums = [4,1,3,3]
// Output: 5
// // // Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// // // The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// // // The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// // // The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// // // The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// // There are a total of 5 bad pairs, so we return 5.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 0
// Explanation: There are no bad pairs.

function countBadPairs(nums) {
  let badPairs = 0;
  let totalPairs = 0;
  let map = new Map();

  for (let j = 0; j < nums.length; j++) {
    let value = nums[j] - j;

    let goodPairs = map.get(value) || 0;

    badPairs += totalPairs - goodPairs;
    totalPairs++;

    map.set(value, (map.get(value) || 0) + 1);
  }

  return badPairs;
}

// console.log(countBadPairs([4, 1, 3, 3]));
// console.log(countBadPairs([1, 2, 3, 4, 5]));

// 309 => Find the Kth Largest Integer in the Array

// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

// Return the string that represents the kth largest integer in nums.

// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

// Example 1:

// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".
// Example 2:

// Input: nums = ["2","21","12","1"], k = 3
// Output: "2"
// Explanation:
// // The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
// The 3rd largest integer in nums is "2".
// Example 3:

// Input: nums = ["0","0"], k = 2
// Output: "0"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["0","0"].
// The 2nd largest integer in nums is "0".

const kthLargest = (nums, k) => {
  const sorted = nums.sort((a, b) => {
    if (BigInt(a) > BigInt(b)) return -1;
    if (BigInt(a) < BigInt(b)) return 1;
    return 0;
  });
  return sorted[k - 1];
};

// console.log(kthLargest(['3', '6', '7', '10'], 4));

// 310 => Self Dividing Number

// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]

const selfDividingNumbers = (l, r) => {
  const storeSelfDivisibleNums = [];

  for (let i = l; i <= r; i++) {
    const inStr = i.toString();
    let isSelfDivisible = true;

    for (const digit of inStr) {
      if (digit === '0' || i % +digit !== 0) {
        isSelfDivisible = false;
        break;
      }
    }

    if (isSelfDivisible) storeSelfDivisibleNums.push(i);
  }

  return storeSelfDivisibleNums;
};

// console.log(selfDividingNumbers(1, 22)); // Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// console.log(selfDividingNumbers(47, 85)); // Output: [48,55,66,77]

// 311 =>   Count Vowel Strings in Ranges

// You are given a 0-indexed array of strings words and a 2D array of integers queries.
// Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.
// Return an array ans of size queries.length, where ans[i] is the answer to the ith query.
// Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
// Output: [2,3,0]
// Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
// The answer to the query [0,2] is 2 (strings "aba" and "ece").
// to query [1,4] is 3 (strings "ece", "aa", "e").
// to query [1,1] is 0.
// We return [2,3,0].
// Example 2:

// Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
// Output: [3,2,1]
// Explanation: Every string satisfies the conditions, so we return

const vowelString = (words, queries) => {
  const vowels = 'aeiou';
  const n = words.length;

  const isVowelWord = words.map(
    (word) => vowels.includes(word[0]) && vowels.includes(word.at(-1))
  );

  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + (isVowelWord[i] ? 1 : 0);
  }

  return queries.map(([start, end]) => prefixSum[end + 1] - prefixSum[start]);
};

// // Test cases
// console.log(
//   vowelString(
//     ['aba', 'bcb', 'ece', 'aa', 'e'],
//     [
//       [0, 2],
//       [1, 4],
//       [1, 1],
//     ]
//   )
// );

// 312 => Pairs of Songs With Total Durations Divisible by 60

// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

const numsPairDivisibleBy60 = (nums) => {
  const remainderFreq = Array(60).fill(0);
  let count = 0;

  for (let time of nums) {
    const remainder = time % 60;
    const complement = (60 - remainder) % 60;

    count += remainderFreq[complement];

    remainderFreq[remainder]++;
  }

  return count;
};

// console.log(numsPairDivisibleBy60([30, 20, 150, 100, 40]));
// console.log(numsPairDivisibleBy60([60, 60, 60]));
// console.log(numsPairDivisibleBy60(new Array(1e6).fill(60)));

// 313 => Four Divisors

// Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

// Example 1:

// Input: nums = [21,4,7]
// Output: 32
// Explanation:
// // 21 has 4 divisors: 1, 3, 7, 21
// // 4 has 3 divisors: 1, 2, 4
// // 7 has 2 divisors: 1, 7
// The answer is the sum of divisors of 21 only.
// Example 2:

// Input: nums = [21,21]
// Output: 64
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 0

const findMaximumXOR = (nums) => {
  let finalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let sum = 0;
    const n = nums[i];

    for (let j = 1; j * j <= n; j++) {
      if (n % j === 0) {
        count++;
        sum += j;

        if (j !== n / j) {
          count++;
          sum += n / j;
        }
      }

      if (count > 4) break;
    }

    if (count === 4) finalSum += sum;
  }

  return finalSum;
};

// console.log(findMaximumXOR([21, 4, 7])); // Output: 32

// 314 => Best SightSeeing pair

// You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

// The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

// Return the maximum score of a pair of sightseeing spots.

// Example 1:

// Input: values = [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
// Example 2:

// Input: values = [1,2]
// Output: 2

function maxScoreSightSeeingPair(nums) {
  let maxScore = 0;
  let maxLeftContribution = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxScore = Math.max(maxScore, maxLeftContribution + nums[i] - i);

    maxLeftContribution = Math.max(maxLeftContribution, nums[i] + i);
  }

  return maxScore;
}

// console.log(maxScoreSightSeeingPair([8, 1, 5, 2, 6]));

// 315 => Count Complete Subarrays in an Array

// You are given an array nums consisting of positive integers.
// We call a subarray of an array complete if the following condition is satisfied:
// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.
// A subarray is a contiguous non-empty part of an array.

// Example 1:

// Input: nums = [1,3,1,2,2]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
// Example 2:

// Input: nums = [5,5,5,5]
// Output: 10
// // Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.

const countCompleteSubArrays = (nums) => {
  const k = new Set(nums).size; // Total distinct elements in the array
  let count = 0;

  for (let l = 0; l < nums.length; l++) {
    let uniqueCount = 0;
    let seen = [];

    for (let r = l; r < nums.length; r++) {
      if (!seen.includes(nums[r])) {
        uniqueCount++;
        seen.push(nums[r]);
      }

      if (uniqueCount === k) {
        count += nums.length - r;
        break;
      }
    }
  }

  return count;
};

// console.log(countCompleteSubArrays([1, 3, 1, 2, 2])); // Output: 4
// console.log(countCompleteSubArrays([5, 5, 5, 5])); // Output: 4

// 316 => Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums) {
  const ans = new Array(nums.length).fill(1);

  let prefixPro = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefixPro;
    prefixPro *= nums[i];
  }

  let suffixPro = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= suffixPro;
    suffixPro *= nums[i];
  }

  return ans;
}

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// 317 => Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

const subsets = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  const backtrack = (start, subset) => {
    result.push([...subset]);
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  };
  backtrack(0, []);
  return result;
};

// console.log(subsets([1, 2]));
// console.log(subsets([1, 2, 3]));

// 318 => The Number of Beautiful Subsets

// You are given an array nums of positive integers and a positive integer k.
// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.
// Return the number of non-empty beautiful subsets of the array nums.
// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

// Example 1:

// Input: nums = [2,4,6], k = 2
// Output: 4
// // Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// // It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
// Example 2:

// Input: nums = [1], k = 1
// Output: 1
// Explanation: The beautiful subset of the array nums is [1].
// It can be proved that there is only 1 beautiful subset in the array [1].

const beautifulSubsets = (nums, k) => {
  let countBeautifulSubsets = 0;
  nums.sort((a, b) => a - b);

  const isBeautifulSubset = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (Math.abs(nums[i] - nums[j]) === k) return false;
      }
    }
    return true;
  };

  const backtrack = (start, subset) => {
    if (isBeautifulSubset([...subset])) countBeautifulSubsets++;
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  };
  backtrack(0, []);
  return countBeautifulSubsets - 1;
};

// console.log(beautifulSubsets([2, 4, 6], 2));
// console.log(beautifulSubsets([1], 1));
// console.log(beautifulSubsets([10, 4, 5, 7, 2, 1], 3));

// 319 => Sum of All Subset XOR Totals

// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums.
// Note: Subsets with the same elements should be counted multiple times.
// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Example 1:

// Input: nums = [1,3]
// Output: 6
// Explanation: The 4 subsets of [1,3] are:
// - The empty subset has an XOR total of 0.
// - [1] has an XOR total of 1.
// - [3] has an XOR total of 3.
// - [1,3] has an XOR total of 1 XOR 3 = 2.
// 0 + 1 + 3 + 2 = 6
// Example 2:

// Input: nums = [5,1,6]
// Output: 28
//  Explanation: The 8 subsets of [5,1,6] are:
//  - The empty subset has an XOR total of 0.
//  - [5] has an XOR total of 5.
//  - [1] has an XOR total of 1.
//  - [6] has an XOR total of 6.
//  // - [5,1] has an XOR total of 5 XOR 1 = 4.
//  // - [5,6] has an XOR total of 5 XOR 6 = 3.
//  // - [1,6] has an XOR total of 1 XOR 6 = 7.
//  // - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
//  0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28
// Example 3:

// Input: nums = [3,4,5,6,7,8]
// Output: 480
// Explanation: The sum of all XOR totals for every subset is 480.

const subsetXORSum = (nums) => {
  let XORSum = 0;

  function generateSubset(ind, subset) {
    XORSum += [...subset].reduce((XOR, current) => XOR ^ current, 0);

    for (let i = ind; i < nums.length; i++) {
      subset.push(nums[i]);
      generateSubset(i + 1, subset);
      subset.pop();
    }
  }
  generateSubset(0, []);
  return XORSum;
};

// console.log(subsetXORSum([5, 1, 6]));
// console.log(subsetXORSum([3, 4, 5, 6, 7, 8]))

// 320 => Permutations

// Given an array nums of distinct integers, return all the possible  permutations . You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

const permute = (nums, currArr = [], res = []) => {
  if (nums.length === 0) {
    res.push([...currArr]);
  }

  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((_, ind) => ind !== i);
    currArr.push(nums[i]);
    permute(rest, currArr, res);
    currArr.pop();
  }

  return res;
};

// console.log(permute([1, 2, 3]));

// 321 => Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1, 2, 3];
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ];

const permuteUnique = (nums) => {
  const map = new Set();

  const generateAllPermutation = (nums, currArr = [], res = []) => {
    if (nums.length === 0) {
      const key = currArr.join(',');
      if (!map.has(key)) {
        map.add(key);
        res.push([...currArr]);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const rest = nums.filter((_, j) => i !== j);
      currArr.push(nums[i]);
      generateAllPermutation(rest, currArr, res);
      currArr.pop();
    }

    return res;
  };

  return generateAllPermutation(nums);
};

// console.log(permuteUnique([1, 1, 2]));

// 322 => Number of Pairs of Strings With Concatenation Equal to Target

// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

// Example 1:

// Input: nums = ["777","7","77","77"], target = "7777"
// Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"
// Example 2:

// Input: nums = ["123","4","12","34"], target = "1234"
// Output: 2
// Explanation: Valid pairs are:
// - (0, 1): "123" + "4"
// - (2, 3): "12" + "34"
// Example 3:

// Input: nums = ["1","1","1"], target = "11"
// Output: 6
// Explanation: Valid pairs are:
// - (0, 1): "1" + "1"
// - (1, 0): "1" + "1"
// - (0, 2): "1" + "1"
// - (2, 0): "1" + "1"
// - (1, 2): "1" + "1"
// - (2, 1): "1" + "1"

const numOfPairs = (nums, target) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) count++;
      if (nums[j] + nums[i] === target) count++;
    }
  }
  return count;
};

// console.log(numOfPairs(['777', '7', '77', '77'], '7777'));
// console.log(numOfPairs(['123', '4', '12', '34'], '1234'));

// 323 => Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// // Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

const fib = (nums) => {
  if (nums === 0) return nums;
  const storeFibNums = [0, 1];

  for (let i = 2; i <= nums; i++) {
    storeFibNums.push(storeFibNums[i - 1] + storeFibNums[i - 2]);
  }
  return storeFibNums.at(-1);
};

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));

// 324 => Adding Spaces to a String

// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index.

// For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
// Return the modified string after the spaces have been added.

// Example 1:

// Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
// Output: "Leetcode Helps Me Learn"
// Explanation:
// The indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".
// We then place spaces before those characters.
// Example 2:

// Input: s = "icodeinpython", spaces = [1,5,7,9]
// Output: "i code in py thon"
// Explanation:
// // // The indices 1, 5, 7, and 9 correspond to the underlined characters in "icodeinpython".
// // We then place spaces before those characters.
// Example 3:

// Input: s = "spacing", spaces = [0,1,2,3,4,5,6]
// Output: " s p a c i n g"
// Explanation:
// We are also able to place spaces before the first character of the string.

const addSpaces = (s, spaces) => {
  let result = '';

  const spaceSet = new Set(spaces);

  for (let i = 0; i < s.length; i++) {
    if (spaceSet.has(i)) {
      result += ' ';
    }
    result += s[i];
  }

  return result;
};

// console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));

// 325 => Sum of Distances

// You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.

// Return the array arr.

// Example 1:

// Input: nums = [1,3,1,1,2]
// Output: [5,0,3,4,0]
// Explanation:
// // // When i = 0, nums[0] == nums[2] and nums[0] == nums[3]. Therefore, arr[0] = |0 - 2| + |0 - 3| = 5.
// // // When i = 1, arr[1] = 0 because there is no other index with value 3.
// // // When i = 2, nums[2] == nums[0] and nums[2] == nums[3]. Therefore, arr[2] = |2 - 0| + |2 - 3| = 3.
// // When i = 3, nums[3] == nums[0] and nums[3] == nums[2]. Therefore, arr[3] = |3 - 0| + |3 - 2| = 4.
// When i = 4, arr[4] = 0 because there is no other index with value 2.

// Example 2:

// Input: nums = [0,5,3]
// Output: [0,0,0]
// Explanation: Since each element in nums is distinct, arr[i] = 0 for all i.

const getDistance = (arr) => {
  const indexMap = new Map();
  const result = new Array(arr.length).fill(0);

  arr.forEach((num, idx) => {
    if (!indexMap.has(num)) {
      indexMap.set(num, []);
    }
    indexMap.get(num).push(idx);
  });

  indexMap.forEach((indices) => {
    const n = indices.length;

    if (n === 1) {
      return;
    }

    let prefixSum = 0;
    let suffixSum = 0;

    for (let i = 1; i < n; i++) {
      suffixSum += indices[i] - indices[0];
    }

    result[indices[0]] = suffixSum;
    for (let i = 1; i < n; i++) {
      const gap = indices[i] - indices[i - 1];
      prefixSum += i * gap;
      suffixSum -= (n - i) * gap;
      result[indices[i]] = prefixSum + suffixSum;
    }
  });

  return result;
};

// console.log(getDistance([1, 3, 1, 1, 2]));

// 326 => Sort Characters By Frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// // // Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function sortByCharFrequency(s) {
  const freqMap = new Map();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const sortedChars = Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([char]) => char);

  return sortedChars.map((char) => char.repeat(freqMap.get(char))).join('');
}

// console.log(sortByCharFrequency('banana'));
// console.log(sortByCharFrequency('anash'));

// 327 => K-Concatenation Maximum Sum

// Given an integer array arr and an integer k, modify the array by repeating it k times.
// For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
// Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.
// As the answer can be very large, return the answer modulo 109 + 7.

// Example 1:

// Input: arr = [1,2], k = 3
// Output: 9
// Example 2:

// Input: arr = [1,-2,1], k = 5
// Output: 2
// Example 3:

// Input: arr = [-1,-2], k = 7
// Output: 0

const kConcatenationMaxSum = (arr, k) => {
  const MOD = 1e9 + 7;

  const totalSum = arr.reduce((sum, curr) => sum + curr, 0);

  if (arr.every((val) => val >= 0)) {
    return (((totalSum * k) % MOD) + MOD) % MOD;
  }

  const maxSubArraySum = (nums) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of nums) {
      currentSum = Math.max(0, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  };

  if (k === 1) {
    return maxSubArraySum(arr) % MOD;
  }

  const maxSumSingle = maxSubArraySum(arr);
  const maxSumDouble = maxSubArraySum([...arr, ...arr]);

  if (totalSum > 0) {
    return (((maxSumDouble + (k - 2) * totalSum) % MOD) + MOD) % MOD;
  } else {
    return maxSumDouble % MOD;
  }
};

// console.log(kConcatenationMaxSum([1, 2], 3));
// console.log(kConcatenationMaxSum([1, -2, 1], 5));

// 328 => Maximum Subarray Sum with One Deletion

// Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.

// Note that the subarray needs to be non-empty after deleting one element.

// Example 1:

// Input: arr = [1,-2,0,3]
// Output: 4
// Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
// Example 2:

// Input: arr = [1,-2,-2,3]
// Output: 3
// Explanation: We just choose [3] and it's the maximum sum.
// Example 3:

// Input: arr = [-1,-1,-1,-1]
// Output: -1
// Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.

const maximumSum = (arr) => {
  let [maxSum, sum] = [arr[0], arr[0]];
  let dpWithDelete = 0;

  for (let i = 1; i < arr.length; i++) {
    dpWithDelete = Math.max(sum, dpWithDelete + arr[i]);
    sum = Math.max(sum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, sum, dpWithDelete);
  }

  return maxSum;
};

// console.log(maximumSum([1, -2, 0, 3]));
// console.log(maximumSum([1, -2, -2, 3]));
// console.log(maximumSum([-1, -1, -1, -1]));

// 329 =>  Print Words Vertically

// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.

// Example 1:

// Input: s = "HOW ARE YOU"
// Output: ["HAY","ORO","WEU"]
// Explanation: Each word is printed vertically.
//  "HAY"
//  "ORO"
//  "WEU"
// Example 2:

// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB","OEROOE","   T"]
// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"

// Example 3:
// Input: s = "CONTEST IS COMING"
// Output: ["CIC","OSO","N M","T I","E N","S G","T"]

const printVertically = (s) => {
  const store = [];
  s = s.split(' ');
  const maxLength = Math.max(...s.map((word) => word.length));

  for (let i = 0; i < maxLength; i++) {
    let column = '';
    for (let word of s) {
      column += word[i] || ' ';
    }
    store.push(column.trimEnd());
  }

  return store;
};

// console.log(printVertically('HOW ARE YOU'));
// console.log(printVertically('TO BE OR NOT TO BE'));
// console.log(printVertically('CONTEST IS COMING'));

// 330 =>  Sum in a Matrix

// You are given a 0-indexed 2D integer array nums. Initially, your score is 0. Perform the following operations until the matrix becomes empty:

// From each row in the matrix, select the largest number and remove it. In the case of a tie, it does not matter which number is chosen.
// Identify the highest number amongst all those removed in step 1. Add that number to your score.
// Return the final score.

// Example 1:

// Input: nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]
// Output: 15
// // // Explanation: In the first operation, we remove 7, 6, 6, and 3. We then add 7 to our score. Next, we remove 2, 4, 5, and 2. We add 5 to our score. Lastly, we remove 1, 2, 3, and 1. We add 3 to our score. Thus, our final score is 7 + 5 + 3 = 15.
// Example 2:

// Input: nums = [[1]]
// Output: 1
// Explanation: We remove 1 and add it to the answer. We return 1.

const matrixSum = (nums) => {
  let largestSum = 0;

  while (nums[0].length > 0) {
    nums.forEach((row) => row.sort((a, b) => b - a));
    const removedMaxValues = nums.map((row) => row.shift());
    largestSum += Math.max(...removedMaxValues);
  }

  return largestSum;
};

// console.log(
//   matrixSum([
//     [7, 2, 1],
//     [6, 4, 2],
//     [6, 5, 3],
//     [3, 2, 1],
//   ])
// );

// console.log(matrixSum([[1]]));
