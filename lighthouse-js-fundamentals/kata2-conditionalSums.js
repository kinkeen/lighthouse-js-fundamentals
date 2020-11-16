const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  for (i = 0; i < values.length; i++) {
   var con = (values[i] % 2 === 0);
  // for even
    if (condition == "even") {
      if (con == true) {
        sum = values[i] + sum;
      }
    }  
    if (condition == "odd") {
       if (con == false) { 
         sum = values[i] + sum;
       }
     }  
     if (values.length == 0) {
      sum = 0;  
     }
  }  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));