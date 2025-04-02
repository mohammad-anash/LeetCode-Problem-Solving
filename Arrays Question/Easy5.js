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

// 331 => Count Good Meals

// A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.
// You can pick any two different foods to make a good meal.
// Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 109 + 7.
// Note that items with different indices are considered different even if they have the same deliciousness value.

// Example 1:

// Input: deliciousness = [1,3,5,7,9]
// Output: 4
// // // Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
// // Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.
// Example 2:

// Input: deliciousness = [1,1,1,3,3,3,7]
// Output: 15
// Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.

function countPairs(deliciousness) {
  const MOD = 1e9 + 7;
  const powerOfTwos = [];

  for (let i = 0; i <= 22; i++) {
    powerOfTwos.push(2 ** i);
  }

  let count = 0;
  const freqMap = new Map();

  for (const num of deliciousness) {
    for (const power of powerOfTwos) {
      const complement = power - num;
      if (freqMap.has(complement)) {
        count = (count + freqMap.get(complement)) % MOD;
      }
    }

    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return count;
}

// // Example Usage
// console.log(countPairs([1, 3, 5, 7, 9])); // Output: 4
// console.log(countPairs([1, 1, 1, 3, 3, 3, 7])); // Output: 15

// 332 => three Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// // // nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// // // nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// // // nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// // The distinct triplets are [-1,0,1] and [-1,-1,2].
// // Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = (nums) => {
  const storeTriplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        storeTriplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }
    }
  }

  return storeTriplets;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 333 => Maximum Length of Pair Chain

// You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
// A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

// Return the length longest chain which can be formed.
// You do not need to use up all the given intervals. You can select pairs in any order.

// Example 1:

// Input: pairs = [[1,2],[2,3],[3,4]]
// Output: 2
// // Explanation: The longest chain is [1,2] -> [3,4].
// Example 2:

// Input: pairs = [[1,2],[7,8],[4,5]]
// Output: 3
// Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].

const findLongestChain = (nums) => {
  nums.sort((a, b) => a[1] - b[1]);

  let maximumPooulationYear = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of nums) {
    if (lastEnd < start) {
      maximumPooulationYear++;
      lastEnd = end;
    }
  }

  return maximumPooulationYear;
};

// console.log(
//   findLongestChain([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// )

// 334 => count the number of Fair Pair

// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.

// A pair (i, j) is fair if:

// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper

// Example 1:

// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// // Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
// Example 2:

// Input: nums = [1,7,9,2,5], lower = 11, upper = 11
// Output: 1
// Explanation: There is a single fair pair: (2,3).

function countFairPairs(nums, lower, upper) {
  nums.sort((a, b) => a - b);

  function getPairLessThan(arr, value) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      if (nums[left] + nums[right] < value) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
    return count;
  }
  return getPairLessThan(nums, upper + 1) - getPairLessThan(nums, lower);
}

// console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // Output: 6
// console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11)); // Output: 1

// 335 => Find the Minimum Number of Fibonacci Numbers Whose Sum Is K

// Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.

// The Fibonacci numbers are defined as:

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 for n > 2.
// It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.

// Example 1:

// Input: k = 7
// Output: 2
// // Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ...
// // For k = 7 we can use 2 + 5 = 7.
// Example 2:

// Input: k = 10
// Output: 2
// // Explanation: For k = 10 we can use 2 + 8 = 10.
// Example 3:

// Input: k = 19
// Output: 3
// Explanation: For k = 19 we can use 1 + 5 + 13 = 19

const findMinFibonacciNumbers = (k) => {
  const fib = [1, 1];

  while (true) {
    const next = fib[fib.length - 1] + fib[fib.length - 2];
    if (next > k) break;
    fib.push(next);
  }

  let count = 0;
  for (let i = fib.length - 1; i >= 0 && k > 0; i--) {
    if (fib[i] <= k) {
      k -= fib[i];
      count++;
    }
  }

  return count;
};

// console.log(findMinFibonacciNumbers(7))

// 336 =>  Range Sum of Sorted Subarray Sums

// You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

// Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.

// Example 1:

// Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
// Output: 13
// // Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13.
// Example 2:

// Input: nums = [1,2,3,4], n = 4, left = 3, right = 4
// Output: 6
// // Explanation: The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.
// Example 3:

// Input: nums = [1,2,3,4], n = 4, left = 1, right = 10
// Output: 50

const rangeSum = (nums, n, left, right) => {
  const MOD = 1000000007;
  const storeSum = [];

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = (sum + nums[j]) % MOD;
      storeSum.push(sum);
    }
  }

  storeSum.sort((a, b) => a - b);
  let result = 0;
  for (let i = left - 1; i < right; i++) {
    result = (result + storeSum[i]) % MOD;
  }
  return result;
};

// console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));

// 337 => Non-decreasing Array

// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// // Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You

const checkPossibility = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;

      if (count > 1) return false;

      if (i > 0 && nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }

  return true;
};

// Test cases
// console.log(checkPossibility([4, 2, 3])); // Output: true
// console.log(checkPossibility([4, 2, 1])); // Output: false
// console.log(checkPossibility([3, 4, 2, 3])); // Output: false

// 338 => A Number After a Double Reversal

// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

function isSameAfterReversal(nums) {
  const inStr = nums.toString();

  if (inStr.length === 1) return true;

  if (inStr.endsWith('0')) {
    return false;
  } else {
    return true;
  }
}

// console.log(isSameAfterReversal(526));
// console.log(isSameAfterReversal(1800));

// 339 => Minimum Sum of Four Digit Number After Splitting Digits

// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

const minimumSum = (...nums) => {
  const inStr = nums
    .toString()
    .split('')
    .sort((a, b) => a - b)
    .map((val) => +val);

  const new1 = +inStr[0] * 10 + +inStr[2];
  const new2 = +inStr[1] * 10 + +inStr[3];

  console.log(new1 + new2);
};

// console.log(minimumSum(4512));
// console.log(minimumSum(4009));
// console.log(minimumSum(2932));

// 340 => XOR Operation in an Array

// You are given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// Example 1:

// Input: n = 5, start = 0
// Output: 8
// // // Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// // Where "^" corresponds to bitwise XOR operator.
// Example 2:

// Input: n = 4, start = 3
// Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

const xorOperation = (n, start) => {
  let nums = new Array(n).fill(0);
  let xorValue = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = start + 2 * i;
    xorValue ^= nums[i];
  }
  return xorValue;
};

// console.log(xorOperation(5, 0));
// console.log(xorOperation(4, 3));

// 341 => The kth Factor of n

// You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

// Example 1:

// Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
// Example 2:

// Input: n = 7, k = 2
// Output: 7
// // Explanation: Factors list is [1, 7], the 2nd factor is 7.
// Example 3:

// Input: n = 4, k = 4
// Output: -1
// Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.

const kthFactor = (n, k) => {
  const storeFactors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      storeFactors.push(i);
    }
  }

  return storeFactors[k - 1] ?? -1;
};

// console.log(kthFactor(12, 3));
// console.log(kthFactor(7, 2));
// console.log(kthFactor(4, 4))

// 342 => Find length of the longest subarray containing atmost two distinct integers

// Given an array arr[] containing positive elements, the task is to find the length of the longest subarray of an input array containing at most two distinct integers.

// Examples:

// Input: arr[]= [2, 1, 2]
// Output: 3
// Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.
// Input: arr[] = [3, 1, 2, 2, 2, 2]
// Output: 5
// Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5. The subarray starts at the second element 1 and ends at the last element. It contains at most two distinct integers (1 and 2).

const subArrayWithTwoDistinct = (nums) => {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const slices = nums.slice(i, j);
      const uniqueNums = [...new Set(slices)].length;

      if (uniqueNums <= 2) {
        maxLength = Math.max(maxLength, slices.length);
      }
    }
  }
  return maxLength;
};

// console.log(subArrayWithTwoDistinct([2, 1, 2]));
// console.log(subArrayWithTwoDistinct([3, 1, 2, 2, 2, 2]))

