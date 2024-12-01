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

// 249 => In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Example 1:
// // Input: nums = [0,1,1,0]
// Output: [0,1]
// Explanation:
// The numbers 0 and 1 each appear twice in the array.

// Example 2:
// // Input: nums = [0,3,2,1,3,2]
// Output: [2,3]
// Explanation:
// The numbers 2 and 3 each appear twice in the array.

// Example 3:
// Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]
// Output: [4,5]
// Explanation:
// The numbers 4 and 5 each appear twice in the array.

function getSneakyNumbers(nums) {
  nums = nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) {
      ans.push(nums[i]);
    }
  }
  return ans;
}

// console.log(getSneakyNumbers([0, 1, 1, 0]));
// console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
// console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
// console.log(getSneakyNumbers([2, 0, 1, 2, 1]));

// 250 =>  Find the Maximum Divisibility Score

// You are given two integer arrays nums and divisors.
// The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].
// Return the integer divisors[i] with the maximum divisibility score. If multiple integers have the maximum score, return the smallest one.

// Example 1:
// // Input: nums = [2,9,15,50], divisors = [5,3,7,2]
// Output: 2
// // Explanation:
// // The divisibility score of divisors[0] is 2 since nums[2] and nums[3] are divisible by 5.
// The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 3.
// // The divisibility score of divisors[2] is 0 since none of the numbers in nums is divisible by 7.
// The divisibility score of divisors[3] is 2 since nums[0] and nums[3] are divisible by 2.
// As divisors[0], divisors[1], and divisors[3] have the same divisibility score, we return the smaller one which is divisors[3].

// Example 2:
// // Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// // Explanation:
// // The divisibility score of divisors[0] is 0 since none of numbers in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since only nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3] and nums[4] are divisible by 3.

// Example 3:
// Input: nums = [20,14,21,10], divisors = [10,16,20]
// Output: 10
// Explanation:
// The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 10.
// The divisibility score of divisors[1] is 0 since none of the numbers in nums is divisible by 16.
// The divisibility score of divisors[2] is 1 since nums[0] is divisible by 20.

function maxDivScore(nums, divisors) {
  let res = -Infinity;
  let counter;
  let updateRes;

  for (let i = 0; i < divisors.length; i++) {
    counter = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) counter++;
    }

    if (counter > res || (counter === res && divisors[i] < updateRes)) {
      res = counter;
      updateRes = divisors[i];
    }
  }
  return updateRes;
}

// console.log(maxDivScore([2, 9, 15, 50], [5, 3, 7, 2]));
// console.log(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]));
// console.log(maxDivScore([10, 14, 21, 10], [10, 16, 20]));
// console.log(maxDivScore([73, 13, 20, 6], [56, 75, 83, 26, 24, 53, 56, 61]));

// 251 => Check If All 1's Are at Least Length K Places Away

// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

// Example 1:

// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// // Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:

// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.

function kLengthAPart(nums, k) {
  const storeIndexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) storeIndexes.push(i);
  }

  for (let j = 0; j < storeIndexes.length - 1; j++) {
    const different = Math.abs(storeIndexes[j] - storeIndexes[j + 1]) - 1;

    if (different < k) return false;
  }
  return true;
}

// console.log(kLengthAPart([1, 0, 0, 0, 1, 0, 0, 1], 2));
// console.log(kLengthAPart([1, 0, 0, 1, 0, 1], 2));

// 256 =>  You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:
//
// -1 represents there is no fort at the ith position.
// 0 indicates there is an enemy fort at the ith position.
// 1 indicates the fort at the ith the position is under your command.
// Now you have decided to move your army from one of your forts at position i to an empty position j such that:

// 0 <= i, j <= n - 1
// The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
// While moving the army, all the enemy forts that come in the way are captured.

// Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.

// Example 1:

// Input: forts = [1,0,0,-1,0,0,0,0,1]
// Output: 4
// Explanation:
// // // - Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
// // // - Moving the army from position 8 to position 3 captures 4 enemy forts.
// // Since 4 is the maximum number of enemy forts that can be captured, we return 4.
// Example 2:

