function sumZero_alter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function sumZero_Multipointer(arr) {
  arr = arr.sort((a,b)=>{
    return a-b;
  });
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
}

console.log(sumZero_Multipointer([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
