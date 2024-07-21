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

// 128 => threee Consecutive Odds

// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

function threeConsecutiveOdds(nums) {
  if (nums.length < 3) return false;
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0 && nums[i + 2] % 2 !== 0) {
      return true;
    }
  }
  return false;
  3;
}

// console.log(threeConsecutiveOdds([2, 4, 6, 1]));
// console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
// console.log(threeConsecutiveOdds([1]));
// console.log(threeConsecutiveOdds([1, 3]));

// 129 => take gift fron the richest pile

// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

// Example 1:

// Input: gifts = [25,64,9,4,100], k = 4
// Output: 29
// Explanation:
// The gifts are taken in the following way:
// - In the first second, the last pile is chosen and 10 gifts are left behind.
// - Then the second pile is chosen and 8 gifts are left behind.
// - After that the first pile is chosen and 5 gifts are left behind.
// - Finally, the last pile is chosen again and 3 gifts are left behind.
// The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.
// Example 2:

// Input: gifts = [1,1,1,1], k = 4
// Output: 4
// Explanation:
// In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile.
// That is, you can't take any pile with you.
// So, the total gifts remaining are 4.

function pickGifts(arr, k) {
  for (let i = 0; i < k; i++)
    arr[arr.indexOf(Math.max(...arr))] = Math.floor(
      Math.sqrt(Math.max(...arr))
    );

  return arr.reduce((sum, current) => sum + current, 0);
}

// console.log(pickGifts([25, 64, 9, 4, 100], 4));
// console.log(pickGifts([1, 1, 1, 1], 4));

// 130 => apple redistribution into boxes

// You are given an array apple of size n and an array capacity of size m.

// There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

// Note that, apples from the same pack can be distributed into different boxes.

// Example 1:

// Input: apple = [1,3,2], capacity = [4,3,1,5,2]
// Output: 2
// Explanation: We will use boxes with capacities 4 and 5.
// It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.
// Example 2:

// Input: apple = [5,5,5], capacity = [2,4,2,7]
// Output: 4
// Explanation: We will need to use all the boxes.

let minimumBoxes = (apple, capacity) => {
  capacity = capacity.sort((a, b) => b - a);
  apple = apple.reduce((acc, current) => acc + current, 0);
  let sum = 0;
  for (let i = 0; i < capacity.length; i++) {
    sum += capacity[i];
    if (sum >= apple)
      if (capacity.length === i + 1) return capacity.length;
      else return i + 1;
  }
};

// console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));
// console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]));

// 131 =>  Two Furthest Houses With Different Colors

// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

// Example 1:
//

// Input: colors = [1,1,1,6,1,1,1]
// Output: 3
// Explanation: In the above image, color 1 is blue, and color 6 is red.
// The furthest two houses with different colors are house 0 and house 3.
// House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
// Note that houses 3 and 6 can also produce the optimal answer.
// Example 2:

// Input: colors = [1,8,3,8,3]
// Output: 4
// Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
// The furthest two houses with different colors are house 0 and house 4.
// House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.
// Example 3:

// Input: colors = [0,1]
// Output: 1
// Explanation: The furthest two houses with different colors are house 0 and house 1.
// House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.

function maxDistance(colors) {
  let maxDiff = 0;

  for (let i = 0; i < colors.length - 1; i++)
    for (let j = i + 1; j < colors.length; j++)
      if (colors[i] !== colors[j]) maxDiff = Math.max(maxDiff, j - i);
  return maxDiff;
}

// console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
// console.log(maxDistance([1, 8, 3, 8, 3]));
// console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4]));

// 132 => last visited Integer

// Given an integer array nums where nums[i] is either a positive integer or -1. We need to find for each -1 the respective positive integer, which we call the last visited integer.

// To achieve this goal, let's define two empty arrays: seen and ans.

// Start iterating from the beginning of the array nums.

// If a positive integer is encountered, prepend it to the front of seen.
// If -1 is encountered, let k be the number of consecutive -1s seen so far (including the current -1),
// If k is less than or equal to the length of seen, append the k-th element of seen to ans.
// If k is strictly greater than the length of seen, append -1 to ans.
// Return the array ans.

// Example 1:

// Input: nums = [1,2,-1,-1,-1]

// Output: [2,1,-1]

// Explanation:

// Start with seen = [] and ans = [].

// Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
// Process nums[1]: The next element is 2. We prepend it to the front of seen. Now, seen == [2, 1].
// Process nums[2]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen. We append 2 to ans. Now, ans == [2].
// Process nums[3]: Another -1. This is the second consecutive -1, so k == 2. The second element in seen is 1, so we append 1 to ans. Now, ans == [2, 1].
// Process nums[4]: Another -1, the third in a row, making k = 3. However, seen only has two elements ([2, 1]). Since k is greater than the number of elements in seen, we append -1 to ans. Finally, ans == [2, 1, -1].
// Example 2:

// Input: nums = [1,-1,2,-1,-1]

// Output: [1,2,1]

// Explanation:

// Start with seen = [] and ans = [].

