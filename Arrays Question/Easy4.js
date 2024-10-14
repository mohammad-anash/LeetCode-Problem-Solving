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

// 239 => Longest Even Odd Subarray With Threshold
// You are given a 0-indexed integer array nums and an integer threshold.

// Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:

// nums[l] % 2 == 0
// For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
// For all indices i in the range [l, r], nums[i] <= threshold
// Return an integer denoting the length of the longest such subarray.

// Note: A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [3,2,5,4], threshold = 5
// Output: 3
// // // Explanation: In this example, we can select the subarray that starts at l = 1 and ends at r = 3 => [2,5,4]. This subarray satisfies the conditions.
// // Hence, the answer is the length of the subarray, 3. We can show that 3 is the maximum possible achievable length.
// Example 2:

// Input: nums = [1,2], threshold = 2
// Output: 1
// Explanation: In this example, we can select the subarray that starts at l = 1 and ends at r = 1 => [2].
// It satisfies all the conditions and we can show that 1 is the maximum possible achievable length.
// Example 3:

// Input: nums = [2,3,4,5], threshold = 4
// Output: 3
// Explanation: In this example, we can select the subarray that starts at l = 0 and ends at r = 2 => [2,3,4].
// It satisfies all the conditions.
// Hence, the answer is the length of the subarray, 3. We can show that 3 is the maximum possible achievable length.

function longestAlternatingSubArray(nums, threshold) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      let currentLength = 1;

      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] <= threshold && nums[j] % 2 !== nums[j - 1] % 2) {
          currentLength++;
        } else {
          break;
        }
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

// console.log(longestAlternatingSubArray([3, 2, 5, 4], 5));
// console.log(longestAlternatingSubArray([1, 2], 2));

// 240 => Find the Number of Good Pairs I

// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.
// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).
// Return the total number of good pairs.

// Example 1:
// Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1
// Output: 5
// Explanation:

// The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
// Example 2:
// Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3
// Output: 2
// Explanation:
// The 2 good pairs are (3, 0) and (3, 1)

function numbersOfPair(nums1, nums2, k) {
  let counter = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const val = nums2[j] * k;
      if (nums1[i] % val === 0) counter++;
    }
  }
  return counter;
}

// console.log(numbersOfPair([1, 3, 4], [1, 3, 4], 1));
// console.log(numbersOfPair([1, 2, 4, 12], [2, 4], 3));

// 241 => Maximum Height of a Triangle

// You are given two integers red and blue representing the count of red and blue colored balls. You have to arrange these balls to form a triangle such that the 1st row will have 1 ball, the 2nd row will have 2 balls, the 3rd row will have 3 balls, and so on.
// All the balls in a particular row should be the same color, and adjacent rows should have different colors.
// Return the maximum height of the triangle that can be achieved.

// Example 1:
// Input: red = 2, blue = 4
// Output: 3
// Explanation:

// The only possible arrangement is shown above.
// Example 2:
// Input: red = 2, blue = 1
// Output: 2
// Explanation:

// The only possible arrangement is shown above.
// Example 3:
// Input: red = 1, blue = 1
// Output: 1
// Example 4:
// Input: red = 10, blue = 1
// Output: 2
// Explanation:
// The only possible arrangement is shown above.

function maxHeightOfTriangle(red, blue) {
  let height = 0;

  for (let i = 1; i <= red + blue; i++) {
    if (i % 2 === 0) {
      if (red >= i) {
        red -= i;
        height++;
      } else {
        break;
      }
    } else {
      if (blue >= i) {
        blue -= i;
        height++;
      } else {
        break;
      }
    }
  }

  return height; // Return the maximum height of the triangle
}

// Test cases
// console.log(maxHeightOfTriangle(2, 4)); // Output: 3
// console.log(maxHeightOfTriangle(2, 1)); // Output: 2
// console.log(maxHeightOfTriangle(1, 1)); // Output: 1
// console.log(maxHeightOfTriangle(10, 1)); // Output: 2
// console.log(maxHeightOfTriangle(4, 9)); // Output: 4

const rearrangeSpaces = (s) => {
  // Split the string into words and filter out empty spaces
  const wordCounter = s.split(' ').filter((word) => word);

  // Count total spaces
  let spaceCounter = 0;
  for (const char of s) {
    if (char === ' ') {
      spaceCounter++;
    }
  }

  // If there is only one word, all spaces go to the end
  if (wordCounter.length === 1) {
    return wordCounter[0] + ' '.repeat(spaceCounter);
  }

  // Calculate spaces between words and extra spaces
  const spacesBetweenWords = Math.floor(
    spaceCounter / (wordCounter.length - 1)
  );
  const extraSpaces = spaceCounter % (wordCounter.length - 1);

  let ans = '';

  // Add words with spaces in between, except for the last word
  for (let i = 0; i < wordCounter.length - 1; i++) {
    ans += wordCounter[i] + ' '.repeat(spacesBetweenWords);
  }

  // Add the last word
  ans += wordCounter[wordCounter.length - 1];

  // Add remaining spaces to the end
  ans += ' '.repeat(extraSpaces);

  return ans;
};

// // Example usage:
// console.log(rearrangeSpaces("  this   is  a sentence "));
// console.log(rearrangeSpaces(" practice   makes   perfect"));

// 243 => Final Array State After K Multiplication Operations I

