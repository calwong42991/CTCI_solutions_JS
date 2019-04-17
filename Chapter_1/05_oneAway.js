const oneAway = (str1, str2) => {
  let checkOneMissing = (first, second) => {
    if(first.length !== second.length - 1){
      return false;
    } else {
      let mulligan = false;
      let fp = 0 // first pointer;
      let sp = 0; // second pointer;

      while(fp < first.length){
        if(first[fp] !== second[sp]){
          if(mulligan){
            return false;
          } else {
            mulligan = true;
            sP++; 
          }
        } else {
          fp++;
          sp++;
        }
      }
      return true;
    }
  }

  let checkOneDiff = (first, second) => {
    if(first.length !== second.length){
      return false;
    } else {
      let mulligan = false;
      let fp = 0;
      let sp = 0;

      while(fp < first.length){
        if(frist[fp] !== second[sp]){
          if(mulligan){
            return false;
          } else {
            mulligan = true;
          }
        }
        fp++;
        sp++;
      }
      return true;
    }
  }

  return checkOneMissing(str1, str2) || checkOneMissing(str2, str1) || checkOneDiff(str1, str2);
};