// 343 => Number of Common Factors

// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

// Example 1:

// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
// Example 2:

// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.

const commonFactors = (a, b) => {
  const n = Math.max(a, b);
  let countCommonFac = 0;

  for (let i = 0; i <= n; i++) {
    if (a % i === 0 && b % i === 0) {
      countCommonFac++;
    }
  }
  return countCommonFac;
};

// console.log(commonFactors(12, 6));
// console.log(commonFactors(25, 30));
// console.log(commonFactors(885, 885));

// 344 => Find The Original Array of Prefix Xor
// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.

// Example 1:

// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
// Example 2:

// Input: pref = [13]
// Output: [13]
// Explanation: We have pref[0] = arr[0] = 13.

const findArray = (pref) => {
  let prefixArr = new Array(pref.length).fill(0);
  prefixArr[0] = pref[0];

  for (let i = 1; i < pref.length; i++) {
    prefixArr[i] = pref[i - 1] ^ pref[i];
  }

  return prefixArr;
};

// console.log(findArray([5, 2, 0, 3, 1]));

// 345 => Range Product Queries of Powers

// Given a positive integer n, there exists a 0-indexed array called powers, composed of the minimum number of powers of 2 that sum to n. The array is sorted in non-decreasing order, and there is only one way to form the array.

// You are also given a 0-indexed 2D integer array queries, where queries[i] = [lefti, righti]. Each queries[i] represents a query where you have to find the product of all powers[j] with lefti <= j <= righti.

// Return an array answers, equal in length to queries, where answers[i] is the answer to the ith query. Since the answer to the ith query may be too large, each answers[i] should be returned modulo 109 + 7.

// Example 1:

// Input: n = 15, queries = [[0,1],[2,2],[0,3]]
// Output: [2,4,64]
// Explanation:
// For n = 15, powers = [1,2,4,8]. It can be shown that powers cannot be a smaller size.
// Answer to 1st query: powers[0] * powers[1] = 1 * 2 = 2.
// Answer to 2nd query: powers[2] = 4.
// Answer to 3rd query: powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64.
// Each answer modulo 109 + 7 yields the same answer, so [2,4,64] is returned.
// Example 2:

// Input: n = 2, queries = [[0,0]]
// Output: [2]
// Explanation:
// For n = 2, powers = [2].
// The answer to the only query is powers[0] = 2. The answer modulo 109 + 7 is the same, so [2] is returned

const productQueries = (n, queries) => {
  const MOD = 1e9 + 7;
  const twoPowerArr = [];
  const binary = n.toString(2).split('').reverse();

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      twoPowerArr.push(2 ** i);
    }
  }

  const answer = [];
  for (const [start, end] of queries) {
    let pro = 1;
    for (let j = start; j <= end; j++) {
      pro = (pro * twoPowerArr[j]) % MOD;
    }
    answer.push(pro);
  }

  return answer;
};

// console.log(
//   productQueries(15, [
//     [0, 1],
//     [2, 2],
//     [0, 3],
//   ])
// ); // [2, 4, 64]

// 346 => Count Number of Distinct Integers After Reverse Operations
// You are given an array nums consisting of positive integers.

// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

// Return the number of distinct integers in the final array.

// Example 1:

// Input: nums = [1,13,10,12,31]
// Output: 6
// Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
// The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
// The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31).
// Example 2:

// Input: nums = [2,2,2]
// Output: 1
// Explanation: After including the reverse of each number, the resulting array is [2,2,2,2,2,2].
// The number of distinct integers in this array is 1 (The number 2).

const countDistinctInteger = (nums) => {
  const reverseArr = [];

  for (let i = 0; i < nums.length; i++) {
    const reverseNums = +nums[i].toString().split('').reverse().join('');
    reverseArr.push(reverseNums);
  }

  const mergeArr = [...nums, ...reverseArr];
  return new Set(mergeArr).size;
};

// console.log(countDistinctInteger([1, 13, 10, 12, 31]));
// console.log(countDistinctInteger([2]));

