function countUniqueValues_alter(arr) {
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues_alter([-2, -1, -1, 0, 0, 1, 2, 2, 2, 3]));