// Process nums[0]: The first element in nums is 1. We prepend it to the front of seen. Now, seen == [1].
// Process nums[1]: The next element is -1. This is the first occurrence of -1, so k == 1. We look for the first element in seen, which is 1. Append 1 to ans. Now, ans == [1].
// Process nums[2]: The next element is 2. Prepend this to the front of seen. Now, seen == [2, 1].
// Process nums[3]: The next element is -1. This -1 is not consecutive to the first -1 since 2 was in between. Thus, k resets to 1. The first element in seen is 2, so append 2 to ans. Now, ans == [1, 2].
// Process nums[4]: Another -1. This is consecutive to the previous -1, so k == 2. The second element in seen is 1, append 1 to ans. Finally, ans == [1, 2, 1].

function lastVisitedInteger(nums) {
  const seen = [];
  const ans = [];
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      seen.unshift(nums[i]);
      k = 0;
    } else if (nums[i] === -1) {
      k++;
      if (k <= seen.length) ans.push(seen[k - 1]);
      else ans.push(-1);
    }
  }
  return ans;
}

// console.log(lastVisitedInteger([1, 2, -1, -1, -1])); // Output: [2, 1, -1]
// console.log(lastVisitedInteger([1, -1, 2, -1, -1])); // Output: [1, 2, 1]

// Other Approch

function lastVisitedInteger(nums) {
  const seen = [];
  const ans = [];
  let k = 0;
  for (let num of nums) {
    if (num > 0) {
      seen.unshift(num);
      k = 0;
    } else if (num === -1) {
      k++;
      if (k <= seen.length) {
        ans.push(seen[k - 1]);
      } else {
        ans.push(-1);
      }
    }
  }

  return ans;
}

// console.log(lastVisitedInteger([1, 2, -1, -1, -1])); // Output: [2, 1, -1]
// console.log(lastVisitedInteger([1, -1, 2, -1, -1])); // Output: [1, 2, 1]

// 133 => Divide an Array Into Subarrays With Minimum Cost I

// You are given an array of integers nums of length n.

// The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

// You need to divide nums into 3 disjoint contiguous
// subarrays
// .

// Return the minimum possible sum of the cost of these subarrays.

// Example 1:

// Input: nums = [1,2,3,12]
// Output: 6
// Explanation: The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.
// The other possible ways to form 3 subarrays are:
// - [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
// - [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.
// Example 2:

// Input: nums = [5,4,3]
// Output: 12
// Explanation: The best possible way to form 3 subarrays is: [5], [4], and [3] at a total cost of 5 + 4 + 3 = 12.
// It can be shown that 12 is the minimum cost achievable.
// Example 3:

// Input: nums = [10,3,1,1]
// Output: 12
// Explanation: The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
// It can be shown that 12 is the minimum cost achievable.

function minimumCost(nums) {
  let n = nums.length;
  let minCost = Infinity;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      let cost1 = nums[0];
      let cost2 = nums[i + 1];
      let cost3 = nums[j + 1];
      let totalCost = cost1 + cost2 + cost3;
      minCost = Math.min(minCost, totalCost);
    }
  }
  return minCost;
}

// console.log(minimumCost([1, 2, 3, 12]));
// console.log(minimumCost([5, 4, 3]));
// console.log(minimumCost([10, 3, 1, 1]));
// console.log(minimumCost([1, 6, 49, 35, 41, 4, 31, 39, 36, 39]));

// 133 => Defuse The Bomb
function decrypt(nums, k) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (k > 0) {
      let sum = 0;
      for (let j = 1; j <= k; j++) {
        sum += nums[(i + j) % nums.length];
      }
      result.push(sum);
    } else if (k === 0) {
      result.push(0);
    } else {
      let sum = 0;
      for (let j = 1; j <= Math.abs(k); j++) {
        sum += nums[(i - j + nums.length) % nums.length];
      }
      result.push(sum);
    }
  }
  return result;
}

// console.log(decrypt([5, 7, 1, 4], 3));
// console.log(decrypt([1, 2, 3, 4], 0));
// console.log(decrypt([2, 4, 9, 3], -2));
// console.log(decrypt([5, 2, 2, 3, 1], 3));

// 134 => Find the first repeating element in an array of integers

// Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest.

function firstRepeatedElement(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] === arr[j]) return i;
  return -1;
}

// console.log(firstRepeatedElement([10, 5, 3, 4, 3, 5, 6]));
// console.log(firstRepeatedElement([6, 10, 5, 4, 9, 120, 4, 6, 10]));
// console.log(firstRepeatedElement([6, 10]));

// 135 => Count 1’s in a sorted binary array

// Examples:

// Input: arr[] = {1, 1, 0, 0, 0, 0, 0}
// Output: 2

// Input: arr[] = {1, 1, 1, 1, 1, 1, 1}
// Output: 7

// Input: arr[] = {0, 0, 0, 0, 0, 0, 0}
// Output: 0

// Given a binary array arr[] of size N, which is sorted in non-increasing order, count the number of 1’s in it.

function countOnes(arr) {
  let counter = 0;

  arr.forEach((element) => {
    if (element === 1) counter++;
  });
  return counter;
}