// 347 => Sum of Number and Its Reverse

// Given a non-negative integer num, return true if num can be expressed as the sum of any non-negative integer and its reverse, or false otherwise.

// Example 1:

// Input: num = 443
// Output: true
// Explanation: 172 + 271 = 443 so we return true.
// Example 2:

// Input: num = 63
// Output: false
// Explanation: 63 cannot be expressed as the sum of a non-negative integer and its reverse so we return false.
// Example 3:

// Input: num = 181
// Output: true
// Explanation: 140 + 041 = 181 so we return true. Note that when a number is reversed, there may be leading zeros.

const sumOfNumberAndReverse = (num) => {
  if (num === 0) return true;
  for (let i = 1; i <= num; i++) {
    if (i + +i.toString().split('').reverse().join('') === num) {
      return true;
    }
  }
  return false;
};

// console.log(sumOfNumberAndReverse(443));
// console.log(sumOfNumberAndReverse(63));
// console.log(sumOfNumberAndReverse(181));
// console.log(sumOfNumberAndReverse(4));

// 348 => Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

function argumentsLength(...nums) {
  return nums.length;
}

// console.log(argumentsLength([{}, null, '3']));

// 349 => is Object Empty

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// // Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

const isEmpty = (obj) => {
  const length = obj.length;

  if (length) {
    return false;
  } else {
    const values = Object.values(obj);
    if (values.length) {
      return false;
    } else {
      return true;
    }
  }
};

// console.log(isEmpty({ x: 5, y: 42 }));
// console.log(isEmpty({}));
// console.log(isEmpty([null, false, 0]));

// 350 => Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

function createHelloWorld(...args) {
  return () => 'Hello World';
}

// console.log(createHelloWorld(['anash', 'Something Else']));

// 351 => Chunk Array

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.
// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
// Example 3:

// Input: arr = [8,5,3,2,6], size = 6
// // Output: [[8,5,3,2,6]]
// // Explanation: Size is greater than arr.length thus all elements are in the first subarray.
// Example 4:

// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.

const chunk = (arr, size) => {
  if (arr.length === 0) return [];
  if (size > arr.length) return [arr];
  const ans = [];

  for (let i = 0; i < arr.length; i += size) {
    const slices = arr.slice(i, i + size);
    ans.push(slices);
  }
  return ans;
};

// console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([1, 2, 3, 4, 5], 6));
// console.log(chunk([1, 9, 6, 3, 2], 3));

// 352 => check if the number is fascinating

// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

// Example 1:

// Input: n = 192
// Output: true
// // Explanation: We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.
// Example 2:

// Input: n = 100
// Output: false
// Explanation: We concatenate the numbers n = 100 and 2 * n = 200 and 3 * n = 300. The resulting number is 100200300. This number does not satisfy any of the conditions.

const isFascinating = (n) => {
  const [multipyWith2, multipyWith3] = [2 * n, 3 * n];
  let concatenationAllNums = `${n}${multipyWith2}${multipyWith3}`;
  const sortIt = concatenationAllNums.split('').sort((a, b) => a - b);
  for (let i = 0; i < sortIt.length; i++) {
    if (i + 1 != sortIt[i]) {
      return false;
    }
  }
  return true;
};

// console.log(isFascinating(192));
// console.log(isFascinating(100));
// console.log(isFascinating(111));

// 353 => Find the Pivot Integer

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Example 1:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:

// Input: n = 1
// Output: 1
// // Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:

// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

const pivotIndex = (n) => {
  const newArr = new Array(n).fill(0).map((val, i) => i + 1);
  const totalSum = newArr.reduce((sum, current) => sum + current, 0);
  let currentSum = 0;

  for (let i = 0; i < newArr.length; i++) {
    const nextSum = totalSum - currentSum - newArr[i];
    if (currentSum === nextSum) {
      return newArr[i];
    }
    currentSum += newArr[i];
  }

  return -1;
};

// console.log(pivotIndex(8));

// 354 => Dailt Temperature

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

