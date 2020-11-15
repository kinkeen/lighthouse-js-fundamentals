function howManyHundreds(value){
    if(value >= 100){
      var z = value / 100;
      console.log(value + " = " +  Math.floor(z));
    } 
  
    else { console.log(value + " = " +  0);
  
  
    }
    
  }
  
  howManyHundreds(1000);
  howManyHundreds(894);
  
  
  