// console.log(countOnes([1, 1, 0, 0, 0, 0, 0]));
// console.log(countOnes([1, 1, 1, 1, 1, 1, 1]));
// console.log(countOnes([0, 0, 0, 0, 0, 0, 0]));

// Other Approch

function countOnes(arr) {
  return arr.filter((val) => val === 1).length;
}

// console.log(countOnes([1, 1, 0, 0, 0, 0, 0]));
// console.log(countOnes([1, 1, 1, 1, 1, 1, 1]));
// console.log(countOnes([0, 0, 0, 0, 0, 0, 0]));

// 136 => Find All K-Distant Indices in an Array

// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// Return a list of all k-distant indices sorted in increasing order.

// Example 1:

// Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
// Output: [1,2,3,4,5,6]
// Explanation: Here, nums[2] == key and nums[5] == key.
// - For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
// - For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
// - For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
// - For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
// - For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
// - For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
// - For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
// Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.
// Example 2:

// Input: nums = [2,2,2,2,2], key = 2, k = 2
// Output: [0,1,2,3,4]
// Explanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index.
// Hence, we return [0,1,2,3,4].

function findKDistantIndices(nums, key, k) {
  let arr = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (Math.abs(i - j) <= k && nums[j] == key) {
        arr.push(i);
      }
    }
  }
  arr = Array.from(new Set(arr));
  return arr;
}

// console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
// console.log(findKDistantIndices([2, 2, 2, 2], 2, 2));

// 137 => Find first non-repeating element in a given Array of integers

// Given an array of integers of size N, the task is to find the first non-repeating element in this array.

// Examples:

// Input: {-1, 2, -1, 3, 0}
// Output: 2
// Explanation: The first number that does not repeat is : 2

// Input: {9, 4, 9, 6, 7, 4}
// Output: 6

function firstNonRepeating(arr, n) {
  for (let i = 0; i < n; i++) {
    let j;

    for (j = 0; j < n; j++) if (i != j && arr[i] == arr[j]) break;

    if (j == n) return arr[i];
  }
  return -1;
}

// let arr = [9, 4, 9, 6, 7, 4];
// let n = arr.length;
// console.log(firstNonRepeating(arr, n));

// 138 => Last Stone Weigth

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1];
// Output: 1;

function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let stone1 = stones[0];
    let stone2 = stones[1];

    stones = stones.slice(2);
    if (stone1 !== stone2) stones.push(stone1 - stone2);
  }
  return stones.length === 1 ? stones[0] : 0;
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// console.log(lastStoneWeight([1]));

// Solve Questiion With Destructuring

function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    let [stone1, stone2, ...remainingStones] = stones;
    let diff = stone1 - stone2;
    stones = remainingStones;
    if (diff > 0) stones.push(diff);
  }
  return stones.length === 1 ? stones[0] : 0;
}

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// console.log(lastStoneWeight([1]));

// 139 => Sign of the Product of an Array

// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
//
// Return signFunc(product).

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1
// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0
// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

function arraySign(nums) {
  let product = 1;
  for (const num of nums) product *= num;
  if (nums.includes(0)) return 0;
  return product > 0 ? 1 : -1;
}

// console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
// console.log(arraySign([1, 5, 0, 2, -3]));
// console.log(arraySign([-1, 1, -1, 1, -1]));

// 140 => Find Subarrays With Equal Sum

// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
// Return true if these subarrays exist, and false otherwise.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [4,2,4]
// Output: true
// Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: false
// Explanation: No two subarrays of size 2 have the same sum.
// Example 3:

// Input: nums = [0,0,0]
// Output: true
// Explanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0.
// Note that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.

function findSubarrays(nums) {
  let sum = 0;
  let storeSum = [];
  for (let i = 0; i < nums.length - 1; i++) {
    sum = 0;
    storeSum.push(
      nums.slice(i, i + 2).reduce((acc, element) => (sum += element), sum)
    );
  }

  for (let i = 0; i < storeSum.length; i++)
    for (let j = i + 1; j < storeSum.length; j++)
      if (storeSum[i] === storeSum[j]) return true;
  return false;
}

// console.log(findSubarrays([4, 2, 4]));
// console.log(findSubarrays([1, 2, 3, 4, 5]));
// console.log(findSubarrays([0, 0, 0]));
// console.log(
//   findSubarrays([
//     77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97,
//     72, 54, 15, 33, 77, 78, 8, 21, 47, 99, 48,
//   ])
// );

// other Approch

function findSubarrays(nums) {
  let sum = 0;
  let storeSum = [];
  const set = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    sum = 0;
    storeSum.push(
      nums.slice(i, i + 2).reduce((acc, element) => (sum += element), sum)
    );

    if (set.has(sum)) return true;
    else set.add(sum);
  }
  return false;
}

// console.log(findSubarrays([4, 2, 4]));
// console.log(findSubarrays([1, 2, 3, 4, 5]));
// console.log(findSubarrays([0, 0, 0]));
// console.log(
//   findSubarrays([
//     77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97,
//     72, 54, 15, 33, 77, 78, 8, 21, 47, 99, 48,
//   ])
// );

