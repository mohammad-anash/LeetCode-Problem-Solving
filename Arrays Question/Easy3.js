// 168 => 1629. Slowest Key
// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.
// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.
// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].
// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.
// Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

// Example 1:

// Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
// Output: "c"
// Explanation: The keypresses were as follows:
// Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
// Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
// Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
// Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
// The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
// 'c' is lexicographically larger than 'b', so the answer is 'c'.
// Example 2:

// Input: releaseTimes = [12,23,36,46,62], keysPressed = "spuda"
// Output: "a"
// Explanation: The keypresses were as follows:
// Keypress for 's' had a duration of 12.
// Keypress for 'p' had a duration of 23 - 12 = 11.
// Keypress for 'u' had a duration of 36 - 23 = 13.
// Keypress for 'd' had a duration of 46 - 36 = 10.
// Keypress for 'a' had a duration of 62 - 46 = 16.
// // The longest of these was the keypress for 'a' with duration 16.

function slowestKeys(releaseTimes, keysPressed) {
  let [maxDuration, result] = [releaseTimes[0], keysPressed[0]];

  for (let i = 1; i < releaseTimes.length; i++) {
    let diff = releaseTimes[i] - releaseTimes[i - 1];
    if (
      diff > maxDuration ||
      (diff === maxDuration && keysPressed[i] > result)
    ) {
      maxDuration = diff;
      result = keysPressed[i];
    }
  }
  //   return result;
}

// console.log(slowestKeys([9, 29, 49, 50], "cbcd"));
// console.log(slowestKeys([12, 23, 36, 46, 62], "spuda"));

// 169 => Count Hill And Valley in The Array

function countHillsAndValley(nums) {
  let counter = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (
      (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) ||
      (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])
    ) {
      counter++;
    }
    console.log(
      nums[i] > nums[i - 1] && nums[i] > nums[i + 1],
      nums[i] < nums[i - 1] && nums[i] < nums[i + 1]
    );
  }
  return counter;
}

// console.log(countHillsAndValley([2, 4, 1, 1, 6, 5]));
// console.log(countHillsAndValley([6, 6, 5, 5, 4, 1]));
// console.log(countHillsAndValley([5, 7, 7, 1, 7]));

// 170 => Searh insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    const sortedArr = nums.sort((a, b) => a - b);
    return sortedArr.indexOf(target);
  }
}

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));

// 171 => Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// // Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

function plusOne(nums) {
  let sum = BigInt(nums.join("")) + 1n;
  return sum.toString().split("");
}

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// Move Zero Th The End Of the Array
// Second Time Solve

function moveZeroes(nums) {
  const [nonZero, zero] = [
    nums.filter((val) => val !== 0),
    nums.filter((val) => val === 0),
  ];

  for (let i = 0; i < nonZero.length; i++) {
    nums[i] = nonZero[i];
  }
  for (let i = nonZero.length; i < nonZero.length + zero.length; i++) {
    nums[i] = zero[i - nonZero.length];
  }

  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0]));

// 172 => Minimum Common Value

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

function getCommon(nums1, nums2) {
  let [i, j] = [0, 0];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) return nums1[i];
    else if (nums1[i] > nums2[j]) j++;
    else i++;
  }
  return -1;
}

// console.log(getCommon([1, 2, 3], [2, 4]));
// console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));

// 173 => Shortest Completing Words

// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
//
// // // A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
//
// // Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

// Example 1:

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.
// Example 2:

// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

function shortestCompletingWords(char, words) {
  let fixLicense = char.toLowerCase().replace(/[\d\s]/g, "");
  let sortWords = [...words].sort((a, b) => a.length - b.length);

  for (let word of sortWords) {
    let copyLicense = fixLicense;

    for (let i = 0; i < word.length; i++) {
      copyLicense = copyLicense.replace(word[i], "");
      if (!copyLicense) return word;
    }
  }
}

// console.log(
//   shortestCompletingWords("1s3 PSt", ["step", "steps", "stripe", "stepple"])
// );
// console.log(
//   shortestCompletingWords("1s3 456", ["looks", "pest", "stew", "show"])
// );

// 174 => Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

