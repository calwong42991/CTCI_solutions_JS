// O(n^2) time --- O(1) space
const isUnique1 = (str) => {
  const len = str.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// O(N) Time --- O(N) space;
const isUnique2 = (str) => {
  const letterSet = new Set();

  for(const letter of str){
    if(letterSet.has(letter)) return false;
    letterSet.add(letter);
  }
  return true;
}

// O(N Log N) Time --- O(1) Space
const isUnique3 = (str) => {
  str = str.split('').sort();

  const len = str.length;

  for(let i = 0; i < len; i++){
    if(str[i] === str[i + 1]) return false;
  }
  return true;
};