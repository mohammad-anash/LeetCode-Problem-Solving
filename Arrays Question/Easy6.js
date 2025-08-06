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

// 375 => Palimdrom Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalimdrom = (x) => {
  return +x.toString().split('').reverse().join('') === x;
};

// console.log(isPalimdrom(121));
// console.log(isPalimdrom(123));

// 376 => Maximum Value of an Ordered Triplet II

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
//
function maximumTripletValue(nums) {
  const n = nums.length;
  if (n < 3) return 0;

  const max_Left = new Array(n).fill(0);
  max_Left[0] = -Infinity;
  for (let i = 1; i < n; i++) {
    max_Left[i] = Math.max(max_Left[i - 1], nums[i - 1]);
  }

  const max_Right = new Array(n).fill(0);
  max_Right[n - 1] = -Infinity;
  for (let j = n - 2; j >= 0; j--) {
    max_Right[j] = Math.max(max_Right[j + 1], nums[j + 1]);
  }

  let maxTriplet = 0;
  for (let j = 1; j < n - 1; j++) {
    const current = (max_Left[j] - nums[j]) * max_Right[j];
    maxTriplet = Math.max(maxTriplet, current);
  }

  return maxTriplet > 0 ? maxTriplet : 0;
}

// console.log(maximumTripletValue([12, 6, 1, 2, 7]));
// console.log(maximumTripletValue([1, 10, 3, 4, 19]));
// console.log(maximumTripletValue([1, 2, 3]));

// 377 =>  Divisible and Non-divisible Sums Difference

// You are given positive integers n and m.
// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

// Example 1:

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.
// Example 2:

// Input: n = 5, m = 6
// Output: 15
// // Explanation: In the given example:
// // - Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// - Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// We return 15 - 0 = 15 as the answer.
// Example 3:

// Input: n = 5, m = 1
// Output: -15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
// - Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
// We return 0 - 15 = -15 as the answer.

const differenceOfNums = (n, m) => {
  let nonSumDivisible = 0;
  let divisibleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisibleSum += i;
    } else {
      nonSumDivisible += i;
    }
  }
  return nonSumDivisible - divisibleSum;
};

// console.log(differenceOfNums(10, 3));
// console.log(differenceOfNums(5, 6));
// console.log(differenceOfNums(5, 1));

// 378 => Count Pairs That Form a Complete Day II

// Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

// A complete day is defined as a time duration that is an exact multiple of 24 hours.
// For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

// Example 1:
// Input: hours = [12,12,30,24,24]
// Output: 2
// Explanation: The pairs of indices that form a complete day are (0, 1) and (3, 4).

// Example 2:
// // Input: hours = [72,48,24,3]
// Output: 3
// Explanation: The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).

function countCompleteDaysPair(hours) {
  const remainderFreq = new Map();
  let count = 0;

  for (const hour of hours) {
    const remainder = hour % 24;
    const complement = (24 - remainder) % 24;

    if (remainderFreq.has(complement)) {
      count += remainderFreq.get(complement);
    }

    remainderFreq.set(remainder, (remainderFreq.get(remainder) || 0) + 1);
  }

  return count;
}

// console.log(countCompleteDaysPair([12, 12, 30, 24, 24]));
// console.log(countCompleteDaysPair([72, 48, 24, 3]));

// 379 => Find the Encrypted String

// You are given a string s and an integer k. Encrypt the string using the following algorithm:

// For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
// Return the encrypted string.

// Example 1:
// Input: s = "dart", k = 3
// Output: "tdar"
// Explanation:
// _
// For i = 0, the 3rd character after 'd' is 't'.
// For i = 1, the 3rd character after 'a' is 'd'.
// For i = 2, the 3rd character after 'r' is 'a'.
// For i = 3, the 3rd character after 't' is 'r'.

// Example 2:
// Input: s = "aaa", k = 1
// Output: "aaa"
// Explanation:
// As all the characters are the same, the encrypted string will also be the same

const getEncryptedString = (s, k) => {
  if (s.length === 0) return s; // Edge case: empty string
  let encryptedString = '';
  for (let i = 0; i < s.length; i++) {
    const newIndex = (i + k) % s.length; // Wrap around using modulo
    encryptedString += s[newIndex];
  }
  return encryptedString;
};

// console.log(getEncryptedString('dart', 3));
// console.log(getEncryptedString('aaa', 1));
// console.log(getEncryptedString('byd', 4));
// console.log(getEncryptedString('c', 4));

// 380 => find n-th value after k second

// You are given two integers n and k.

