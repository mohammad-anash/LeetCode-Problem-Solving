// 1 =>  print Your name n time using recursion

const printNameNTime = (i, n) => {
  if (i > n) return;
  else {
    console.log('anash');
    i++;
  }

  printNameNTime(i, 10);
};

// printNameNTime(0, 10); it print anash n times

// 2 => print counting linearly n time

const printCountingNTime = (i, n) => {
  if (i > n);
  else {
    i++;
    console.log(i);
  }
  printCountingNTime(i, 5);
};

// printCountingNTime(0, 5); it print counting linearly n time

// 3 => print [1, 2, 3, 4] in reverse order

const printInReverseOrder = (n) => {
  if (!n) return;
  else {
    console.log(n);
    n--;
  }
  printInReverseOrder(n);
};

// printInReverseOrder(4);

// 4 => parametized way

const paramatizedWay = (i, sum) => {
  if (i < 1) {
    console.log(sum);
    return;
  } else {
    paramatizedWay(i - 1, sum + i);
  }
};

// paramatizedWay(3, 0);

// 5 => reverse the array using recursion

const reverseArr = (n, arr, updatedArr = []) => {
  if (n >= arr.length) {
    return updatedArr;
  } else {
    updatedArr.push(arr[arr.length - 1 - n]);
    return reverseArr(n + 1, arr, updatedArr);
  }
};

// console.log(reverseArr(0, [1, 2, 3, 4])); // Output: [4, 3, 2, 1]

// 6 => check if the given string is palimdrom or not, if it palimdrom then return true otherwise false

// const isPalimdrom = (i, s = 'madam', n = s.length) => {
//   if (i >= n / 2) return true;
//   if (s[i] !== s[n - 1 - i]) {
//     return false;
//   } else {
//     return isPalimdrom(i + 1, s, n);
//   }
// };

// console.timeLog(isPalimdrom(0));

const isPalindrome = (i, s = 'madam', n = s.length) => {
  if (i >= n / 2) return true;
  if (s[i] !== s[n - 1 - i]) {
    return false;
  } else {
    return isPalindrome(i + 1, s, n); // Return the recursive call
  }
};

// console.log(isPalindrome(0)); // Output: true