// Input: forts = [0,0,1,-1]
// Output: 0
// Explanation: Since no enemy fort can be captured, 0 is returned.

function captureForts(forts) {
  let res = 0;
  for (let i = 0, j = 0; j < forts.length; i++) {
    if (forts[i] !== 0) {
      if (forts[i] === -forts[j]) {
        res = Math.max(res, i - j - 1);
      }
      j = i;
    }
  }
  return res;
}

// console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])); // Output: 4
// console.log(captureForts([0, 0, 1, -1])); // Output: 0
// console.log(captureForts([1, 0, 0, -1, 0, 0, -1, 0, 0, 1])); // Output: 2
// console.log(captureForts([1, 0, 0, -1, 0, 1])); // Output: 2

// 257 => Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// // Explanation:
// // // // The input array has a degree of 2 because both elements 1 and 2 appear twice.
// // // Of the subarrays that have the same degree:
// // [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

function findShortestSubArr(nums) {
  let obj = {};
  let firstIndex = {};
  let maxNum = 0;
  let minLen = nums.length;

  nums.forEach((num, i) => {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
      firstIndex[num] = i;
    }

    if (obj[num] > maxNum) {
      maxNum = obj[num];
    }
  });

  for (let num in obj) {
    if (obj[num] === maxNum) {
      let length = nums.lastIndexOf(parseInt(num)) - firstIndex[num] + 1;
      minLen = Math.min(minLen, length);
    }
  }

  return minLen;
}

// console.log(findShortestSubArr([1, 2, 2, 3, 1])); // Output: 2
// console.log(findShortestSubArr([1, 2, 2, 3, 1, 4, 2])); // Output: 6

// 258 =>

// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

function domainAntIndex(nums) {
  const maxNum = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== maxNum && nums[i] * 2 > maxNum) {
      return -1;
    }
  }
  return nums.indexOf(maxNum);
}

// console.log(domainAntIndex([3, 6, 1, 0]));
// console.log(domainAntIndex([1, 2, 3, 4]));

// 259 => Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

function checkStraightLine(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    const [y2, y1, x2, x1] = [
      nums[i + 1][1],
      nums[i][1],
      nums[i + 1][0],
      nums[i][0],
    ];
    if (x2 * y1 !== y2 * x1) {
      return false;
    }
  }
  return true;
}

// console.log(
//   checkStraightLine([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [6, 7],
//   ])
// );
// console.log(
//   checkStraightLine([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [7, 7],
//   ])
// );

// 260 => Count Pairs That Form a Complete Day I

// Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

// A complete day is defined as a time duration that is an exact multiple of 24 hours.
// For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

// Example 1:
// Input: hours = [12,12,30,24,24]
// Output: 2
// Explanation:
// The pairs of indices that form a complete day are (0, 1) and (3, 4).

// Example 2:
// Input: hours = [72,48,24,3]
// Output: 3
// Explanation:
// The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).

function countCompleteDaysPair(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) % 24 === 0) {
        counter++;
      }
    }
  }
  return counter;
}

// console.log(countCompleteDaysPair([12, 12, 30, 24, 24])); // Output: 2
// console.log(countCompleteDaysPair([72, 48, 24, 0])); // Output: 3

// 261 => Get Maximum Generated Array

// You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

// Example 1:

// Input: n = 7
// Output: 3
// Explanation: According to the given rules:
// nums[0] = 0
// nums[1] = 1
// nums[(1 * 2) = 2] = nums[1] = 1
// nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
// nums[(2 * 2) = 4] = nums[2] = 1
// nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
// nums[(3 * 2) = 6] = nums[3] = 2
// nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) = 3.
// Example 2:

// Input: n = 2
// Output: 1
// Explanation: According to the given rules, nums = [0,1,1]. The maximum is max(0,1,1) = 1.
// Example 3:

// Input: n = 3
// Output: 2
// Explanation: According to the given rules, nums = [0,1,1,2]. The maximum is max(0,1,1,2) = 2.

