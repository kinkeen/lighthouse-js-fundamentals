const numberOfVowels = function(data) {
  // Put your solution here
let sum = 0;
for (i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
     sum = sum + 1;   
    }
} 
return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
