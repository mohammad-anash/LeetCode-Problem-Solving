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
  return [
    ...nums.filter((val) => val !== 0),
    ...nums.filter((val) => val === 0),
  ];
}

// console.log(applyOperation([1, 2, 2, 1, 1, 0]));
// console.log(applyOperation([0, 1]));

// 118 => find the width of column grid

// You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

// For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
// Return an integer array ans of size n where ans[i] is the width of the ith column.

// The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

// Example 1:

// Input: grid = [[1],[22],[333]]
// Output: [3]
// Explanation: I/n the 0th column, 333 is of length 3.
// Example 2:

// Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
// Output: [3,1,2]
// Explanation:
// In the 0th column, only -15 is of length 3.
// In the 1st column, all integers are of length 1.
// In the 2nd column, both 12 and -2 are of length 2.

function findColumnWidth(grid) {
  const ans = [];
  for (let i = 0; i < grid[0].length; i++) {
    let mx = 0;
    for (let j = 0; j < grid.length; j++) {
      mx = Math.max(mx, grid[j][i].toString().length);
    }
    ans.push(mx);
  }
  return ans;
}

// console.log(findColumnWidth([[1], [22], [333]]));
// console.log(
//   findColumnWidth([
//     [-15, 1, 3],
//     [15, 7, 12],
//     [5, 6, -2],
//   ])
// );

// 119 => K-th Element of Two Sorted Arrays

// Given two sorted arrays of sizes m and n respectively, the task is to find the element that would be at the k-th position in the final sorted array formed by merging these two arrays.

function findkthElement(arr1, arr2, k) {
  let mergeArr = [...arr1, ...arr2];
  mergeArr = mergeArr.sort((a, b) => a - b);
  return mergeArr[k - 1];
}

// console.log(findkthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 5));
// console.log(
//   findkthElement(
//     [100, 112, 256, 349, 770],
//     [72, 86, 113, 119, 265, 445, 892],
//     7
//   )
// );

// 120 => Count pairs with given sum

// Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.

function countPair(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        result.push([arr[i], arr[i + 1]]);
      }
    }
  }
  return result.length;
}

// console.log(countPair([1, 5, 7, -1], 6));
// console.log(countPair([1, 5, 7, -1, 5], 6));
// console.log(countPair([1, 1, 1, 1], 2));

// 121 => missing number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

function missingNumber(nums) {
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
}

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// 122 => Unique Email Address

// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3

function numUniqueEmails(emails) {
  const uniqueEmails = new Set();
  for (const email of emails) {
    const [local, domain] = email.split("@");
    const filteredLocal = local.split("+")[0];
    const cleanLocal = filteredLocal.split(".").join("");
    const cleanEmail = `${cleanLocal}@${domain}`;
    uniqueEmails.add(cleanEmail);
  }

  return uniqueEmails.size;
}

// console.log(
//   numUniqueEmails([
//     "test.email+alex@leetcode.com",
//     "test.e.mail+bob.cathy@leetcode.com",
//     "testemail+david@lee.tcode.com",
//   ])
// );

// console.log(
//   numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
// );

// 123 => find the luck integer in an array

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.

function findLucky(nums) {
  let obj = {};

  nums.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });
  const luckyNumbers = Object.keys(obj).filter(
    (val) => Number(val) === obj[val]
  );
  const maxLucky = Math.max(...luckyNumbers.map(Number));
  return maxLucky === -Infinity ? -1 : maxLucky;
}

// console.log(findLucky([2, 2, 3, 4]));
// console.log(findLucky([1, 2, 2, 3, 3, 3]));
// console.log(findLucky([2, 2, 2, 3, 3]));
// console.log(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3]));

// 124 => Maximum sum of i*arr[i] among all rotations of a given array

// Given an array arr[] of n integers, find the maximum that maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.

function maximumSumOfIAndArr(arr) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    const rotateArr = [...arr.slice(i), ...arr.slice(0, i)];

    rotateArr.forEach((element, index) => {
      sum += element * index;
    });

    result.push(sum);
    console.log(rotateArr);
  }
  return Math.max(...result);
}

// console.log(maximumSumOfIAndArr([8, 3, 1, 2]));
// console.log(maximumSumOfIAndArr([3, 1, 2]));

// 125 =>

// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

// Example 1:

// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
// Example 2:

// Input: nums = [0,0]
// Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.
// Example 3:

// Input: nums = [0,4,3,0,4]
// Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.

function speicalArray(arr) {
  arr.sort((a, b) => b - a);

  for (let x = 0; x <= arr.length; x++) {
    if (arr.filter((num) => num >= x).length === x) return x;
  }
  return -1;
}

// console.log(speicalArray([3, 5]));
// console.log(speicalArray([0, 0]));
// console.log(speicalArray([0, 4, 3, 0, 4]));

// 126 => Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] < target) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
// console.log(search([-1, 0, 3, 5, 9, 12], 2));