function getFrequency(arr) {
  const freq = {};
  arr.forEach((num) => {
    if (freq[num]) freq[num]++;
    else freq[num] = 1;
  });
  return freq;
}

function intersect(nums1, nums2) {
  const freq1 = getFrequency(nums1);
  const freq2 = getFrequency(nums2);
  const result = [];

  for (let num in freq1) {
    if (freq2[num]) {
      const minFreq = Math.min(freq1[num], freq2[num]);
      for (let i = 0; i < minFreq; i++) {
        result.push(Number(num));
      }
    }
  }
  return result;
}

// console.log(intersect([1, 2, 2, 1], [2, 2])); // Output: [2, 2]
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9] or [9, 4]

// 175 => Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  const getZeros = flowerbed.filter((val) => val === 0);

  for (let i = 1; i <= n; i++) {
    if (i >= 1) getZeros[i] = i;
    else getZeros[i] = 0;
  }

  console.log(getZeros);
  return getZeros[n + 1] !== 0 ? false : true;
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));

// 176 => Find The Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

function pivotIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    const rightVal = nums
      .slice(i + 1)
      .reduce((acc, current) => acc + current, 0);
    const leftVal = nums.slice(0, i).reduce((acc, current) => acc + current, 0);

    if (rightVal === leftVal) return i;
  }
  return -1;
}

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));

// 177 => Minimum Index Sum of Two Lists

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

function findRestaurant(list1, list2) {
  const result = [];
  let minSum = Infinity;

  // Iterate through both lists to find common strings
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        const sum = i + j;
        if (sum < minSum) {
          minSum = sum;
          result.length = 0; // Clear the result array for a new minimum sum
          result.push(list1[i]);
        } else if (sum === minSum) {
          result.push(list1[i]);
        }
      }
    }
  }

  return result;
}

// console.log(
//   findRestaurant(
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"],
//     [
//       "Piatti",
//       "The Grill at Torrey Pines",
//       "Hungry Hunter Steakhouse",
//       "Shogun",
//     ]
//   )
// ); // Output: ["Shogun"]

// console.log(
//   findRestaurant(
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"],
//     ["KFC", "Shogun", "Burger King"]
//   )
// ); // Output: ["Shogun"]

// console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); // Output: ["sad", "happy"]

// 178 => Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) if (i - map.get(nums[i]) <= k) return true;
    map.set(nums[i], i);
  }

  return false;
}

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// 179 => Number of Distinct Averages

// You are given a 0-indexed integer array nums of even length.
// As long as nums is not empty, you must repetitively:
// Find the minimum number in nums and remove it.
// Find the maximum number in nums and remove it.
// Calculate the average of the two removed numbers.
// The average of two numbers a and b is (a + b) / 2.
// For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
// Return the number of distinct averages calculated using the above process.
// Note that when there is a tie for a minimum or maximum number, any can be removed.

// Example 1:

// Input: nums = [4,1,4,0,3,5]
// Output: 2
// Explanation:
// // // // 1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
// // // // 2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
// // // 3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
// // Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.
// Example 2:

// Input: nums = [1,100]
// Output: 1
// Explanation:
// There is only one average to be calculated after removing 1 and 100, so we return 1.

function distinctAverage(nums) {
  nums = nums.sort((a, b) => a - b);
  const average = [];

  while (nums.length > 0) {
    const [max, min] = [nums[0], nums[nums.length - 1]];

    const getAverage = (max + min) / 2;
    average.push(getAverage);

    nums = nums.slice(1, nums.length - 1);
  }
  const removeDups = new Set(average);
  return removeDups.size;
}

// console.log(distinctAverage([4, 1, 4, 0, 3, 5]));
// console.log(distinctAverage([1, 100]));

// 180 => Rearrange Array Elements by Sign

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// // // The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// // The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

function rearrangeArray(nums) {
  const [positive, negative] = [
    nums.filter((val) => val >= 0),
    nums.filter((val) => val < 0),
  ];
  const result = [];

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }

  // return result;
}

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArray([-1, 1]));

