// 373 => XOR Queries of a Subarray

// You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

// For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

// Return an array answer where answer[i] is the answer to the ith query.

// Example 1:

// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8]
// Explanation:
// The binary representation of the elements in the array are:
// 1 = 0001
// 3 = 0011
// 4 = 0100
// 8 = 1000
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2
// [1,2] = 3 xor 4 = 7
// [0,3] = 1 xor 3 xor 4 xor 8 = 14
// [3,3] = 8
// Example 2:

// Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// Output: [8,0,4,4]

const xorQueries = (arr, queries) => {
  const n = arr.length;
  const result = [];
  const prefixXor = new Array(n).fill(0);

  prefixXor[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixXor[i] = prefixXor[i - 1] ^ arr[i];
  }

  for (const [l, r] of queries) {
    if (l === 0) {
      result.push(prefixXor[r]);
    } else {
      result.push(prefixXor[r] ^ prefixXor[l - 1]);
    }
  }
  return result;
};

// console.log(
//   xorQueries(
//     [1, 3, 4, 8],
//     [
//       [0, 1],
//       [1, 2],
//       [0, 3],
//       [3, 3],
//     ]
//   )
// );

// 374 => Special Array II

// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

// You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not.

// Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

// Example 1:
// // Input: nums = [3,4,1,2,6], queries = [[0,4]]
// Output: [false]
// Explanation:
// The subarray is [3,4,1,2,6]. 2 and 6 are both even.

// Example 2:
// Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]
// Output: [false,true]
// Explanation:
// The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
// The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true

const isArraySpecial = (nums, queries) => {
  const n = nums.length;
  const prefixArray = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefixArray[i] = prefixArray[i - 1];
    if (
      (nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) ||
      (nums[i - 1] % 2 !== 0 && nums[i] % 2 !== 0)
    ) {
      prefixArray[i]++;
    }
  }

  const answer = [];
  for (const [from, to] of queries) {
    const invalidPairs = prefixArray[to] - prefixArray[from];
    answer.push(invalidPairs === 0);
  }

  return answer;
};

// Example Test Cases
// console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]])); // [false]
// console.log(
//   isArraySpecial(
//     [4, 3, 1, 6],
//     [
//       [0, 2],
//       [2, 3],
//     ]
//   )
// ); // [false, true]
