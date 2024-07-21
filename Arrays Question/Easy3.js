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