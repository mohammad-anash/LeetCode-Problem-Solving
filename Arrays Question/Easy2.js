// 111 =>  find the distance value between two arrays

// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// Example 1:

// Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
// Output: 2
// Explanation:
// For arr1[0]=4 we have:
// |4-10|=6 > d=2
// |4-9|=5 > d=2 /
// |4-1|=3 > d=2
// |4-8|=4 > d=2
// For arr1[1]=5 we have:
// |5-10|=5 > d=2
// |5-9|=4 > d=2
// |5-1|=4 > d=2
// |5-8|=3 > d=2
// For arr1[2]=8 we have:
// |8-10|=2 <= d=2
// |8-9|=1 <= d=2
// |8-1|=7 > d=2
// |8-8|=0 <= d=2
// Example 2:
//
// Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
// Output: 2
// Example 3:

// Input: (arr1 = [2, 1, 100, 3]), (arr2 = [-5, -2, 10, -3, 7]), (d = 6);
// Output: 1;

function findTheDistanceValue(arr1, arr2, d) {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      result++;
    }
  }

  return result;
}

// console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
// console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));
// console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));

// 112 => Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
  const n = Math.floor(nums.length / 2);
  let set = {};

  nums.forEach((element) => {
    if (set[element]) set[element]++;
    else set[element] = 1;
  });

  for (const keys in set) {
    if (set[keys] > n) return Number(keys);
  }
}

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// 113 => mean of array after removing some element

function trimMean(arr) {
  arr = arr.sort((a, b) => a - b);
  const n = arr.length;
  const removeCount = Math.floor(n * 0.05); // 5% elements to remove
  const updatedArr = arr.slice(removeCount, n - removeCount);

  let sum = 0;
  for (let i = 0; i < updatedArr.length; i++) {
    sum += updatedArr[i];
  }
  const mean = sum / updatedArr.length;
  return mean;
}

// console.log(
//   trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
// );

// console.log(
//   trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0])
// );

// 114 => intersection of multiple array

// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

function intersection(arr) {
  const n = arr.length;
  const falttenArr = arr.flat();
  let obj = {};

  falttenArr.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  let result = [];
  for (const keys in obj) {
    if (obj[keys] >= n) {
      result.push(+keys);
    }
  }
  return result;
}

// console.log(
//   intersection([
//     [3, 1, 2, 4, 5],
//     [1, 2, 3, 4],
//     [3, 4, 5, 6],
//   ])
// );

// console.log(
//   intersection([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// Second Way

function intersection(arr) {
  let obj = {};

  arr.flat().forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  return Object.keys(obj)
    .filter((val) => obj[val] >= arr.length)
    .map(Number);
}

// console.log(
//   intersection([
//     [3, 1, 2, 4, 5],
//     [1, 2, 3, 4],
//     [3, 4, 5, 6],
//   ])
// );

// console.log(
//   intersection([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// Third Way

function intersection(arr) {
  return arr.reduce((acc, subarr) => acc.filter((val) => subarr.includes(val)));
}

// console.log(
//   intersection([
//     [3, 1, 2, 4, 5],
//     [1, 2, 3, 4],
//     [3, 4, 5, 6],
//   ])
// );

// console.log(
//   intersection([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// );

// 115 => distribute candies

// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Example 1:

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
// Example 2:

// Input: candyType = [1,1,2,3]
// Output: 2/
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
// Example 3:

// Input: candyType = [6,6,6,6]
// Output: 1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

function distributeCandies(nums) {
  return Math.min(Array.from(new Set(nums)).length, nums.length / 2);
}

// console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
// console.log(distributeCandies([1, 1, 2, 3]));
// console.log(distributeCandies([6, 6, 6, 6]));
// console.log(distributeCandies([1, 1, 1, 2, 2, 2, 3, 3, 3]));

// 116 => fine the middle Index

// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
//
// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

// Example 1:

// Input: nums = [2,3,-1,8,4]
// Output: 3/
// Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4
// Example 2:

// Input: nums = [1,-1,4]
// Output: 2
// Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
// The sum of the numbers after index 2 is: 0
// Example 3:

// Input: nums = [2,5]
// Output: -1
// Explanation: There is no valid middleIndex.

function findMiddleIndex(arr) {
  let totalSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

// console.log(findMiddleIndex([2, 3, -1, 8, 4])); // Output: 3
// console.log(findMiddleIndex([1, -1, 4])); // Output: 2
// console.log(findMiddleIndex([2, 5])); // Output: -1

// 117 => app operation to an array

// You are given a 0-indexed array nums of size n consisting of non-negative integers.

// You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:

// If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
// After performing all the operations, shift all the 0's to the end of the array.

// For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
// Return the resulting array.

// Note that the operations are applied sequentially, not all at once.

// Example 1:

// Input: nums = [1,2,2,1,1,0]
// Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
// - i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// - i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// - i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// - i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// - i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
// After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].
// Example 2:

// Input: nums = [0,1]
// Output: [1,0]
// Explanation: No operation can be applied, we just shift the 0 to the end.

function applyOperation(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = nums[i + 1] = 0;
    }
  }
  const collectZero = nums.filter((val) => val === 0);
  const collectNonZero = nums.filter((val) => val !== 0);

  return [...collectNonZero, ...collectZero];
}

console.log(applyOperation([1, 2, 2, 1, 1, 0]));
console.log(applyOperation([0, 1]));