// 141 => Minimum Sum of Mountain Triplets I

// You are given a 0-indexed array nums of integers.

// A triplet of indices (i, j, k) is a mountain if:
//
// i < j < k
// nums[i] < nums[j] and nums[k] < nums[j]
// Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists, return -1.

// Example 1:

// Input: nums = [8,6,1,5,3]
// Output: 9
// Explanation: Triplet (2, 3, 4) is a mountain triplet of sum 9 since:
// - 2 < 3 < 4
// - nums[2] < nums[3] and nums[4] < nums[3]
// And the sum of this triplet is nums[2] + nums[3] + nums[4] = 9. It can be shown that there are no mountain triplets with a sum of less than 9.
// Example 2:

// Input: nums = [5,4,8,7,10,2]
// Output: 13
// Explanation: Triplet (1, 3, 5) is a mountain triplet of sum 13 since:
// - 1 < 3 < 5
// - nums[1] < nums[3] and nums[5] < nums[3]
// And the sum of this triplet is nums[1] + nums[3] + nums[5] = 13. It can be shown that there are no mountain triplets with a sum of less than 13.
// Example 3:

// Input: nums = [6,5,4,3,4,5]
// Output: -1
// Explanation: It can be shown that there are no mountain triplets in nums.

function miniSum(nums) {
  let storeSum = [];
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++)
      for (let k = j + 1; k < nums.length; k++)
        if (nums[i] < nums[j] && nums[k] < nums[j])
          storeSum.push(nums[i] + nums[j] + nums[k]);
  return Math.min(...storeSum) === Infinity ? -1 : Math.min(...storeSum);
}

// console.log(miniSum([8, 6, 1, 5, 3]));
// console.log(miniSum([5, 4, 8, 7, 10, 2]));
// console.log(miniSum([6, 5, 4, 3, 4, 5]));

// 142 => Count Prefix And Suffix Pair|
// You are given a 0-indexed string array words.
// Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:
// isPrefixAndSuffix(str1, str2) returns true if str1 is both a
// prefix
//  and a
// suffix
//  of str2, and false otherwise.
// For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.

// Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.

// Example 1:

// Input: words = ["a","aba","ababa","aa"]
// Output: 4
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
// i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
// i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
// i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
// Therefore, the answer is 4.
// Example 2:

// Input: words = ["pa","papa","ma","mama"]
// Output: 2
// Explanation: In this example, the counted index pairs are:
// i = 0 and j = 1 because isPrefixAndSuffix("pa", "papa") is true.
// i = 2 and j = 3 because isPrefixAndSuffix("ma", "mama") is true.
// Therefore, the answer is 2.
// Example 3:
//
// Input: words = ["abab","ab"]
// Output: 0
// Explanation: In this example, the only valid index pair is i = 0 and j = 1, and isPrefixAndSuffix("abab", "ab") is false.
// Therefore, the answer is 0.

function countPrefixAndSuffixPair(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[j].startsWith(nums[i]) && nums[j].endsWith(nums[i])) counter++;
  return counter;
}

// console.log(countPrefixAndSuffixPair(["a", "aba", "ababa", "aa"]));
// console.log(countPrefixAndSuffixPair(["pa", "papa", "ma", "mama"]));
// console.log(countPrefixAndSuffixPair(["abab", "ab"]));

// 143 => Build Array from Permutation
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
// = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
// = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
// = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
// = [4,5,0,1,2,3]

// Second Time Solve

const buildArray = (nums) => {
  return nums.map((ans, index) => nums[nums[index]]);
};
// console.log(buildArray([0, 2, 1, 5, 3, 4]));
// console.log(buildArray([5, 0, 1, 2, 3, 4]));

// Second Time Solve

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

function getConcatenation(nums) {
  return [...nums, ...nums];
}

// console.log(getConcatenation([1, 2, 1]));
// console.log(getConcatenation([1, 3, 2, 1]));

// 144 => Range Some Query - Immutable

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

class NumArray {
  constructor(nums) {
    this.prefixSum = [];
    this.prefixSum[0] = 0;

    for (let i = 0; i < nums.length; i++)
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
  }

