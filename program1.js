function consistsOnlyOfZeros(s) {

    if (s.length === 0) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '0') {
        return false;
      }
    }
    return true;
  }
console.log(consistsOnlyOfZeros("0")); 
console.log(consistsOnlyOfZeros("000")); 
console.log(consistsOnlyOfZeros("")); 
