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