// 181 => Duplicate Zeroes

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// // Output: [1,0,0,2,3,0,0,4]
// // Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
}

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
// console.log(duplicateZeros([1, 2, 3]));

// 182 => // Max Pair Sum in an Array

// You are given an integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the largest digit in both numbers is equal.
// For example, 2373 is made up of three distinct digits: 2, 3, and 7, where 7 is the largest among them.
// Return the maximum sum or -1 if no such pair exists.

// Example 1:
// Input: nums = [112,131,411]
// Output: -1
// Explanation:

// Each numbers largest digit in order is [2,3,4].
// Example 2:
// Input: nums = [2536,1613,3366,162]
// Output: 5902
// Explanation:

// All the numbers have 6 as their largest digit, so the answer is 2536 + 3366 = 5902.

// // Exmple 3:
// Input: nums = [51,71,17,24,42]
// Output: 88
// Explanation:
// Each number's largest digit in order is [5,7,7,4,4].
// So we have only two possible pairs, 71 + 17 = 88 and 24 + 42 = 66.

function maxSum(nums) {
  const [maxNums, allSum] = [[], []];

  nums.forEach((element, i) => {
    const findMax = element.toString().split("");
    const inDigit = findMax.map((digit) => parseInt(digit));
    maxNums.push(Math.max(...inDigit));
  });

  for (let i = 0; i < maxNums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < maxNums.length; j++) {
      if (maxNums[i] === maxNums[j]) sum = nums[i] + nums[j];
      allSum.push(sum);
    }
  }
  return Math.max(...allSum) === 0 ? -1 : Math.max(...allSum);
}

// console.log(maxSum([112, 131, 411]));
// console.log(maxSum([2536, 1613, 3366, 162]));
// console.log(maxSum([51, 71, 17, 24, 42]));

// 183 => Third Maximum

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// // The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

function thirdMax(nums) {
  nums = [...new Set(nums)].sort((a, b) => a - b);
  return nums.at(-3) !== undefined ? nums.at(-3) : Math.max(...nums);
}

// console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([2, 2, 3, 1]));

// 184 => Find the Sum of Encrypted Integers

// You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

// Return the sum of encrypted elements.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6
// Explanation: The encrypted elements are [1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.
// Example 2:

// Input: nums = [10,21,31]
// Output: 66
// Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.

function sumOfIncryptedInt(nums) {
  let sum = 0;

  nums.forEach((num) => {
    const inString = num.toString();
    const breakNum = inString.split("");
    const maxDigit = Math.max(...breakNum);
    sum += Number(String(maxDigit).repeat(inString.length));
  });
  // return sum;
}

// console.log(sumOfIncryptedInt([1, 2, 3]));
// console.log(sumOfIncryptedInt([10, 21, 31]));

// Other Approch

function sumOfIncryptedInt(nums) {
  return nums.reduce((acc, current) => {
    const inString = String(current);
    acc += +String(Math.max(...inString.split(""))).repeat(inString.length);
    return acc;
  }, 0);
}

// console.log(sumOfIncryptedInt([1, 2, 3]));
// console.log(sumOfIncryptedInt([10, 21, 31]));

// 185 => Split the Array

// You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:

// nums1.length == nums2.length == nums.length / 2.
// nums1 should contain distinct elements.
// nums2 should also contain distinct elements.
// Return true if it is possible to split the array, and false otherwise.

// Example 1:

// Input: nums = [1,1,2,2,3,4]
// Output: true
// Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].
// Example 2:

// Input: nums = [1,1,1,1]
// Output: false
// Explanation: The only possible way to split nums is nums1 = [1,1] and nums2 = [1,1]. Both nums1 and nums2 do not contain distinct elements. Therefore, we return false.

function isPossibleToSplit(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] == nums[i + 2]) return false;
  }
  return true;
}

// console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
// console.log(isPossibleToSplit([1, 1, 1, 1]));
// console.log(isPossibleToSplit([3, 9, 5, 2, 7, 9, 8, 5]));
// console.log(isPossibleToSplit([4, 3]));
// console.log(isPossibleToSplit([6, 1, 3, 1, 1, 8, 9, 2]));

// 186 =>  Find Resultant Array After Removing Anagrams

// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

// Example 1:

// Input: words = ["abba","baba","bbaa","cd","cd"]
// Output: ["abba","cd"]
// Explanation:
// One of the ways we can obtain the resultant array is by using the following operations:
// // - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
// // // Now words = ["abba","baba","cd","cd"].
// // // - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
// // // Now words = ["abba","cd","cd"].
// // // - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
// // Now words = ["abba","cd"].
// // We can no longer perform any operations, so ["abba","cd"] is the final answer.
// Example 2:

// Input: words = ["a","b","c","d","e"]
// Output: ["a","b","c","d","e"]
// Explanation:
// No two adjacent strings in words are anagrams of each other, so no operations are performed.

function removeAnagram(words) {
  for (let i = 1; i < words.length; ) {
    const [countWord, prevWord] = [
      words[i].split("").sort().join(),
      words[i - 1].split("").sort().join(),
    ];
    countWord === prevWord ? words.splice(i, 1) : i++;
  }

  return words;
}

// console.log(removeAnagram(["abba", "baba", "bbaa", "cd", "cd"]));
// console.log(removeAnagram(["a", "b", "c", "d", "e"]));
// console.log(removeAnagram(["a", "b", "a"]));

// 187 => Most Frequent Number Following Key In an Array

// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// // Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

// Example 1:

// Input: nums = [1,100,200,1,100], key = 1
// Output: 100
// Explanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.
// No other integers follow an occurrence of key, so we return 100.
// Example 2:

// Input: nums = [2,2,2,2,3], key = 2
// Output: 2
// Explanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.
// For target = 3, there is only one occurrence at index 4 which follows an occurrence of key.
// target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.

function mostFrequent(nums, k) {
  const updateArr = nums.slice(nums.indexOf(k) + 1);

  let obj = {};
  updateArr.forEach((num) => {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  });

  if (updateArr.length === 1) return updateArr[0];

  for (const [keys, value] of Object.entries(obj)) if (value >= 2) return +keys;
}

// console.log(mostFrequent([1, 100, 200, 1, 100], 1));
// console.log(mostFrequent([2, 2, 2, 2, 3], 2));
// console.log(mostFrequent([1, 1000, 2], 1000));

// 188 => Maximum Number of Pairs in Array

// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Example 1:
//
// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
// Example 2:

// Input: nums = [1,1]
// Output: [1,0]
// // // Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// // No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
// Example 3:

// Input: nums = [0]
// Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.

function numberOfPair(nums) {
  nums = nums.sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      counter++;
      nums.splice(i, 2);
      i--;
    }
  }
  return [counter, nums.length];
}

// console.log(numberOfPair([1, 3, 2, 1, 3, 2, 2]));
// console.log(numberOfPair([1, 1]));
// console.log(numberOfPair([0]));

// Other Approch

function numberOfPair(nums) {
  nums = nums.sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums = nums.slice(0, i).concat(nums.slice(i + 2));
      counter++;
      i--;
    }
  }
  return [counter, nums.length];
}

// console.log(numberOfPair([1, 3, 2, 1, 3, 2, 2]));
// console.log(numberOfPair([1, 1]));
// console.log(numberOfPair([0]));

// 189 =>  Minimum Operations to Collect Elements

// You are given an array nums of positive integers and an integer k.
// // In one operation, you can remove the last element of the array and add it to your collection.
// Return the minimum number of operations needed to collect elements 1, 2, ..., k.

// Example 1:

// Input: nums = [3,1,5,4,2], k = 2
// Output: 4
// Explanation: After 4 operations, we collect elements 2, 4, 5, and 1, in this order. Our collection contains elements 1 and 2. Hence, the answer is 4.
// Example 2:

// Input: nums = [3,1,5,4,2], k = 5
// Output: 5
// // Explanation: After 5 operations, we collect elements 2, 4, 5, 1, and 3, in this order. Our collection contains elements 1 through 5. Hence, the answer is 5.
// Example 3:

// Input: nums = [3,2,5,3,1], k = 3
// Output: 4
// Explanation: After 4 operations, we collect elements 1, 3, 5, and 2, in this order. Our collection contains elements 1 through 3. Hence, the answer is 4.

