function frequencyOfDigits_alter(a, b) {
  let strA = String(a).split("").sort().join("");
  let strB = String(b).split("").sort().join("");
  return strA == strB;
}

function frequencyOfDigits(a, b) {
  let strA = String(a);
  let strB = String(b);
  strADict = {};
  for (let i of strA) {
    strADict[i] = (strADict[i] || 0) + 1;
  }
  for (let k of strB) {
    if (!strADict[k]) {
      return false;
    } else {
      strADict[k] -= 1;
    }
  }
  return true;
}

console.log(frequencyOfDigits(187, 7819));