const dailyTemperatures = (nums) => {
  const answer = Array(nums.length).fill(0);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  return answer;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 40, 50, 60]));
// console.log(dailyTemperatures([30, 60, 90]));

// 355 => shifting letters

// You are given a string s of lowercase English letters and an integer array shifts of the same length.
// Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
// Return the final string after all such shifts to s are applied.

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.
// Example 2:

// Input: s = "aaa", shifts = [1,2,3]
// Output: "gfd"

function shiftingLetters(s, shifts) {
  const reverseArr = shifts.slice().reverse();
  const charCode = [];
  let sum = 0;

  for (let i = 0; i < reverseArr.length; i++) {
    sum += reverseArr[i];
    charCode.unshift(sum);
  }

  let makeShiftStr = '';

  for (let i = 0; i < charCode.length; i++) {
    const updateCharCode = ((s[i].charCodeAt(0) - 97 + charCode[i]) % 26) + 97;
    makeShiftStr += String.fromCharCode(updateCharCode);
  }

  return makeShiftStr;
}

// console.log(shiftingLetters('abc', [3, 5, 9])); // Output: "rpl"
// console.log(shiftingLetters('bad', [10, 20, 30])); // Output: "jyh"git

// 356 => Alternating Digit Sum

// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.
// Example 2:

// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.
// Example 3:

// Input: n = 886996
// Output: 0
// Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.

const alternatingDigitSum = (n) => {
  n = String(n).split('');

  let result = 0;

  for (let i = 0; i < n.length; i++) {
    if (i % 2 === 0) {
      result += +n[i];
    } else {
      result -= +n[i];
    }
  }
  return result;
};

// console.log(alternatingDigitSum(521));
// console.log(alternatingDigitSum(111));
// console.log(alternatingDigitSum(886996));

// 357 => count digit that divide a number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

const countDigits = (n) => {
  const digits = String(n).split('');
  let res = 0;

  for (let i = 0; i < digits.length; i++) {
    if (n % +digits[i] === 0) res++;
  }
  return res;
};

// console.log(countDigits(121));
// console.log(countDigits(1248));
// console.log(countDigits(7));

// 358 => Three Divisors

// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

// Example 1:

// Input: n = 2
// Output: false
// // Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4

const isThree = (n) => {
  const storeDivisors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      storeDivisors.push(i);
    }
  }
  return storeDivisors.length === 3 ? true : false;
};

// console.log(isThree(2));
// console.log(isThree(4));

// 359 => smallest Even Multiple

// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:

// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

const smallestEvenMultiple = (n) => {
  if (n % 2 === 0) {
    return n;
  } else {
    return n * 2;
  }
};

// console.log(smallestEvenMultiple(5));
// console.log(smallestEvenMultiple(6));

// 360 => Perfect Number

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false

const checkPerfectNumber = (n) => {
  let sumDivisors = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sumDivisors += i;
    }
  }
  return sumDivisors === n ? true : false;
};

// console.log(checkPerfectNumber(28));
// console.log(checkPerfectNumber(7));

// 361 => Find the Distinct Difference Array

// You are given a 0-indexed array nums of length n.

// The distinct difference array of nums is an array diff of length n such that diff[i] is equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1] subtracted from the number of distinct elements in the prefix nums[0, ..., i].

// Return the distinct difference array of nums.

// Note that nums[i, ..., j] denotes the subarray of nums starting at index i and ending at index j inclusive. Particularly, if i > j then nums[i, ..., j] denotes an empty subarray.

// Example 1:

// Input: nums = [1,2,3,4,5]
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

const distinctDifferenceArray = (nums) => {
  const difference = [];

  for (let i = 0; i < nums.length; i++) {
    const prefix = nums.slice(0, i + 1);
    const suffix = nums.slice(i + 1);
    const prefixSuffixDifference = new Set(prefix).size - new Set(suffix).size;
    difference.push(prefixSuffixDifference);
  }
  return difference;
};

// console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
// console.log(distinctDifferenceArray([3, 2, 3, 4, 2]));

// 362 => sum of good numbers

