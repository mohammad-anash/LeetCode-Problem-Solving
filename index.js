function sortByCharFrequency(s) {
  const freqMap = new Map();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const sortedChars = Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([char]) => char);

  return sortedChars.map((char) => char.repeat(freqMap.get(char))).join('');
}

console.log(sortByCharFrequency('banana'));
console.log(sortByCharFrequency('anash'));
console.log(sortByCharFrequency('shahid'));
console.log(sortByCharFrequency('test'));
console.log(sortByCharFrequency('javascript'));
console.log(sortByCharFrequency('apple'));
console.log(sortByCharFrequency('aabbcc'));
