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

console.log(findMaximumXOR([21, 4, 7])); // Output: 32
