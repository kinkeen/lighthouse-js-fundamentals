const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x];
       
      if (vehicle === 'regular') {  // spot search for regular cars
        if (spot === 'R') {
          return [x, y];
        }  
      } else if (vehicle === 'small') {    // spot search for small cars
        if (spot === 'R' || spot === 'S') {
          return [x, y];
        } 
      } else if (vehicle === 'motorcycle') { // spot search for motorcycle cars
         if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [x, y];
        }
      }
   
    }
 } return false; // if no spots are found , return false
}

console.log(whereCanIPark(
[
  // COLUMNS ARE X
  // 0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'r', 'M'], // 1
  ['s', 'M', 's', 'S', 'r', 'm'], // 2
  ['S', 'r', 's', 'm', 'r', 'M'], // 3
  ['S', 'r', 's', 'm', 'r', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S']  // 5
],
'regular'
));

console.log(whereCanIPark(
[
  ['M', 'M', 'M', 'M'],
  ['M', 's', 'M', 'M'],
  ['M', 'M', 'M', 'M'],
  ['M', 'M', 'r', 'M']
],
'small'const checkAir = function (samples, threshold) {
  // Code here!
  let dirty = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirty ++;
    }
  }
  let ifDeternime = dirty / (samples.length-1); 
    if (ifDeternime < threshold) {
      return "Clean";
    } else {
      return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
));

console.log(whereCanIPark(
[
  ['s', 's', 's', 's', 's', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['S', 'r', 's', 'm', 'r', 's'],
  ['S', 'r', 's', 'm', 'R', 's'],
  ['S', 'r', 'S', 'M', 'm', 'S']
],
'motorcycle'
))

/*[4, 0]
false
[3, 1]*/