  sumRange(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}

// let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(numArray.sumRange(0, 2)); // Output: 1
// console.log(numArray.sumRange(2, 5)); // Output: -1
// console.log(numArray.sumRange(0, 5)); // Output: -3

// 145 => String Matching in an Array
//  Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

function stringMatching(words) {
  const result = [];
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length - 1; i++)
    for (let j = i + 1; j < words.length; j++)
      if (words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
  return result;
}

// console.log(stringMatching(["mass", "as", "hero", "superhero"]));
// console.log(stringMatching(["leetcode", "et", "code"]));
// console.log(stringMatching(["blue", "green", "bu"]));

// Second Time Solve
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

function numsIdenticalPair(nums) {
  let storePair = [];

  for (let i = 0; i < nums.length; i++)
    for (let j = 1; j < nums.length; j++)
      if (nums[i] === nums[j] && i < j) storePair.push([i, j]);

  return storePair.length;
}

// console.log(numsIdenticalPair([1, 2, 3, 1, 1, 3]));
// console.log(numsIdenticalPair([1, 1, 1, 1]));
// console.log(numsIdenticalPair([1, 2, 3]));

// 146 => Find Minimum Operations to Make All Elements Divisible by Three

// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
// Return the minimum number of operations to make all elements of nums divisible by 3.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: 3
// Explanation:
// All array elements can be made divisible by 3 using 3 operations:

// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.
// Example 2:
// Input: nums = [3,6,9]
// Output: 0

function minimumOperation(nums) {
  let counter = 0;
  nums.forEach((num) => {
    if (num % 3 !== 0) counter++;
  });

  return counter;
}

// console.log(minimumOperation([1, 2, 3, 4]));
// console.log(minimumOperation([3, 6, 9]));

// Other Approch

function minimumOperation(nums) {
  // return nums.filter((val) => val % 3 !== 0).length;
  return nums.reduce((acc, current) => (current % 3 !== 0 ? acc + 1 : acc), 0);
}

// 147 => Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1, 4, 2, 3, 3, 2, 4, 1];
// Example 3:
//
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

function shuffle(nums, n) {
  let result = [];
  for (let i = 0; i < nums.length - n; i++) result.push(nums[i], nums[i + n]);
  return result;
}

// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
// console.log(shuffle([1, 1, 2, 2], 2));

// 148 => Semi-Ordered Permutation

// You are given a 0-indexed permutation of n integers nums.
// A permutation is called semi-ordered if the first number equals 1 and the last number equals n. You can perform the below operation as many times as you want until you make nums a semi-ordered permutation:
// Pick two adjacent elements in nums, then swap them.
// Return the minimum number of operations to make nums a semi-ordered permutation.
// A permutation is a sequence of integers from 1 to n of length n containing each number exactly once.

// Example 1:

// Input: nums = [2,1,4,3]
// Output: 2
// Explanation: We can make the permutation semi-ordered using these sequence of operations:
// 1 - swap i = 0 and j = 1. The permutation becomes [1,2,4,3].
// 2 - swap i = 2 and j = 3. The permutation becomes [1,2,3,4].
// It can be proved that there is no sequence of less than two operations that make nums a semi-ordered permutation.
// Example 2:

// Input: nums = [2,4,1,3]
// Output: 3
// Explanation: We can make the permutation semi-ordered using these sequence of operations:
// 1 - swap i = 1 and j = 2. The permutation becomes [2,1,4,3].
// 2 - swap i = 0 and j = 1. The permutation becomes [1,2,4,3].
// 3 - swap i = 2 and j = 3. The permutation becomes [1,2,3,4].
// It can be proved that there is no sequence of less than three operations that make nums a semi-ordered permutation.
// Example 3:

// Input: nums = [1,3,4,2,5]
// Output: 0
// Explanation: The permutation is already a semi-ordered permutation.

function semiOrderedPermutation(nums) {
  let unit = nums.indexOf(1),
    n = nums.indexOf(nums.length);
  return unit < n
    ? unit + (nums.length - n - 1)
    : unit + (nums.length - n - 1) - 1;
}

// console.log(semiOrderedPermutation([2, 4, 1, 3]));
// console.log(semiOrderedPermutation([2, 1, 4, 3]));
// console.log(semiOrderedPermutation([1, 3, 4, 2, 5]));

// 149 =>  Average Salary Excluding the Minimum and Maximum Salary

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

function average(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  let counter = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    result += nums[i];
    counter++;
  }
  // return result / counter;
}

// console.log(average([4000, 3000, 1000, 2000]));
// console.log(average([1000, 2000, 3000]));

// Other Approch

function average(nums) {
  const ignoreMaxAndMin = nums.filter(
    (val) => ![Math.max(...nums), Math.min(...nums)].includes(val)
  );
  return (
    ignoreMaxAndMin.reduce((sum, current) => sum + current, 0) /
    ignoreMaxAndMin.length
  );
}

// console.log(average([4000, 3000, 1000, 2000]));
// console.log(average([1000, 2000, 3000]));

// 150 => Reshape the Matrix

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]
// Example 2:

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  const totalElements = m * n;

  if (totalElements !== r * c) {
    return mat;
  }

  const flatList = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flatList.push(mat[i][j]);
    }
  }

  const newMatrix = [];
  for (let i = 0; i < r; i++) {
    const newRow = flatList.slice(i * c, (i + 1) * c);
    newMatrix.push(newRow);
  }

  return newMatrix;
}

const mat1 = [
  [1, 2],
  [3, 4],
];
const r1 = 1;
const c1 = 4;
// console.log(matrixReshape(mat1, r1, c1));

// Example 2
const mat2 = [
  [1, 2],
  [3, 4],
];
const r2 = 2;
const c2 = 4;
// console.log(matrixReshape(mat2, r2, c2));

// Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

function maximumWealth(nums) {
  let storeSum = [];
  nums.forEach((element) => {
    const sum = element.reduce((prev, current) => prev + current, 0);
    storeSum.push(sum);
  });

  return Math.max(...storeSum);
}

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// );
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// );

// 151 => Min Max Game

