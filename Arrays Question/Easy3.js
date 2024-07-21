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

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
