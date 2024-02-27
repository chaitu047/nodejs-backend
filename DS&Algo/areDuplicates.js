function areThereDuplicates(arr) {
  let temp = {};
  for (let i of arr) {
    if (!temp[i]) {
      temp[i] = 1;
    } else {
      if (temp[i] == 1) {
        return true;
      }
    }
  }
  return false;
}

function areThereDuplicates_multipointer(arr){
    let ptrA=0;
    let ptrB=ptrA+1;
    while(ptrA<ptrB && ptrB<arr.length){
        if(arr[ptrA]==arr[ptrB]){
            return true;
        }
        ptrA++;
        ptrB++;
    }
    return false;
}

console.log(areThereDuplicates([1, 2, 3, 3, 4, 5, 6, 7]));