function minOperation(nums, k) {
  const [collection, compareArr] = [[], []];
  for (let i = 1; i <= k; i++) compareArr.push(i);

  let counter = 0;
  nums.forEach((element) => {
    collection.push(nums.pop());
    collection.sort((a, b) => a - b);

    if (compareArr === collection) counter++;
  });
  return counter;
}

// console.log(minOperation([3, 1, 5, 4, 2], 2));
// console.log(minOperation([3, 1, 5, 4, 2], 5));
// console.log(minOperation([3, 2, 5, 3, 1], 3));

// 190 => Maximum Difference Between Increasing Elements

// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

// Example 1:

// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// // The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// // Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
// Example 2:

// Input: nums = [9,4,3,2]
// Output: -1
// Explanation:
// // There is no i and j such that i < j and nums[i] < nums[j].
// Example 3:

// Input: nums = [1,5,2,10]
// Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.

function maximumDiffrence(nums) {
  const diff = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i < j && nums[i] < nums[j]) {
        diff.push(Math.abs(nums[j] - nums[i]));
      }
    }
  }
  return Math.max(...diff) === -Infinity ? -1 : Math.max(...diff);
}

// console.log(maximumDiffrence([7, 1, 5, 4]));
// console.log(maximumDiffrence([9, 4, 3, 2]));
// console.log(maximumDiffrence([1, 5, 2, 10]));

// 191 => merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

function merge(nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  return nums1;
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

// 192 => Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// // Output: [-1]
// Explanation: There are no elements to the right of index 0.

function replaceElement(arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = max;
    if (current > max) max = current;
  }

  // return arr;
}

// console.log(replaceElement([17, 18, 5, 4, 6, 1]));
// console.log(replaceElement([400]));

// Other Approch

function replaceElement(nums) {
  nums.reduceRight((max, current, index, arr) => {
    const currentElement = current;
    arr[index] = max;
    return Math.max(max, currentElement);
  }, -1);
  return nums;
}

// console.log(replaceElement([17, 18, 5, 4, 6, 1]));
// console.log(replaceElement([400]));

// 193 =>  Average Value of Even Numbers That Are Divisible by Three
// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

// Example 1:

// Input: nums = [1,3,6,10,12,15]
// Output: 9
// // Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
// Example 2:

// Input: nums = [1,2,4,7,10]
// Output: 0
// Explanation: There is no single number that satisfies the requirement, so

function averageValue(nums) {
  let [counter, sum] = [0, 0];
  for (const num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      counter++;
    }
  }

  if (sum !== 0) return Math.floor(sum / counter);
  else return sum;
}

// console.log(averageValue([1, 3, 6, 10, 12, 15]));
// console.log(averageValue([1, 2, 4, 7, 10]));
// console.log(averageValue([9, 3, 8, 4, 2, 5, 3, 8, 6, 1]));
// console.log(
//   averageValue([
//     94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
//     3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
//   ])
// );

// Other Approch

function averageValue(nums) {
  const result = nums.reduce(
    (acc, current) => {
      if (current % 2 === 0 && current % 3 === 0) {
        acc.sum += current;
        acc.evenNum++;
      }
      return acc;
    },
    { sum: 0, evenNum: 0 }
  );

  if (result.evenNum !== 0) return Math.floor(result.sum / result.evenNum);
  else return 0;
}

// console.log(averageValue([1, 3, 6, 10, 12, 15]));
// console.log(averageValue([1, 2, 4, 7, 10]));
// console.log(averageValue([9, 3, 8, 4, 2, 5, 3, 8, 6, 1]));
// console.log(
//   averageValue([
//     94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84,
//     3, 79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
//   ])
// );\

// 194 => Subarray Product Less Than K

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

function numSubArrayProductLessThenK(nums, k) {
  let counter = 0;

  let product;
  for (let i = 0; i < nums.length; i++) {
    product = 0;
    for (let j = i + 1; j <= nums.length; j++) {
      product = nums.slice(i, j).reduce((acc, current) => acc * current);
      if (product < k) counter++;
    }
  }
  return counter;
}