function getMaximumGenerated(n) {
  if (n === 0) return n;
  if (n === 1) return n;
  let ans = [0, 1];

  for (let i = 1; i <= n; i++) {
    if (2 * i <= n) {
      ans[2 * i] = ans[i];
    }
    if (2 * i + 1 <= n) {
      ans[2 * i + 1] = ans[i] + ans[i + 1];
    }
  }

  return Math.max(...ans);
}

// console.log(getMaximumGenerated(7));
// console.log(getMaximumGenerated(1));
// console.log(getMaximumGenerated(3));

// 261 =>  Minimum Difference Between Highest and Lowest of K Scores

// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

function minimumDifference(nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= nums.length - k; i++) {
    const diff = nums[i + k - 1] - nums[i];
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

// console.log(minimumDifference([90], 1));

// 262 => X of a Kind in a Deck of Cards

// You are given an integer array deck where deck[i] represents the number written on the ith card.
// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

function hasGroupsSizeX(deck) {
  const countMap = {};
  for (let card of deck) {
    countMap[card] = (countMap[card] || 0) + 1;
  }

  const counts = Object.values(countMap);

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  let groupGCD = counts[0];
  for (let count of counts) {
    groupGCD = gcd(groupGCD, count);
    if (groupGCD === 1) return false;
  }

  return groupGCD > 1;
}

// Test cases
// console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));

// 263 => Remove One Element to Make the Array Strictly Increasing

// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.
// Example 2:

// Input: nums = [2,3,1,2]
// Output: false
// Explanation:
// // // [3,1,2] is the result of removing the element at index 0.
// // // [2,1,2] is the result of removing the element at index 1.
// // // [2,3,2] is the result of removing the element at index 2.
// // [2,3,1] is the result of removing the element at index 3.
// No resulting array is strictly increasing, so return false.
// Example 3:

// Input: nums = [1,1,1]
// Output: false
// Explanation: The result of removing any element is [1,1].
// [1,1] is not strictly increasing, so return false.

function canBeIncreasing(nums) {
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      counter++;
      if (counter > 1) {
        return false;
      }

      // Check by removing nums[i-1] or nums[i]
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
}

// console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true

// 264 => Smallest Index With Equal Value

// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

// Example 1:

// Input: nums = [0,1,2]
// Output: 0
// Explanation:
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.
// Example 2:

// Input: nums = [4,3,2,1]
// Output: 2
// Explanation:
// // i=0: 0 mod 10 = 0 != nums[0].
// // i=1: 1 mod 10 = 1 != nums[1].
// // i=2: 2 mod 10 = 2 == nums[2].
// // i=3: 3 mod 10 = 3 != nums[3].
// // 2 is the only index which has i mod 10 == nums[i].
// Example 3:

// Input: nums = [1,2,3,4,5,6,7,8,9,0]
// Output: -1
// Explanation: No index satisfies i mod 10 == nums[i].

function findSmallestIndex(nums) {
  let minValue = Number.MAX_SAFE_INTEGER;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i] && i < minValue) {
      minValue = i;
      result = i;
    }
  }
  return result ?? -1;
}

// console.log(findSmallestIndex([0, 8, 3, 4, 0, 4, 9, 8, 0]));
// console.log(findSmallestIndex([0, 1, 2]));

// 265 => Count Hills and Valleys in an Array

// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

// Example 1:
//
// Input: nums = [2,4,1,1,6,5]
// Output: 3
// Explanation:
// At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
// At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill.
// At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
// At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
// At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
// At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley.
// There are 3 hills and valleys so we return 3.
// Example 2:

// Input: nums = [6,6,5,5,4,1]
// Output: 0
// Explanation:
// At index 0: There is no non-equal neighbor of 6 on the left, so index 0 is neither a hill nor a valley.
// At index 1: There is no non-equal neighbor of 6 on the left, so index 1 is neither a hill nor a valley.
// At index 2: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 2 is neither a hill nor a valley.
// At index 3: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 3 is neither a hill nor a valley.
// At index 4: The closest non-equal neighbors of 4 are 5 and 1. Since 4 < 5 and 4 > 1, index 4 is neither a hill nor a valley.
// At index 5: There is no non-equal neighbor of 1 on the right, so index 5 is neither a hill nor a valley.
// There are 0 hills and valleys so we return 0.