// Given an array of integers nums and an integer k, an element nums[i] is considered good if it is strictly greater than the elements at indices i - k and i + k (if those indices exist). If neither of these indices exists, nums[i] is still considered good.

// Return the sum of all the good elements in the array.

// Example 1:
// Input: nums = [1,3,2,1,5,4], k = 2
// Output: 12
// Explanation:
// The good numbers are nums[1] = 3, nums[4] = 5, and nums[5] = 4 because they are strictly greater than the numbers at indices i - k and i + k.

// Example 2:
// Input: nums = [2,1], k = 1
// Output: 2
// Explanation:
// The only good number is nums[0] = 2 because it is strictly greater than nums[1]

const sumOfGoodNumbers = (nums, k) => {
  let goodNumsSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let isGood = true;

    if (i - k >= 0 && nums[i] <= nums[i - k]) {
      isGood = false;
    }
    if (i + k < nums.length && nums[i] <= nums[i + k]) {
      isGood = false;
    }
    if (isGood) {
      goodNumsSum += nums[i];
    }
  }

  return goodNumsSum;
};

// console.log(sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2));

// 363 => Sum of Variable Length Subarrays

// You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray nums[start ... i] where start = max(0, i - nums[i]).

// Return the total sum of all elements from the subarray defined for each index in the array.

// Example 1:
// // Input: nums = [2,3,1]
// Output: 11
// Explanation:

// i	Subarray	Sum
// 0	nums[0] = [2]	2
// 1	nums[0 ... 1] = [2, 3]	5
// 2	nums[1 ... 2] = [3, 1]	4
// Total Sum	 	11
// The total sum is 11. Hence, 11 is the output.

// Example 2:
// // Input: nums = [3,1,1,2]
// Output: 13
// Explanation:

// i	Subarray	Sum
// 0	nums[0] = [3]	3
// 1	nums[0 ... 1] = [3, 1]	4
// 2	nums[1 ... 2] = [1, 1]	2
// 3	nums[1 ... 3] = [1, 1, 2]	4
// Total Sum	 	13
// The total sum is 13. Hence, 13 is the output.

const subarraySum = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);
    const subarrSum = nums
      .slice(start, i + 1)
      .reduce((sum, curr) => sum + curr, 0);
    sum += subarrSum;
  }

  return sum;
};

// console.log(subarraySum([2, 3, 1]));
// console.log(subarraySum([3, 1, 1, 2]));

// 364 => Minimum Number of Operations to Make Elements in Array Distinct

// You are given an integer array nums. You need to ensure that the elements in the array are distinct. To achieve this, you can perform the following operation any number of times:

// Remove 3 elements from the beginning of the array. If the array has fewer than 3 elements, remove all remaining elements.
// Note that an empty array is considered to have distinct elements. Return the minimum number of operations needed to make the elements in the array distinct.

// Example 1:
// Input: nums = [1,2,3,4,2,3,3,5,7]
// Output: 2
// Explanation:
// In the first operation, the first 3 elements are removed, resulting in the array [4, 2, 3, 3, 5, 7].
// In the second opeation, the next 3 elements are removed, resulting in the array [3, 5, 7], which has distinct elements.
// Therefore, the answer is 2.

// Example 2:
// // Input: nums = [4,5,6,4,4]
// Output: 2
// // Explanation:
// In the first operation, the first 3 elements are removed, resulting in the array [4, 4].
// In the second operation, all remaining elements are removed, resulting in an empty array.
// Therefore, the answer is 2.

// Example 3:
// // Input: nums = [6,7,8,9]
// Output: 0
// // Explanation:
// The array already contains distinct elements. Therefore, the answer is 0.

const minimumOperation = (nums) => {
  if (nums.length === 0) return [];
  let countOperation = 0;

  const isDuplicate = (arr) => {
    const sortedArr = arr.toSorted((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] === sortedArr[i + 1]) {
        return true;
      }
    }
    return false;
  };

  while (isDuplicate(nums)) {
    countOperation++;
    console.log(nums);
    nums.splice(0, 3);
  }
  return countOperation;
};

