// 237 => Maximum Value of an Ordered Triplet I

// You are given a 0-indexed integer array nums.
// Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.
// The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

// Example 1:

// Input: nums = [12,6,1,2,7]
// Output: 77
// Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
// It can be shown that there are no ordered triplets of indices with a value greater than 77.
// Example 2:

// Input: nums = [1,10,3,4,19]
// Output: 133
// Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
// It can be shown that there are no ordered triplets of indices with a value greater than 133.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
// Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.

function maximumTripletValue(nums) {
  let ans = 0;
  let compareVal = -Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i < j < k) {
          ans = (nums[i] - nums[j]) * nums[k];
          ans = Math.max(ans, compareVal);
          compareVal = ans;
        }
      }
    }
  }
  return ans < 0 ? 0 : ans;
}

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
// console.log(maximumTripletValue([1, 10, 3, 4, 19]));
// console.log(maximumTripletValue([1, 2, 3]));

function areaOfMaxDiagnol(nums) {
  let ans = 0;
  let res = 0;

  for (const [key, value] of nums) {
    const diagnol = Math.sqrt(key * key + value * value);

    if (diagnol > ans || (diagnol === ans && key * value > res)) {
      ans = diagnol;
      res = key * value;
    }
  }
  return res;
}

// console.log(
//   areaOfMaxDiagnol([
//     [9, 3],
//     [8, 6],
//   ])
// );
// console.log(
//   areaOfMaxDiagnol([
//     [3, 4],
//     [4, 3],
//   ])
// );

// 238 => Number of Beautiful Pairs

// You are given a 0-indexed integer array nums. A pair of indices i, j where 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and the last digit of nums[j] are coprime.

// Return the total number of beautiful pairs in nums.

// Two integers x and y are coprime if there is no integer greater than 1 that divides both of them. In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y) is the greatest common divisor of x and y.

// Example 1:

// Input: nums = [2,5,1,4]
// Output: 5
// // // Explanation: There are 5 beautiful pairs in nums:
// // // // When i = 0 and j = 1: the first digit of nums[0] is 2, and the last digit of nums[1] is 5. We can confirm that 2 and 5 are coprime, since gcd(2,5) == 1.
// // // // When i = 0 and j = 2: the first digit of nums[0] is 2, and the last digit of nums[2] is 1. Indeed, gcd(2,1) == 1.
// // // When i = 1 and j = 2: the first digit of nums[1] is 5, and the last digit of nums[2] is 1. Indeed, gcd(5,1) == 1.
// // When i = 1 and j = 3: the first digit of nums[1] is 5, and the last digit of nums[3] is 4. Indeed, gcd(5,4) == 1.
// When i = 2 and j = 3: the first digit of nums[2] is 1, and the last digit of nums[3] is 4. Indeed, gcd(1,4) == 1.
// Thus, we return 5.
// Example 2:

// Input: nums = [11,21,12]
// Output: 2
// Explanation: There are 2 beautiful pairs:
// When i = 0 and j = 1: the first digit of nums[0] is 1, and the last digit of nums[1] is 1. Indeed, gcd(1,1) == 1.
// When i = 0 and j = 2: the first digit of nums[0] is 1, and the last digit of nums[2] is 2. Indeed, gcd(1,2) == 1.
// Thus, we return 2.

function countBeautifulPairs(nums) {
  function GCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  let counter = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const firstNumber = +nums[i].toString().charAt(0);
    for (let j = i + 1; j < nums.length; j++) {
      const secondNumber = +nums[j].toString().at(-1);
      const result = GCD(firstNumber, secondNumber);
      if (result === 1) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(countBeautifulPairs([2, 5, 1, 4]));
// console.log(countBeautifulPairs([11, 21, 12]));
