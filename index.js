// 1 => Array reverse or reverse a array means changing the position of each number of the given array to its opposite position from end, i.e. if a number is at position 1 then its new position will be Array.length, similarly if a number is at position 2 then its new position will be Array.length – 1, and so on.

function reverseArray(arr) {
  return arr.reverse();
}

// console.log(reverseArray([1, 2, 3]));

// 2 => Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

function findMaxiAndMiniValue(arr) {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  return [maxValue, minValue];
}
// console.log(findMaxiAndMiniValue([22, 56, 78, 12, 2]))

// 3 => Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr
}

// console.log(sortArray([0, 2, 1, 2, 0]));