function countHillValley(nums) {
  let counter = 0;

  let filteredNums = nums.filter(
    (value, index) => index === 0 || value !== nums[index - 1]
  );

  for (let i = 1; i < filteredNums.length - 1; i++) {
    if (
      (filteredNums[i - 1] < filteredNums[i] &&
        filteredNums[i] > filteredNums[i + 1]) ||
      (filteredNums[i - 1] > filteredNums[i] &&
        filteredNums[i] < filteredNums[i + 1])
    ) {
      counter++;
    }
  }
  return counter;
}

// console.log(countHillValley([2, 4, 1, 1, 6, 5]));
// console.log(countHillValley([6, 6, 5, 5, 4, 1]));

// 266 => find Closest Number To Zero

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

function findClosestNumber(nums) {
  const set = [...new Set(nums)];
  if (set.length === 1) return set[0];

  let closest = set[0];

  for (let i = 1; i < set.length; i++) {
    const current = set[i];
    if (
      Math.abs(current) < Math.abs(closest) || // Closer to zero
      (Math.abs(current) === Math.abs(closest) && current > closest) // Same distance but positive
    ) {
      closest = current;
    }
  }

  return closest;
}

// console.log(findClosestNumber([-4, -2, 1, 4, 8])); // Output: 1

// 267 => Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:
//
// Input: s = "ab##", t = "c#d#"
// Output: true
// // Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

function backspaceCompare(s, t) {
  const processString = (str) => {
    let result = [];
    for (let char of str) {
      if (char === '#') {
        result.pop();
      } else {
        result.push(char);
      }
    }
    return result.join('');
  };

  const processedS = processString(s);
  const processedT = processString(t);
  // return processedS === processedT;
}

// // Test cases
// console.log(backspaceCompare('ab#c', 'ad#c')); // true
// console.log(backspaceCompare('ab##', 'c#d#')); // true
// console.log(backspaceCompare('a#c', 't')); // false
// console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); // fals

// 268 => Merge Interval

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const merge = (arr) => {
  arr.sort((a, b) => a[0] - b[0]); // Sort intervals by start time

  for (let i = 0; i < arr.length - 1; i++) {
    let currentInterval = arr[i];
    let nextInterval = arr[i + 1];

    if (currentInterval[1] >= nextInterval[0]) {
      // Merge intervals if they overlap
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      arr.splice(i + 1, 1); // Remove the next interval
      i--; // Adjust `i` to recheck the current interval with the next one
    }
  }

  return arr;
};

// console.log(
//   merge([
//     [1, 3],
//     [2, 6]
//     [8, 10],
//     [15, 18],
//   ])
// ); // Output: [[1, 6], [8, 10], [15, 18]]

// 269 => Group Anagrams

// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');

    if (!map.has(sortedStr)) {
      map.set(sortedStr, [str]);
    } else {
      map.get(sortedStr).push(str);
    }
  }
  return Array.from(map.values());
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// 267 => Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeroes(nums) {
  let cells = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] === 0) {
        cells.push([i, j]);
      }
    }
  }

  for (let i = 0; i < cells.length; i++) {
    let [row, col] = cells[i];

    nums[row] = nums[row].map(() => 0);

    for (let j = 0; j < nums.length; j++) {
      nums[j][col] = 0;
    }
  }

  return nums;
}

// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

// 268 => top k frequent elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums, k) {
  const obj = {};
  const ans = [];

  nums.forEach((char) => {
    obj[char] = (obj[char] || 0) + 1;
  });

  const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  for (let i = 0; i < k; i++) {
    ans.push(Number(sorted[i]));
  }

  return ans;
}

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// 269 => Maximum Gap

// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

function maximumGap(nums) {
  if (nums.length < 2) return 0;
  let maxDifference = -Infinity;
  nums = nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    maxDifference = Math.max(maxDifference, nums[i] - nums[i - 1]);
  }
  return maxDifference;
}