// You are given an integer array nums, an integer k, and an integer multiplier.
// You need to perform k operations on nums. In each operation:

// Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
// Replace the selected minimum value x with x * multiplier.
// Return an integer array denoting the final state of nums after performing all k operations.

// Example 1:
// // Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
// Output: [8,4,6,5,6]
// Explanation:

// Operation	Result
// // After operation 1	[2, 2, 3, 5, 6]
// // // After operation 2	[4, 2, 3, 5, 6]
// // // After operation 3	[4, 4, 3, 5, 6]
// // // After operation 4	[4, 4, 6, 5, 6]
// // After operation 5	[8, 4, 6, 5, 6]
// Example 2:

// Input: nums = [1,2], k = 3, multiplier = 4
// Output: [16,8]
// Explanation:

function getFinalState(nums, k, multiplier) {
  const ans = [];
  let updateMin;

  for (let i = 0; i < k; i++) {
    updateMin = Math.min(...nums);
    const index = nums.indexOf(updateMin);
    nums[index] = nums[index] * multiplier;
  }
  return nums;
}

// console.log(getFinalState([2,1,3,5,6], 5, 2));
// console.log(getFinalState([1, 2], 3, 4));

// 244 => Find Subsequence of Length K With the Largest Sum

// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

// Return any such subsequence as an integer array of length k.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
// Example 2:

// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation:
// The subsequence has the largest sum of -1 + 3 + 4 = 6.
// Example 3:

// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7.
// Another possible subsequence is [4, 3].

function maxSubsequence(nums, k) {
  let ans = -Infinity;
  let res;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const partOfArr = nums.slice(i, j);
      console.log(partOfArr);

      if (partOfArr.length === k) {
        const sum = partOfArr.reduce((sum, current) => sum + current, 0);
        if (sum > ans) {
          ans = sum;
          res = partOfArr;
        }
      }
    }
  }
  // return res;
}

// console.log(maxSubsequence([2, 1, 3, 3], 2))
// console.log(maxSubsequence([-1, -2, 3, 4], 3));
// console.log(maxSubsequence([3, 4, 3, 3], 2));

// 245 => Find Indices of Stable Mountains

// There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.

// A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.

// Return an array containing the indices of all stable mountains in any order.

// Example 1:
// Input: height = [1,2,3,4,5], threshold = 2
// Output: [3,4]
// Explanation:

// Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
// Mountain 4 is stable because height[3] == 4 is greater than threshold == 2.
// Example 2:

// Input: height = [10,1,10,1,10], threshold = 3
// Output: [1,3]
// Example 3:
// Input: height = [10,1,10,1,10], threshold = 10
// Output: []

function stableMountain(nums, thresold) {
  const ans = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > thresold) {
      ans.push(i);
    }
  }
  return ans;
}

// console.log(stableMountain([1, 2, 3, 4, 5], 2));
// console.log(stableMountain([10, 1, 10, 1, 10], 3));

// 246 => You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

// Example 1:
// // Input: nums = [1,2,3,4,10]
// Output: false
// Explanation:
// Alice cannot win by choosing either single-digit or double-digit numbers.

// Example 2:
// // Input: nums = [1,2,3,4,5,14]
// Output: true
// Explanation:
// Alice can win by choosing single-digit numbers which have a sum equal to 15.

// Example 3:
// // Input: nums = [5,5,5,25]
// Output: true
// Explanation:
// Alice can win by choosing double-digit numbers which have a sum equal to 25.

function canAliceWin(nums) {
  let singleDigitSum = 0;
  let doubleDigitSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 9) {
      singleDigitSum += nums[i];
    } else {
      doubleDigitSum += nums[i];
    }
  }
  return singleDigitSum > doubleDigitSum || doubleDigitSum > singleDigitSum
    ? true
    : false;
}

// console.log(canAliceWin([1, 2, 3, 4, 10]));
// console.log(canAliceWin([1, 2, 3, 4, 5, 10]));
// console.log(canAliceWin([5, 5, 5, 25]));

// 247 => Left and Right Sum Differences

// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// // Output: [15,1,11,22]
// // Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

function leftRightDifference(nums) {
  let leftSum = 0;
  let rightSum = 0;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined) leftSum = 0;
    else leftSum += nums[i - 1];

    rightSum = nums.slice(i + 1).reduce((sum, current) => sum + current, 0);
    result.push(Math.abs(leftSum - rightSum));
  }
  // return result;
}

// console.log(leftRightDifference([10, 4, 8, 3]));

// 248 => You are given an integer array nums.

// You replace each element in nums with the sum of its digits.

// Return the minimum element in nums after all replacements.

// Example 1:
// // Input: nums = [10,12,13,14]
// Output: 1
// // Explanation:
// nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 1
// Explanation:
// nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

// Example 3:
// Input: nums = [999,19,199]
// Output: 10
// Explanation:
// nums becomes [27, 10, 19] after all replacements, with minimum element 10.

function minElement(nums) {
  const values = [];

  for (const num of nums) {
    let sum = 0;
    num
      .toString()
      .split('')
      .forEach((val) => {
        sum += +val;
      });

    values.push(sum);
  }
  return Math.min(...values);
}

// console.log(minElement([10, 12, 13, 14]));
// console.log(minElement([1, 2, 3, 4]));
// console.log(minElement([999, 19, 99]));
// console.log(minElement([97]));
