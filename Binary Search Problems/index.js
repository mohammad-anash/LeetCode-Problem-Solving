// 1 => Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// // Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

function nextGreatestLetter(letter, char) {
  const storeEle = [];
  letter.forEach((ele) => {
    if (ele > char) storeEle.push(ele);
  });
  return storeEle[0] === undefined ? letter[0] : storeEle[0];
}

// console.log(nextGreatestLetter(["c", "f", "j"], "a"));
// console.log(nextGreatestLetter(["c", "f", "j"], "c"));
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));

// Solve with Binary Search

function nextGreatestLetter(lett, char) {
  let low = 0;
  let high = lett.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (lett[mid] <= char) low = mid + 1;
    else high = mid - 1;
  }

  return lett[low % lett.length];
}

// console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
// console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
// console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // Output: "x"

// 2 => Arranging Coins

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Input: n = 5
// Output: 2
// // Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

function arrangeCoins(n) {
  if (n === 1) return n;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum > n) return i - 1;
  }
}

// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));

// Other Approch

function arranageCoins(n) {
  let row = 0;
  let coinUsed = 0;

  while (coinUsed <= n) {
    row++;
    coinUsed += row;
  }
  return row - 1;
}

// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));

// 3 =>  Valid Perfect Square

// Given a positive integer num, return true if num is a perfect square or false otherwise.
// // A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// // Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

function isPerfectSquare(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i === n) return true;
  }
  return false;
}

// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(14));

// Solve With Binary Search

function isPerfectSquare(n) {
  let [low, high] = [1, n];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let square = mid * mid;

    if (square === n) return true;
    else if (square > n) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}

// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(14));

// 4 => Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// // Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// 5 => Check If N and Its Double Exist

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// // Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

function checkIfExist(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 2 * nums[j] || nums[j] === 2 * nums[i]) return true;
    }
  }
  return false;
}

// console.log(checkIfExist([10, 2, 5, 3]));
// console.log(checkIfExist([3, 1, 7, 11]));
// console.log(checkIfExist([7, 1, 14, 11]));

// 5 => Peak Index in a Mountain Array

// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
// Return the index of the peak element.
// Your task is to solve it in O(log(n)) time complexity.

// Example 1:
// // Input: arr = [0,1,0]
// Output: 1

// Example 2:
// // Input: arr = [0,2,1,0]
// Output: 1

// Example 3:
// Input: arr = [0,10,5,2]
// Output: 1

function peakIndexInMountainArray(nums) {
  let [low, high] = [0, nums.length - 1];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    else if (nums[mid] < nums[mid - 1]) high = mid - 1;
    else low = mid + 1;
  }
}

// console.log(peakIndexInMountainArray([0, 1, 0]));
// console.log(peakIndexInMountainArray([0, 2, 1, 0]));
// console.log(peakIndexInMountainArray([0, 10, 5, 2]));

// 6 => Median in a row-wise sorted Matrix

// Input:
// // R = 3, C = 3
// // // M = [[1, 3, 5],
// // //  [2, 6, 9],
// //  [3, 6, 9]]
// Output: 5
// Explanation: Sorting matrix elements gives
// us {1,2,3,3,5,6,6,9,9}. Hence, 5 is median.

// Example 2:

// Input:
// R = 3, C = 1
// M = [[1], [2], [3]]
// Output: 2
// Explanation: Sorting matrix elements gives
// us {1,2,3}. Hence, 2 is median.

function findMedianIn2dArray(nums) {
  const inOneArr = nums.flat(Infinity).sort((a, b) => a - b);
  let low = 0;
  let high = inOneArr.length - 1;

  let mid = Math.floor((low + high) / 2);
  console.log(inOneArr.slice(mid), inOneArr.slice(0, mid));
  // while (low <= high) {}
}

// console.log(
//   findMedianIn2dArray([
//     [1, 3, 5],
//     [2, 6, 9],
//     [3, 6, 9],
//   ])
// );

// console.log(findMedianIn2dArray([[1], [2], [3]]));

// const string = "aabbcccaccd";
// output a2b2c3a1c2d1;

function stringProblem(str) {
  let [res, letCount] = ["", 1];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      letCount++;
    } else {
      res += `${str[i]}${letCount}`;
      letCount = 1;
    }
  }
  return res;
}

// console.log(stringProblem("aabbcccaccd"));

function twoSum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [i, j];
      }
    }
  }
  return -1;
}

// console.log(twoSum([4, 6, 2, 15, 1], 7));

// Second Approcj

function twoSumSecondAppr(arr, k) {
  const map = new Map();
  let diff = 0;
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    diff = Math.abs(arr[i] - k);

    if (map.has(diff)) {
      ans.push(map.get(diff), i);
    } else {
      map.set(arr[i], i);
    }
  }
  return ans.length === 0 ? -1 : ans;
}

// console.log(twoSumSecondAppr([4, 6, 2, 15, 1], 7));
// console.log(twoSumSecondAppr([1, 2], 4));

// 6 =>  Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// // Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