// console.log(numSubArrayProductLessThenK([10, 5, 2, 6], 100));
// console.log(numSubArrayProductLessThenK([1, 2, 3], 0));

// 195 => Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// function searchRange(nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)];
// }

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));

// second brute force solution

function searchRange(nums, target) {
  let [first, last] = [-1, -1];

  nums.forEach((current, i) => {
    if (current === target) {
      if (first === -1) first = i;
      last = i;
    }
  });

  return [first, last];
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));
// console.log(searchRange([1], 1));

// 196 => Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

function search(nums, target) {
  return nums.indexOf(target);
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));

// Other Approch

function search(nums, target) {
  return nums.findIndex((val) => val === target);
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));

// 197 => Search in Rotated Sorted Array II

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

function search(nums, target) {
  return nums.findIndex((val) => val === target) !== -1 ? true : false;
}

// console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3));

// 198 => Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// // Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// // Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

function findMin(nums) {
  return Math.min(...nums);
}

// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));

// Other Approch

function findMin(nums) {
  return nums.toSorted((a, b) => a - b)[0];
}

// console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMin([11, 13, 15, 17]));
// console.log(findMin([266,267,268,269,271,278,282,292,293,298,6,9,15,19,21,26,33,35,37,38,39,46,49,54,65,71,74,77,79,82,83,88,92,93,94,97,104,108,114,115,117,122,123,127,128,129,134,137,141,142,144,147,150,154,160,163,166,169,172,173,177,180,183,184,188,198,203,208,210,214,218,220,223,224,233,236,241,243,253,256,257,262,263]));

// 199 => Single Element in a Sorted Array

// You are givena sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

function singleNonDuplicate(nums) {
  let [left, right] = [0, nums.length - 1];

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (mid % 2 === 1) mid--;

    if (nums[mid] === nums[mid + 1]) left = mid + 2;
    else right = mid;
  }

  return nums[left];
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Output: 2
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // Output: 10
// console.log(singleNonDuplicate([1])); // Output: 1
// console.log(singleNonDuplicate([1, 1, 2])); // Output: 2

// 200 => Add to Array-Form of Integer

// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// // Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

function addToArrayForm(nums, k) {
  let numBigInt = BigInt(nums.join(""));
  let sumBigInt = numBigInt + BigInt(k);
  return Array.from(String(sumBigInt), (digit) => Number(digit));
}

// Testing the function with provided examples
// console.log(addToArrayForm([1, 2, 0, 0], 34)); // Output: [1, 2, 3, 4]
// console.log(addToArrayForm([2, 7, 4], 181)); // Output: [4, 5, 5]
// console.log(addToArrayForm([2, 1, 5], 806)); // Output: [1, 0, 2, 1]
// console.log(
//   addToArrayForm(
//     [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
//     516
//   )
// );

// 201 => Square root of a number

// Given an integer n, find the square root of n. If n is not a perfect square, then return the floor value.

// Input: n = 5
// Output: 2
// Explanation: Since, 5 is not a perfect square, floor of square_root of 5 is 2.

// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.

// function findSquareRoot(n) {
//   let ans;

//   for (let i = 1; i <= n; i++) {
//     if (i * i <= n) ans = i;
//     else break;
//   }
//   // return ans;
// }

// console.log(findSquareRoot(5));
// console.log(findSquareRoot(4));

// Other Approch

function findSquareRoot(n) {
  let low = 1;
  let high = n;
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid <= n) {
      ans = mid;
      low = mid + 1; // Increment low to mid + 1
    } else {
      high = mid - 1; // Adjust high to mid - 1
    }
  }
  return ans;
}

// console.log(findSquareRoot(5)); // Output will be 2
// console.log(findSquareRoot(4)); // Output will be 2

// 202 => Find Nth root of M

// You are given 2 numbers (n , m); the task is to find n√m (nth root of m).

// Example 1:

// Input: n = 2, m = 9
// Output: 3
// Explanation: 32 = 9
// Example 2:

// Input: n = 3, m = 9
// Output: -1
// Explanation: 3rd root of 9 is not
// integer.