// You are given a 0-indexed integer array nums whose length is a power of 2.
// Apply the following algorithm on nums:
// Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
// For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
// For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the last number that remains in nums after applying the algorithm.
// Example 1:

// Input: nums = [1,3,5,2,4,8,2,2]
// Output: 1
// Explanation: The following arrays are the results of applying the algorithm repeatedly.
// First: nums = [1,5,4,2]
// Second: nums = [1,4]
// Third: nums = [1]
// 1 is the last remaining number, so we return 1.
// Example 2:

// Input: nums = [3]
// Output: 3
// Explanation: 3 is already the last remaining number, so we return 3.

function minMaxGame(nums) {
  while (nums.length > 1) {
    const newNums = [];
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 === 0) newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      else newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    }
    nums = newNums;
  }
  return nums[0];
}
// console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // Output: 1
// console.log(minMaxGame([3])); // Output: 3

// 152 =>

// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

// Example 1:

// Input: nums = [4,1,2,3]
// Output: [2,3,4,1]
// Explanation:
// First, we sort the values present at odd indices (1 and 3) in non-increasing order.
// So, nums changes from [4,1,2,3] to [4,3,2,1].
// Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
// So, nums changes from [4,1,2,3] to [2,3,4,1].
// Thus, the array formed after rearranging the values is [2,3,4,1].
// Example 2:
//
// Input: nums = [2,1]
// Output: [2,1]
// Explanation:
// Since there is exactly one odd index and one even index, no rearrangement of values takes place.
// The resultant array formed is [2,1], which is the same as the initial array.

function sortEvenOdd(nums) {
  const [evenNums, oddNums] = [[], []];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) evenNums.push(nums[i]);
    else oddNums.push(nums[i]);
  }

  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => b - a);

  const result = [];
  let [evenIndex, oddIndex] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) result[i] = evenNums[evenIndex++];
    else result[i] = oddNums[oddIndex++];
  }

  return result;
}

// console.log(sortEvenOdd([4, 1, 2, 3])); // Output: [2, 3, 4, 1]
// console.log(sortEvenOdd([2, 1])); // Output: [2, 1]

// 153 => rank tranfrom an array

// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

function arrayRankTransfrom(nums) {
  const sortedArr = [...new Set(nums)].sort((a, b) => a - b);
  const rankMap = new Map();
  sortedArr.forEach((element, index) => rankMap.set(element, index + 1));
  return nums.map((val) => rankMap.get(val));
}

// console.log(arrayRankTransfrom([40, 10, 20, 30]));
// console.log(arrayRankTransfrom([100, 100, 100]));
// console.log(arrayRankTransfrom([37, 12, 28, 9, 100, 56, 80, 5, 12]));

// 154 => contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
  let obj = {};

  nums.forEach((element) =>
    obj[element] ? obj[element]++ : (obj[element] = 1)
  );
  return Object.values(obj).some((val) => val >= 2);
}
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(
//   containsDuplicate([
//     7, 10, 5, 5, 6, 6, 4, 10, 5, 4, 9, 4, 9, 6, 5, 9, 6, 3, 6, 5, 6, 7, 7, 4, 9,
//     9, 10, 5, 8, 1, 8, 3, 2, 7, 5, 10, 1, 8, 5, 8, 4, 3, 6, 4, 9, 4, 2, 8, 3, 2,
//     2, 1, 5, 6, 3, 2, 6, 1, 8, 6, 2, 9, 1, 4, 5, 10, 8, 5, 10, 5, 10, 1, 4, 8,
//     3, 6, 4, 10, 9, 1, 1, 1, 2, 2, 9, 6, 6, 8, 1, 9, 2, 5, 5, 2, 1, 8, 5, 2, 3,
//     10,
//   ])
// );

// 155 -> ,ax Ascendgin order

// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
// Example 2:

// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
// Example 3:

// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.

function maxAscendingSum(nums) {
  let [maxSum, currentSum] = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = nums[i];
    }
  }
  maxSum = Math.max(maxSum, currentSum);

  return maxSum;
}

// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])); // Output: 65
// console.log(maxAscendingSum([10, 20, 30, 40, 50])); // Output: 150
// console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])); // Output: 33

// 156 => Find Indices With Index and Value Difference I

// You are given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

// Your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:
//
// abs(i - j) >= indexDifference, and
// abs(nums[i] - nums[j]) >= valueDifference
// // Return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise. If there are multiple choices for the two indices, return any of them.

// Note: i and j may be equal.

// Example 1:

// Input: nums = [5,1,4,1], indexDifference = 2, valueDifference = 4
// Output: [0,3]
// Explanation: In this example, i = 0 and j = 3 can be selected.
// abs(0 - 3) >= 2 and abs(nums[0] - nums[3]) >= 4.
// Hence, a valid answer is [0,3].
// [3,0] is also a valid answer.
// Example 2:

// Input: nums = [2,1], indexDifference = 0, valueDifference = 0
// Output: [0,0]
// Explanation: In this example, i = 0 and j = 0 can be selected.
// abs(0 - 0) >= 0 and abs(nums[0] - nums[0]) >= 0.
// Hence, a valid answer is [0,0].
// Other valid answers are [0,1], [1,0], and [1,1].
// Example 3:

