const sort = str => [...str].sort().join('');

// O(N log N) Time -- O(1) Space
const checkPermutations1 = (str1, str2) => {
  if (!str1 || !str2 || str1.length !== str2.length) {
    return false;
  }

  return sort(str1) === sort(str2);
}

const checkPermutations2 = (str1, str2) => {
  if(!str1 || !str2 || str1.length !== str2.length){
    return false;
  }

  let dict = {};

  for(const letter of str1){
    dict.hasOwnProperty(letter) ? dict[letter] += 1 : dict[letter] = 1;
  };

  for(const letter of str2){
    if(!dict.hasOwnProperty(letter)){
      return false;
    } else if(dict[letter] === 1){
      delete dict[letter];
    } else {
      dict[letter] -= 1;
    }
  }
  return Object.keys(dict).length === 0;
};

console.log(checkPermutations2('wasup', 'wasuup'));