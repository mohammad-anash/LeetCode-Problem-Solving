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
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
console.log(distributeCandies([1, 1, 1, 2, 2, 2, 3, 3, 3]));