// console.log(minimumOperation([1, 2, 3, 4, 2, 3, 3, 5, 7]));
// console.log(minimumOperation([4, 5, 6, 4, 4]));
// console.log(minimumOperation([6, 7, 8, 9]));

// 365 => Transform Array by Parity

// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

// Example 1:
// Input: nums = [4,3,2,1]
// Output: [0,0,1,1]
// Explanation:

// Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
// After sorting nums in non-descending order, nums = [0, 0, 1, 1].
// Example 2:
// Input: nums = [1,5,1,4,2]
// Output: [0,0,1,1,1]
// Explanation:
// Replace the even numbers (4 and 2) with 0 and the odd numbers (1, 5 and 1) with 1. Now, nums = [1, 1, 1, 0, 0].
// After sorting nums in non-descending order, nums = [0, 0, 1, 1, 1].

const transformArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[i] = 0;
    } else {
      nums[i] = 1;
    }
  }
  return nums.sort((a, b) => a - b);
};

// console.log(transformArray([4, 3, 2, 1]));

// 366 =>  Count Partitions with Even Sum Difference

// You are given an integer array nums of length n.

// A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

// Left subarray contains indices [0, i].
// Right subarray contains indices [i + 1, n - 1].
// Return the number of partitions where the difference between the sum of the left and right subarrays is even.

// Example 1:
// // Input: nums = [10,10,3,7,6]
// Output: 4
// // Explanation:
// The 4 partitions are:

// [10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
// [10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
// [10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
// [10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
// Example 2:
// // Input: nums = [1,2,2]
// Output: 0
// // Explanation:
// No partition results in an even sum difference.

// Example 3:
// Input: nums = [2,4,6,8]
// Output: 3
// Explanation:
// All partitions result in an even sum difference

const countParitions = (nums) => {
  let countValidParitions = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const leftSum = nums
      .slice(0, i + 1)
      .reduce((sum, current) => sum + current, 0);
    const rightSum = nums
      .slice(i + 1)
      .reduce((sum, current) => sum + current, 0);
    const sumDifference = leftSum - rightSum;
    if (sumDifference % 2 === 0) {
      countValidParitions++;
    }
  }
  return countValidParitions;
};

// console.log(countParitions([10, 10, 3, 7, 6]));
// console.log(countParitions([1, 2, 2]));

// 367 =>  Maximum Difference Between Adjacent Elements in a Circular Array

// Given a circular array nums, find the maximum absolute difference between adjacent elements.
// Note: In a circular array, the first and last elements are adjacent.

// Example 1:
// Input: nums = [1,2,4]
// Output: 3
// Explanation:
// Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.

// Example 2:
// // Input: nums = [-5,-10,-5]
// Output: 5
// // Explanation:
// The adjacent elements nums[0] and nums[1] have the maximum absolute difference of |-5 - (-10)| = 5.

const maxAdjacentDistance = (nums) => {
  let difference = Math.abs(nums.at(-1) - nums[0]);

  for (let i = 0; i < nums.length; i++) {
    const pairDifference = Math.abs(nums[i] - nums[i + 1]);
    if (pairDifference > difference) {
      difference = pairDifference;
    }
  }
  return difference;
};

// console.log(maxAdjacentDistance([1, 2, 4]));
// console.log(maxAdjacentDistance([-5, -10, -5]));
// console.log(maxAdjacentDistance([2, 1, 0]));

// 368 => Ugly Number|||

// An ugly number is a positive integer that is divisible by a, b, or c.
// Given four integers n, a, b, and c, return the nth ugly number.

// Example 1:

// Input: n = 3, a = 2, b = 3, c = 5
// Output: 4
// Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
// Example 2:

// Input: n = 4, a = 2, b = 3, c = 4
// Output: 6
// // Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
// Example 3:

// Input: n = 5, a = 2, b = 11, c = 13
// Output: 10
// Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10

