function isAnagramFrequency(str1, str2) {
  strArr1 = str1.split("");
  strArr1 = strArr1.sort();
  str1 = strArr1.join("").toLowerCase();
  strArr2 = str2.split("");
  strArr2 = strArr2.sort();
  str2 = strArr2.join("").toLowerCase();
  return str1 === str2;
}

function isAnagram_alter(str1, str2) {
  strDict1 = {};

  for (let k of str1) {
    strDict1[k] = (strDict1[k] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!strDict1[letter]) {
      return false;
    } else {
      strDict1[letter] -= 1;
    }
  }
  return true;
}

console.log(isAnagramFrequency("abcde", "ekdba"));
