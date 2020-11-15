function howManyHundreds(value){
	if(value > 1000){
		var a =  Math.floor(value / 1000 % 1000);
    var b =  value - (Math.floor(value / 1000 % 1000)*1000);
    var z;
    if (b>100){
    	z  =  Number("" + a + Math.floor(b / 100 % 100) + "");
    }else{
    	z = a;
    }
    return z;
	 }else if(value >= 100){
    var z = (Math.floor((value / 100) % 100));
    return z;
   }else{
  	return 0;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(200), "=?", 2);
console.log(howManyHundreds(100), "=?", 1);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(123456), "=?", 1234);

  
  