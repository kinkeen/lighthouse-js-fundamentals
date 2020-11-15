const lastIndexOf = function (arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value)  {
        return i; 
      }
    }
    return -1;
  }
  
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));