// Initially, you start with an array a of n integers where a[i] = 1 for all 0 <= i <= n - 1. After each second, you simultaneously update each element to be the sum of all its preceding elements plus the element itself. For example, after one second, a[0] remains the same, a[1] becomes a[0] + a[1], a[2] becomes a[0] + a[1] + a[2], and so on.

// Return the value of a[n - 1] after k seconds.

// Since the answer may be very large, return it modulo 109 + 7.

// Example 1:
// Input: n = 4, k = 5
// Output: 56
// Explanation:

// Second	State After
// 0	[1,1,1,1]
// 1	[1,2,3,4]
// 2	[1,3,6,10]
// 3	[1,4,10,20]
// 4	[1,5,15,35]
// 5	[1,6,21,56]
// Example 2:
// Input: n = 5, k = 3
// Output: 35
// Explanation:

// Second	State After
// 0	[1,1,1,1,1]
// 1	[1,2,3,4,5]
// 2	[1,3,6,10,15]
// 3	[1,4,10,20,35]

const valueAfterKSeconds = (n, k) => {
  let prefixSum = new Array(n).fill(1);
  for (let i = 1; i <= k; i++) {
    const newPrefixSum = [...prefixSum]; // Copy previous state
    for (let j = 1; j < n; j++) {
      newPrefixSum[j] = (prefixSum[j] + newPrefixSum[j - 1]) % (1e9 + 7);
    }
    prefixSum = newPrefixSum; // Update after full step
  }
  return prefixSum.at(-1);
};

// console.log(valueAfterKSeconds(4, 5));

// 381 => Find the Count of Numbers Which Are Not Special

// You are given 2 positive integers l and r. For any number x, all positive divisors of x except x are called the proper divisors of x.

// A number is called special if it has exactly 2 proper divisors. For example:

// The number 4 is special because it has proper divisors 1 and 2.
// The number 6 is not special because it has proper divisors 1, 2, and 3.
// Return the count of numbers in the range [l, r] that are not special.

// Example 1:
// // Input: l = 5, r = 7
// Output: 3
// // Explanation:
// There are no special numbers in the range [5, 7].

// Example 2:
// // Input: l = 4, r = 16
// Output: 11
// // Explanation:
// The special numbers in the range [4, 16] are 4 and 9.

const nonSpecialCount = (l, r) => {
  let count = 0;

  for (let i = l; i <= r; i++) {
    let properDivisor = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        properDivisor++;
      }
    }
    if (properDivisor !== 2) {
      count++;
    }
  }
  return count;
};

// console.log(nonSpecialCount(5, 7));
// console.log(nonSpecialCount(4, 16));

// 382 =>  Reverse Degree of a String

// Given a string s, calculate its reverse degree.
// The reverse degree is calculated as follows:

// For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
// Sum these products for all characters in the string.
// Return the reverse degree of s.

// Input: s = "abc"
// Output: 148
// Explanation:
// Letter	Index in Reversed Alphabet	Index in String	Product
// 'a'	26	1	26
// 'b'	25	2	50
// 'c'	24	3	72
// The reversed degree is 26 + 50 + 72 = 148.

// Example 2:
// Input: s = "zaza"
// Output: 160
// Explanation:

// Letter	Index in Reversed Alphabet	Index in String	Product
// 'z'	1	1	1
// 'a'	26	2	52
// 'z'	1	3	3
// 'a'	26	4	104
// The reverse degree is 1 + 52 + 3 + 104 = 160

const reverseDegree = (s) => {
  let alphabets = '';
  let result = 0;

  for (let i = 122; i >= 97; i--) {
    alphabets += String.fromCharCode(i);
  }

  for (let j = 0; j < s.length; j++) {
    const findIndex = alphabets.indexOf(s[j]) + 1;
    result += findIndex * (j + 1);
  }
  return result;
};

// console.log(reverseDegree('abc'));
// console.log(reverseDegree('zaza'));

// 383 => Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

function myPow(x, n) {
  return Math.pow(x, n);
}

// console.log(myPow(2.0, 10));

// 384 => Count Square Sum Triples

// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

// Example 1:

// Input: n = 5
// Output: 2
// // Explanation: The square triples are (3,4,5) and (4,3,5).
// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

function countSquareTriples(n) {
  let count = 0;

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cSquared = a * a + b * b;
      const c = Math.sqrt(cSquared);

      if (c === Math.floor(c) && c <= n) {
        count++;
      }
    }
  }
  return count;
}

// console.log(countTriples(5));
// console.log(countTriples(10));

// Check  valid parantheses

const isBalanceParan = (str) => {
  let countValidParan = 0;

  for (const ch of str) {
    if (ch === '(') {
      ++countValidParan;
    } else {
      --countValidParan;
      if (countValidParan < 0) {
        return false;
      }
    }
  }
  return countValidParan === 0;
};

