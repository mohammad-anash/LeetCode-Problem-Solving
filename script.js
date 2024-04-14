// 1 => Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]

const buildArray = (nums) => {
  let ans = [...nums];
  for (let i = 0; i < ans.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

// console.log(buildArray([0, 2, 1, 5, 3, 4]));

// 2 => Numbers of Good Pair

// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

const numIdeanticalPair = (arr) => {
  let goodPair = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && i < j) {
        goodPair++;
      }
    }
  }
  return goodPair
};

console.log(numIdeanticalPair([1, 2, 3, 1, 1, 3]));