// Input: nums = [1,2,3], indexDifference = 2, valueDifference = 4
// Output: [-1,-1]
// Explanation: In this example, it can be shown that it is impossible to find two indices that satisfy both conditions.
// Hence, [-1,-1] is returned.

function findIndeces(nums, indexDifference, valueDifference) {
  const answer = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      if (Math.abs(i - j) >= indexDifference && diff >= valueDifference)
        return [i, j];
    }
  }
  return answer;
}

// console.log(findIndeces([5, 1, 4, 1], 2, 4));
// console.log(findIndeces([2, 1], 0, 0));
// console.log(findIndeces([1, 2, 3], 2, 4));
// console.log(findIndeces([0], 0, 0));

// 157 => Count Special Quadruplets

// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:
// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d
//  Example 1:

// Input: nums = [1,2,3,6]
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
// Example 2:

// Input: nums = [3,3,6,4,5]
// Output: 0
// Explanation: There are no such quadruplets in [3,3,6,4,5].
// Example 3:

// Input: nums = [1,1,1,3,5]
// Output: 4
// Explanation: The 4 quadruplets that satisfy the requirement are:
// - (0, 1, 2, 3): 1 + 1 + 1 == 3
// - (0, 1, 3, 4): 1 + 1 + 3 == 5
// - (0, 2, 3, 4): 1 + 1 + 3 == 5
// // - (1, 2, 3, 4): 1 + 1 + 3 == 5

function countQuadruplets(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length - 3; i++)
    for (let j = i + 1; j < nums.length - 2; j++)
      for (let k = j + 1; k < nums.length - 1; k++)
        for (let l = k + 1; l < nums.length; l++)
          if (nums[i] + nums[j] + nums[k] === nums[l]) counter++;
  return counter;
}

// console.log(countQuadruplets([1, 2, 3, 6]));
// console.log(countQuadruplets([3, 3, 6, 4, 5]));
// console.log(countQuadruplets([1, 1, 1, 3, 5]));
// console.log(countQuadruplets([9, 6, 8, 23, 39, 23]));

// 158 => Minimum Average of Smallest and Largest Elements

// You have an array of floating point numbers averages which is initially empty. You are given an array nums of n integers where n is even.
// You repeat the following procedure n / 2 times:
// Remove the smallest element, minElement, and the largest element maxElement, from nums.
// Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

// Example 1:
// Input: nums = [7,8,3,4,15,13,4,1]
// Output: 5.5
// Explanation:

// step	nums	averages
// 0	[7,8,3,4,15,13,4,1]	[]
// 1	[7,8,3,4,13,4]	[8]
// 2	[7,8,4,4]	[8,8]
// 3	[7,4]	[8,8,6]
// 4	[]	[8,8,6,5.5]
// The smallest element of averages, 5.5, is returned.
// Example 2:
// Input: nums = [1,9,8,3,10,5]
// Output: 5.5
// Explanation:

// step	nums	averages
// 0	[1,9,8,3,10,5]	[]
// 1	[9,8,3,5]	[5.5]
// 2	[8,5]	[5.5,6]
// 3	[]	[5.5,6,6.5]
// Example 3:

// Input: nums = [1,2,3,7,8,9]
// Output: 5.0
// Explanation:

// step	nums	averages
// // 0	[1,2,3,7,8,9]	[]
// // 1	[2,3,7,8]	[5]
// 2	[3,7]	[5,5]
// 3	[]	[5,5,5]

function minmumAverage(nums) {
  const [storeSum, sortedArr] = [[], nums.toSorted((a, b) => a - b)];
  for (let i = 0; i < nums.length / 2; i++) {
    const [minElement, maxElement] = [sortedArr.shift(), sortedArr.pop()];
    const average = (minElement + maxElement) / 2;
    storeSum.push(average);
  }

  return Math.min(...storeSum);
}

// console.log(minmumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
// console.log(minmumAverage([1, 9, 8, 3, 10, 5]));
// console.log(minmumAverage([1, 2, 3, 7, 8, 9]));

// 159 => Minimum Cost of Buying Candies With Discount
// A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.

// The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought.

// For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, they can take the candy with cost 1 for free, but not the candy with cost 4.
// Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, return the minimum cost of buying all the candies.

// Example 1:

// Input: cost = [1,2,3]
// Output: 5
// Explanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.
// The total cost of buying all candies is 2 + 3 = 5. This is the only way we can buy the candies.
// Note that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.
// The cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.
// Example 2:

// Input: cost = [6,5,7,9,2,2]
// Output: 23
// Explanation: The way in which we can get the minimum cost is described below:
// - Buy candies with costs 9 and 7
// - Take the candy with cost 6 for free
// - We buy candies with costs 5 and 2
// - Take the last remaining candy with cost 2 for free
// Hence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.
// Example 3:
//
// Input: cost = [5,5]
// Output: 10
// Explanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.
// Hence, the minimum cost to buy all candies is 5 + 5 = 10.

