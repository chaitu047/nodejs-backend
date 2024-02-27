function uniqueValues_multipointer(arr) {
  for (let i = 0; i < arr.length; i++) {
    prev = i;
    curr = prev + 1;
    next = curr + 1;
    if (prev >= 0 && curr < arr.length) {
      if (arr[prev] != arr[curr] && arr[curr] != arr[next]) {
        return arr[curr];
      }
    }
  }
}

console.log(
  uniqueValues_multipointer([-4, -4, -3, -3, -3, 0, 0, 1, 2, 2, 3, 3])
);
