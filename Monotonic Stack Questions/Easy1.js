// 1 => Next Greater Element ||

// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]

const nextGreaterElements = (nums) => {
  const n = nums.length;
  const nge = new Array(n).fill(-1);
  const stack = [];

  for (let i = 2 * n - 1; i >= 0; i--) {
    const currentIndex = i % n;
    while (stack.length && stack[stack.length - 1] <= nums[currentIndex]) {
      stack.pop();
    }
    if (stack.length) nge[currentIndex] = stack[stack.length - 1];
    stack.push(nums[currentIndex]);
  }
  return nge;
};

// console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2, 3, 4, -1, 4]

// 2 => Maximum Width Ramp

// A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

// Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

// Example 1:

// Input: nums = [6,0,8,2,1,5]
// Output: 4
// // Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
// Example 2:

// Input: nums = [9,8,1,0,1,9,4,0,4,1]
// Output: 7
// Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1

function maxWidthRamp(nums) {
  let maxRamps = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i < j && nums[i] <= nums[j]) {
        const ramp = j - i;
        maxRamps = Math.max(ramp, maxRamps);
      }
    }
  }
  // return maxRamps;
}

// console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]));
// console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]));

// This Question is Solved but it's not optimize, so we use monotonic stack here for solve it.

function maxWidthRamp(nums) {
  const stack = [];
  let maxWidth = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!stack.length || nums[i] < nums[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length && nums[j] >= nums[stack[stack.length - 1]]) {
      maxWidth = Math.max(maxWidth, j - stack.pop());
    }
  }

  return maxWidth;
}

// Test Cases
// console.log(maxWidthRamp([6, 0, 8, 2, 1, 5])); // Output: 4 (i=1, j=5)
// console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4]));

// 3 => Asteroid collision

// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10

function asteroidCollision(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (true) {
        const last = stack[stack.length - 1];

        if (stack.length === 0 || last < 0) {
          stack.push(asteroid);
          break;
        }

        if (last === -asteroid) {
          stack.pop();
          break;
        } else if (last < -asteroid) {
          stack.pop();
        } else {
          break;
        }
      }
    }
  }

  return stack;
}

// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([10, 2, -5]));