function nthSquareRoot(m, n) {
  let [low, high, ans] = [1, n, 0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let product = 1;

    for (let i = 1; i <= m; i++) product *= mid;

    if (product > n) {
      high = mid - 1;
    } else {
      ans = mid;
      low = mid + 1;
    }
  }

  if (Math.pow(ans, m) === n) return ans;
  else return -1;
}

// console.log(nthSquareRoot(4, 6)); // Output should be -1 (since the 4th root of 6 does not exist as an integer)
// console.log(nthSquareRoot(2, 9)); // Output should be 3 (since the square root of 9 is 3)

// 203 => Find the Smallest Divisor Given a Threshold

// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// The test cases are generated so that there will be an answer.

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44

// solution with linear search

function smallestDivisor(nums, thresold) {
  for (let i = 1; i <= Math.max(...nums); i++) {
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += Math.ceil(nums[j] / i);
    }

    if (sum <= thresold) return i;
  }
  return -1;
}

// console.log(smallestDivisor([1, 2, 5, 9], 6));
// console.log(smallestDivisor([44, 22, 33, 11, 1], 5));

// Solve with binary search

function smallestDivisor(nums, threshold) {
  let [low, max, ans] = [1, Math.max(...nums), -1];

  while (low <= max) {
    let mid = Math.ceil((low + max) / 2);
    let sum = nums.reduce((sum, current) => sum + Math.ceil(current / mid), 0);

    if (sum <= threshold) {
      ans = mid;
      max = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

// console.log(smallestDivisor([1, 2, 5, 9], 6));
// console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
// console.log(smallestDivisor([21212, 10101, 12121], 1000000));

// 204 => Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// // Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

function findKthPositive(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= k) k++;
    else break;
  }

  return k;
}

// console.log(findKthPositive([2, 3, 4, 7, 11], 5));
// console.log(findKthPositive([1, 2, 3, 4], 2));
// console.log(findKthPositive([1, 2], 1));

// 205 => Row with max 1s

// You are given a 2D array consisting of only 1's and 0's, where each row is sorted in non-decreasing order. You need to find and return the index of the first row that has the most number of 1s. If no such row exists, return -1.
// Note: 0-based indexing is followed.

// Examples:

// Input: arr[][] = [[0, 1, 1, 1],
//  [0, 0, 1, 1],
//  [1, 1, 1, 1],
//  [0, 0, 0, 0]]
// Output: 2
// Explanation: Row 2 contains 4 1's.
// Input: arr[][] = [[0, 0],
//  [1, 1]]
// Output: 1
// Explanation: Row 1 contains 2 1's.

function findMaxOnesRow(nums) {
  let maxOnes = 0;
  let comp = 0;
  let ans;

  for (let i = 0; i < nums.length; i++) {
    maxOnes = 0;

    nums[i].forEach((digits) => {
      if (digits === 1) maxOnes++;
    });
    if (maxOnes > comp) {
      comp = maxOnes;
      ans = i;
    }
  }
  return ans;
}

// console.log(
//   findMaxOnesRow([
//     [0, 1, 1, 1],
//     [0, 0, 1, 1],
//     [1, 1, 1, 1],
//     [0, 0, 0, 0],
//   ])
// );

// console.log(
//   findMaxOnesRow([
//     [0, 1, 1],
//     [1, 1, 1],
//   ])
// );

// Other Approch

function findMaxOnesRow(nums) {
  let ans = 0;
  let comp = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    ans = nums[i].reduce((acc, current) => acc + current, 0);

    if (ans > comp) {
      comp = ans;
      res = i;
    }
  }
  return res;
}

// console.log(
//   findMaxOnesRow([
//     [0, 1, 1, 1],
//     [0, 0, 1, 1],
//     [1, 1, 1, 1],
//     [0, 0, 0, 0],
//   ])
// );

// console.log(
//   findMaxOnesRow([
//     [0, 1, 1],
//     [1, 1, 1],
//   ])
// )

// 206 => Search a 2D Matrix - LeetCode

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

