function averagepair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg == target) {
      return [arr[left], arr[right]];
    } else if (avg > target) {
      right--;
    } else if (avg < target) {
      left++;
    }
  }
}

console.log(
  averagepair([-4, -2, 0, 1, 5, 6, 8, 9, 10, 12, 14, 18, 36, 72], 10)
);
