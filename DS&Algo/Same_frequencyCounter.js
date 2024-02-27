function convertArrayToDicts(arr) {
  let dictArr = {};
  for (let k of arr) {
    if (dictArr[k] > 0) {
      dictArr[k]++;
    } else {
      dictArr[k] = 1;
    }
  }
  return dictArr;
}

function same(arr1, arr2) {
  let isSame = true;

  if (arr1.length != arr2.length) {
    return false;
  }

  dictArr1 = convertArrayToDicts(arr1);
  dictArr2 = convertArrayToDicts(arr2);

  for (let k of Object.keys(dictArr1)) {
    pfSquare = k * k;
    if (!(pfSquare in dictArr2 && dictArr1[k] == dictArr2[pfSquare])) {
      isSame = isSame && false;
    }
  }
  return isSame;
}

console.log(same([1, 1, 2, 3], [4, 9, 1, 1]));