function searchMatrix(mat, tar) {
  for (let i = 0; i < mat.length - 1; i++) {
    for (let j = i; j < mat.length; j++) {
      if (mat[i][j] === tar) return true;
    }
  }
  return false;
}

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// );

// solve with binary search
function searchMatrix(mat, tar) {
  const oneDarr = mat.flat(Infinity);
  let [low, high] = [0, oneDarr.length - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (oneDarr[mid] === tar) return true;
    else if (oneDarr[mid] < tar) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}

// console.log(
//   searchMatr
//   ix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// );

// 207 => Search a 2D Matrix II

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false
function searchElement(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let row = 0;
  let col = m - 1;

  while (row < n && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) row++;
    else col--;
  }
  return false;
}

// console.log(
//   searchMatrix(
//     [
//       [1, 4, 7, 11, 15],
//       [2, 5, 8, 12, 19],
//       [3, 6, 9, 16, 22],
//       [10, 13, 14, 17, 24],
//       [18, 21, 23, 26, 30],
//     ],
//     5
//   )
// );
// console.log(
//   searchMatrix(
//     [
//       [1, 4, 7, 11, 15],
//       [2, 5, 8, 12, 19],
//       [3, 6, 9, 16, 22],
//       [10, 13, 14, 17, 24],
//       [18, 21, 23, 26, 30],
//     ],
//     20
//   )
// );

// 208 => Kth Smallest Element in a Sorted Matrix

// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: (matrix = [[-5]], k = 1
// Output: -5

function kthSmallest(mat, k) {
  const inOneArr = mat.flat(Infinity);
  return inOneArr[k - 1];
}

// console.log(
//   kthSmallest(
//     [
//       [1, 5, 9],
//       [10, 11, 13],
//       [12, 13, 15],
//     ],
//     8
//   )
// );
// console.log(kthSmallest([[-5]], 1));

// 209 => Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

function majorityElement(nums) {
  const n = nums.length;
  const list = [];
  const map = new Map();
  const mini = Math.floor(n / 3) + 1;

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);

    if (map.get(nums[i]) == mini) list.push(nums[i]);

    if (list.length == 2) break;
  }

  return list;
}

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([1]));
// console.log(majorityElement([1, 2]));

// 209 => Largest subarray with 0 sum

// Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

// Input: arr[] = {15,-2,2,-8,1,7,10,23}, n = 8
// Output: 5
// Explanation: The largest subarray with sum 0 is -2 2 -8 1 7.

// Input: arr[] = {2,10,4}, n = 3
// Output: 0
// Explanation: There is no subarray with 0 sum.

// Input: arr[] = {1, 0, -4, 3, 1, 0}, n = 6
// Output: 5

function longestSubArr(nums) {
  const storeSumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums.slice(i, j).reduce((acc, current) => acc + current, 0) === 0) {
        storeSumArr.push(nums.slice(i, j).length);
      }
    }
  }
  return Math.max(...storeSumArr) === -Infinity ? 0 : Math.max(...storeSumArr);
}

// console.log(longestSubArr([15, -2, 2, -8, 1, 7, 10, 23]));
// console.log(longestSubArr([2, 10, 4]));
// console.log(longestSubArr([1, 0, -4, 3, 1, 0]));

function longestSubArr(nums) {
  let [maxLength, sum] = [0, 0];

  const sumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === 0) maxLength = i + 1;
    else if (sumMap.has(sum)) {
      maxLength = Math.max(maxLength, i - sumMap.get(sum));
    } else sumMap.set(sum, i);
  }

  return maxLength;
}

// console.log(longestSubArr([15, -2, 2, -8, 1, 7, 10, 23]));
// console.log(longestSubArr([2, 10, 4]));
// console.log(longestSubArr([1, 0, -4, 3, 1, 0]));

// 210 =>  Maximum Product Subarray

// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProduct(nums) {
  let [pre, suff, ans] = [1, 1, Number.MIN_SAFE_INTEGER];

  for (let i = 0; i < nums.length; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;

    pre *= nums[i];
    suff *= nums[nums.length - i - 1];

    ans = Math.max(ans, Math.max(pre, suff));
  }
  return ans;
}

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2]));
// console.log(maxProduct([0, 2]));