// console.log(maximumGap([3, 6, 9, 1]));
// console.log(maximumGap([10]));

// 270 => Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

function findErrorNums(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const original = [];

  for (let i = 0; i < nums.length; i++) {
    original.push(i + 1);
    if (nums[i] === nums[i + 1]) {
      result[0] = nums[i];
    }
  }

  for (let i = 0; i < original.length; i++) {
    if (!nums.includes(original[i])) {
      result[1] = original[i];
    }
  }

  return result;
}

// console.log(findErrorNums([1, 2, 2, 4]));
// console.log(findErrorNums([1, 1]));

// 271 => Find All Duplicate In The Array

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

function findDuplicates(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      ans.push(nums[i]);
    }
  }
  return ans;
}

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// Other Approch

function findDuplicates(nums) {
  const ans = [];
  let obj = {};

  nums.forEach((element) => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;

    if (obj[element] === 2) {
      ans.push(element);
    }
  });
  return ans;
}

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// 272 => can Place Flower

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlower(nums, n) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] === 0 &&
      (i === 0 || nums[i - 1] === 0) &&
      (i === nums.length - 1 || nums[i + 1] === 0)
    ) {
      count++;
      nums[i] = 1;
    }
  }

  return count >= n;
}

// console.log(canPlaceFlower([1, 0, 0, 0, 1], 1));

// 273 => Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// // // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

function rotate(nums, k) {
  k = k % nums.length;
  const lastEl = nums.splice(-k);
  nums.unshift(...lastEl);
  return nums;
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// 274 =>  Subarray Product Less Than K

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

const numSubArrProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let pro = 1;

    for (let j = i; j < nums.length; j++) {
      pro *= nums[j];

      if (pro < k) {
        counter++;
      } else {
        break;
      }
    }
  }

  return counter;
};

// console.log(numSubArrProductLessThanK([10, 5, 2, 6], 100)); // 8
// console.log(numSubArrProductLessThanK([1, 2, 3], 0)); // 0
// console.log(numSubArrProductLessThanK([1, 2, 3, 4, 5], 1)); // 0

// 275 =>  Count Substrings With K-Frequency Characters I
// Given a string s and an integer k, return the total number of substrings of s where at least one character appears at least k times.

// Example 1:
// Input: s = "abacb", k = 2
// Output: 4
// Explanation:
// The valid substrings are:

// "aba" (character 'a' appears 2 times).
// "abac" (character 'a' appears 2 times).
// "abacb" (character 'a' appears 2 times).
// "bacb" (character 'b' appears 2 times).

// Example 2:
// Input: s = "abcde", k = 1
// Output: 15
// Explanation:
// All substrings are valid because every character appears at least once.

const numbersOfSubstring = (s, k) => {
  if (k === 1) {
    return (s.length * (s.length + 1)) / 2;
  }

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let freqMap = new Map();

    for (let j = i; j < s.length; j++) {
      const char = s[j];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);

      if ([...freqMap.values()].some((count) => count >= k)) {
        res++;
      }
    }
  }

  return res;
};

// console.log(numbersOfSubstring('abacb', 2)); // Output: 7
// console.log(numbersOfSubstring('abcde', 1)); // Output: 15
// console.log(numbersOfSubstring('hxccgfp', 1)); // Output: 28
// console.log(numbersOfSubstring('shlvvvx', 2)); // Output: 10

// 276 => Longest Substring with At Least K Repeating Characters

// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

// if no such substring exists, return 0.

// Example 1:

// Input: s = "aaabb", k = 3
// Output: 3
// // Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

const longestSubstring = (s, k) => {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let freqMap = new Map();

    for (let j = i; j < s.length; j++) {
      const char = s[j];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);

      if ([...freqMap.values()].every((freq) => freq >= k)) {
        res = Math.max(res, j - i + 1);
      }
    }
  }

  return res;
};

console.log(longestSubstring('aaabb', 3));
console.log(longestSubstring('ababbc', 2));
console.log(longestSubstring('aaabbb', 3));
