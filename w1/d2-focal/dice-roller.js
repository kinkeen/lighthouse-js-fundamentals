let args = process.argv;
let str = ' Rolled ' +  args[2] + ' dice: ';
for (let i = 0; i < args[2]; i++) {
  let number = Math.floor(Math.random() * 6) + 1;
  if (i !== args[2] - 1) {
    str += number + ', ';
  } else {
    str += number;
  }
}
console.log(str);
//node dice-roller.js 3 //Rolled 3 dice: 2, 6, 5