// console.log(isBalanceParan('()'));
// console.log(isBalanceParan('(()));

// const fabSeries = (n) => {
//   const nums = [0, 1];

//   for (let i = 1; i <= n; i++) {
//     const x = nums[i - 1] + nums[i];
//     nums.push(x);
//   }

//   return nums;
// };

// console.log(fabSeries());

// 385 =>  Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const productExceptSelf = (nums) => {
  let res = [];
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  prefix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= prefix;
    prefix *= nums[i];
  }

  return res;
};

// console.log(productExceptSelf([1, 2, 3, 4]));

// 386 => Replace All Digits with Characters

// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
// You must perform an operation shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with the result of the shift(s[i-1], s[i]) operation.

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
// Note that shift(c, x) is not a preloaded function, but an operation to be implemented as part of the solution.

// Example 1:

// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:

// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'

const replaceDigits = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      res += str[i];
    } else {
      // previous character + digit
      let shifted = String.fromCharCode(str[i - 1].charCodeAt() + +str[i]);
      res += shifted;
    }
  }
  return res;
};

// console.log(replaceDigits('a1c1e1'));
// console.log(replaceDigits('a1b2c3d4e'))

// 387 => Number of Steps to Reduce a Number to Zero

// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

const numbersOfStep = (n) => {
  let countStep = 0;

  while (n != 0) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n - 1;
    }
    countStep++;
  }
  return countStep;
};

// console.log(numbersOfStep(14));
// console.log(numbersOfStep(8));

// 388 => Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example 1:
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

const sortTheSentence = (sentence) => {
  const ans = [];

  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    const num = +sentence[i].at(-1) - 1;
    for (let j = 0; j < sentence.length; j++) {
      if (num == j) {
        ans[j] = sentence[i].slice(0, sentence[i].length - 1);
      }
    }
  }

  return ans.join(' ');
};

// console.log(sortTheSentence('is2 sentence4 This1 a3'));

// 389 => Check if Numbers Are Ascending in a Sentence

// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

// Return true if so, or false otherwise.

// Example 1:

// example-1
// Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.
// Example 2:

// Input: s = "hello world 5 x 5"
// Output: false
// Explanation: The numbers in s are: 5, 5. They are not strictly increasing.
// Example 3:

// example-3
// Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
// Output: false
// Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.

const areNumbersAscending = (s) => {
  s = s.split(' ');

  const nums = s.filter((n) => Number.isInteger(+n));

  for (let i = 0; i < nums.length - 1; i++) {
    if (+nums[i] >= +nums[i + 1]) {
      return false;
    }
  }

  return true;
};

// console.log(
//   areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')
// );

// console.log(areNumbersAscending('hello world 5 x 5'));

// console.log(
//   areNumbersAscending(
//     'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'
//   )
// );

// 390 => Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [
//   [3, 2],
//   [1, 0],
// ];
// Output: 0;

const countNegatives = (nums) => {
  const oneDArray = nums.flat();
  return oneDArray.filter((nums) => nums < 0).length;
};

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );
// console.log(
//   countNegatives([
//     [3, 2],
//     [1, 0],
//   ])
// );

// 391 => Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// // Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// // - [1,2,2,1]
// // - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]

const countKDifference = (nums, k) => {
  let countPair = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i < j && Math.abs(nums[i] - nums[j]) === k) {
        countPair++;
      }
    }
  }
  return countPair;
};

// console.log(countKDifference([1, 2, 2, 1], 1));

// 392 => Matrix Diagnol Sum;

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example 1:

// Input: mat = [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
// // [1,1,1,1],
// // [1,1,1,1],
// [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
function diagonalSum(mat) {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i]; // primary diagonal
    sum += mat[i][n - 1 - i]; // secondary diagonal
  }

  if (n % 2 === 1) {
    // remove the middle element which was added twice
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return sum;
}

// Example usage:
// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// ); // Output: 25
// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// ); // Output: 8
// console.log(diagonalSum([[5]])); // Output: 5

// 393 => Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

// 394 =>  Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// // Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

const replaceElements = (nums) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let max = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }
    res.push(max);
  }
  return res;
};

// console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// console.log(replaceElements([400]));

const reverseVowel = (s) => {
  const vowels = 'aeiouAEIOU';
  const storeIndex = [];
  let storeVowel = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      storeIndex.push(i);
      storeVowel += s[i];
    }
  }

  storeVowel = storeVowel.split('').reverse();

  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (storeIndex.includes(i)) {
      res += storeVowel[j++];
    } else {
      res += s[i];
    }
  }

  return res;
};

// console.log(reverseVowel('IceCreAm));
