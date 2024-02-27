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

function same_alter(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    } else {
      arr2.splice(correctIndex, 1);
    }
  }

  return true;
}

//console.log(same([1, 1, 2, 3], [4, 9, 1, 1]));

console.log(same_alter([1, 1, 2, 3], [4, 9, 0, 1]));