const nthUglyNumber = (n, a, b, c) => {
  let increament = 1;
  let count = 0;

  while (count !== n) {
    if (increament % a === 0 || increament % b === 0 || increament % c === 0) {
      count++;
    }
    if (count === n) break;
    increament++;
  }
  return increament;
};

// console.log(nthUglyNumber(3, 2, 3, 5)); // Output: 4
// console.log(nthUglyNumber(4, 2, 3, 4)); // Output: 6

// 367 => Add Two Integers

// Given two integers num1 and num2, return the sum of the two integers.

// Example 1:

// Input: num1 = 12, num2 = 5
// Output: 17
// // Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// Example 2:

// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.

const sum = (num1, num2) => {
  return num1 + num2;
};

// console.log(sum(12, 6));

// 368 =>  Partition Array According to Given Pivot

// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
// Return nums after the rearrangement.

// Example 1:

// Input: nums = [9,12,5,10,14,3,10], pivot = 10
// Output: [9,5,3,10,10,12,14]
// Explanation:
// The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
// The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
// The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
// Example 2:

// Input: nums = [-3,4,3,2], pivot = 2
// Output: [-3,2,4,3]
// Explanation:
// The element -3 is less than the pivot so it is on the left side of the array.
// The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
// The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.

const pivotArray = (nums, pivot) => {
  const lessThenPivot = [];
  const greatorThenPivot = [];
  const equalPivot = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lessThenPivot.push(nums[i]);
    } else if (nums[i] > pivot) {
      greatorThenPivot.push(nums[i]);
    } else {
      equalPivot.push(nums[i]);
    }
  }
  return [...lessThenPivot, ...equalPivot, ...greatorThenPivot];
};

// console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));

// 369 => Count Operations to Obtain Zero

// You are given two non-negative integers num1 and num2.

// In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.
// For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
// Return the number of operations required to make either num1 = 0 or num2 = 0.
//

// Example 1:

// Input: num1 = 2, num2 = 3
// Output: 3
// Explanation:
// - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
// - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
// Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
// So the total number of operations required is 3.
// Example 2:

// Input: num1 = 10, num2 = 10
// Output: 1
// Explanation:
// - Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.
// Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.
// So the total number of operations required is 1.

const countOperation = (nums1, nums2) => {
  if (nums1 === nums2) return 1;
  let count = 0;

  while (nums1 !== 0 && nums2 !== 0) {
    count++;
    if (nums1 >= nums2) {
      nums1 -= nums2;
    } else {
      nums2 -= nums1;
    }
  }

  return count;
};

// console.log(countOperation(2, 3));

// 370 => Count Integers With Even Digit Sum

//  Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

// Example 1:

// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.
// Example 2:

// Input: num = 30
// Output: 14
// Explanation:
// The 14 integers less than or equal to 30 whose digit sums are even are
// 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.

const countEven = (n) => {
  let countEvenNums = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    const inString = String(i).split('');
    for (let j = 0; j < inString.length; j++) {
      sum += +inString[j];
    }
    if (sum % 2 === 0) {
      countEvenNums++;
    }
  }
  return countEvenNums;
};

// console.log(countEven(30));
// console.log(countEven(4));

// 371 => Sum of Even Numbers After Queries

// You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

// For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

// Return an integer array answer where answer[i] is the answer to the ith query.

// Example 1:

// Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
// Output: [8,6,2,4]
// Explanation: At the beginning, the array is [1,2,3,4].
// After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
// After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
// After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
// After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
// Example 2:

// Input: nums = [1], queries = [[4,0]]
// Output: [0

const sumEvenAfterQueries = (nums, queries) => {
  const answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [val, ind] = queries[i];
    nums[ind] = nums[ind] + val;
    const evenSum = nums.reduce((s, current, j) => {
      if (nums[j] % 2 == 0) {
        s += nums[j];
      }
      return s;
    }, 0);

    answer.push(evenSum);
  }
  return answer;
};

// console.log(
//   sumEvenAfterQueries(
//     [1, 2, 3, 4],
//     [
//       [1, 0],
//       [-3, 1],
//       [-4, 0],
//       [2, 3],
//     ]
//   )
// );
