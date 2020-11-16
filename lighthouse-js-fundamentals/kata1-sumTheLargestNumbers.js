let num1=0;
let num2=0;
let index;

const sumLargestNumbers = function(data) {
  if (data.length >2 ){
    //for first number
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        if (data[i] > data[i+1]){
          num1 = data[i];
          index= i;
        } else {
          num1 = data[i] + 1;
          index= i + 1;
        } 
      } else {
        if (num1 < data[i + 1]) {
          num1 = data[i + 1];
          index = i + 1;
        }     
      }
    }
    //for second number
    data.splice(index,1);
    for (let ii = 0; ii < data.length; ii++) {
      if (ii == 0) {
        if (data[ii] > data[ii+1]) {
          num2 = data[ii];
        } else {
          num2 = data[ii] + 1;
        } 
      } else {
        if (num2 < data[ii + 1]) {
          num2 = data[ii + 1];
        }     
      }
    }
  }else if (data.length == 2 ){
    num1 = data[0];
    num2 = data[1];
  }else if (data.length ==1 ){
    num2 = data[0];
  }
	
  let sum = num1 + num2;
  return sum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
   