function minimumCost(nums) {
  nums.sort((a, b) => a - b);
  let totalCost = 0;
  for (let i = nums.length - 1; i >= 0; i -= 3) {
    totalCost += nums[i];
    if (i - 1 >= 0) totalCost += nums[i - 1];
  }

  return totalCost;
}

// console.log(minimumCost([1, 2, 3]));
// console.log(minimumCost([6, 5, 7, 9, 2, 2]));
// console.log(minimumCost([5, 5]));
// console.log(minimumCost([1]));
// console.log(minimumCost([1, 1, 1]));

// 160 => Find All Numbers Disaappered In An Array]

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums) {
  const [result, n] = [[], nums.length];

  for (let i = 0; i < n; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] = -nums[index];
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
}

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDisappearedNumbers([1, 1]));

// 161 => Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false

function isMonotonic(nums) {
  let [increasing, decreasing] = [true, true];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) increasing = false;
    if (nums[i] < nums[i + 1]) decreasing = false;
  }

  return increasing || decreasing;
}

// console.log(isMonotonic([1, 2, 2, 3]));
// console.log(isMonotonic([6, 5, 4, 4]));
// console.log(isMonotonic([1, 3, 2]));
// console.log(isMonotonic([1, 2, 4, 5]));

// 162 => Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1

function findSpecialInteger(nums) {
  if (nums.length === 1) return nums[0];
  let obj = {};

  for (const element of nums) {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  }

  const result = [];
  for (const keys in obj) {
    if (obj[keys] >= Math.ceil(nums.length * 0.25)) result.push(+keys);
  }

  return Math.max(...result);
}

// console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
// console.log(findSpecialInteger([1, 1]));
// console.log(findSpecialInteger([1, 2, 3, 3]));
// console.log(
//   findSpecialInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12])
// );

// 163 => Power Of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// // Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

function isPowerOfTwo(n) {
  if (n === 1) return true;

  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(16)); // true
// console.log(isPowerOfTwo(3)); // false

// 164 => Leader In Array
// Given an array arr of n positive integers, your task is to find all the leaders in the array. An element of the array is considered a leader if it is greater than all the elements on its right side or if it is equal to the maximum element on its right side. The rightmost element is always a leader.

// Examples

// Input: n = 6, arr[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
// Input: n = 5, arr[] = {10,4,2,4,1}
// Output: 10 4 4 1
// Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right. side

function leaderInArray(nums) {
  let [storeNum, max] = [[], 0];
  nums = nums.reverse();
  nums.forEach((val) => {
    if (max <= val) {
      max = val;
      storeNum.push(val);
    }
  });
  return storeNum.sort((a, b) => b - a);
}

// console.log(leaderInArray([16, 17, 4, 3, 5, 2]));
// console.log(leaderInArray([10, 4, 2, 4, 1]));

// 165 =>  Subarray Sum Equals K
// ven an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

function subArraySum(nums, k) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j <= nums.length; j++) {
      sum += nums[j];
      if (sum === k) counter++;
    }
  }
  return counter;
}

// console.log(subArraySum([1, 1, 1], 2));
// console.log(subArraySum([1, 2, 3], 3));
// console.log(subArraySum([1], 0));
// console.log(subArraySum([-1, -1, 1], 0));
// console.log(subArraySum([-1, -1, 1], 2));

// 166 => Merge Two 2D Arrays by Summing Values

// You are given two 2D integer arrays nums1 and nums2.

// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.

// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.

// Example 1:
// Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
// Output: [[1,6],[2,3],[3,2],[4,6]]
// Explanation: The resulting array contains the following:
// - id = 1, the value of this id is 2 + 4 = 6.
// - id = 2, the value of this id is 3.
// - id = 3, the value of this id is 2.
// - id = 4, the value of this id is 5 + 1 = 6.
// Example 2:

// Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
// Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
// Explanation: There are no common ids, so we just include each id with its value in the resulting list.

function mergeArray(nums1, nums2) {
  const map = new Map();

  for (let [id, val] of nums1) {
    map.set(id, val);
  }

  for (const [id, val] of nums2) {
    if (map.has(id)) map.set(id, map.get(id) + val);
    else map.set(id, val);
  }
  let result = Array.from(map).sort((a, b) => a[0] - b[0]);
  return result;
}

// console.log(
//   mergeArray(
//     [
//       [1, 2],
//       [2, 3],
//       [4, 5],
//     ],
//     [
//       [1, 4],
//       [3, 2],
//       [4, 1],
//     ]
//   )
// );
// console.log(
//   mergeArray(
//     [
//       [2, 4],
//       [3, 6],
//       [5, 5],
//     ],
//     [
//       [1, 3],
//       [4, 3],
//     ]
//   )
// );

// 167 => Count Elements With Strictly Smaller and Greater Elements

// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// // Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums

function countElement(nums) {
  // return nums.filter(
  // (val) => ![Math.max(...nums), Math.min(...nums)].includes(val)
  // ).length;
}

// console.log(countElement([11, 7, 2, 5]));
// console.log(countElement([-3, 3, 3, 90]));
// console.log(countElement([-71, -71, 93, -71, 40]));
