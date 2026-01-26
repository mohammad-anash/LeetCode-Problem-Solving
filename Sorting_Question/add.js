// Selection Sort

const selection_Sort = (arr) => {
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
};

// console.log(selection_Sort([4, 2, 70, 100, 2]));

// Bubble Sort

const Bubble_Sort = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(Bubble_Sort([1, 2, 5, 6, 3, 4]));
