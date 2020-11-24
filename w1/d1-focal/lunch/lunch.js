/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry,availableTime){
  let output = "";
  if (hungry){
    if (availableTime<20){
      output = "I'm hungry and I have " + availableTime + " minutes for lunch. I'm going to pick somthing and eat it in the lab";  
      }if (availableTime<30 && 20<availableTime){
      output = "I'm hungry and I have " + availableTime + " minutes for lunch. I'm going to find a place nearby";  
      }if (availableTime>30){
      output = "I'm  hungry and I have " + availableTime + " minutes for lunch. I'm doing bootcamp and I should reconsider how much time actually have to spare";  
    
   /*}if(!hungry){
       output = "I'm not hungry and I have back to work";*/
   }else{
      output = "I'm not hungry and I have back to work";  
   }
   }
    return output;
  }
  
  /*
   * This is some test runner code that's simply calling our whatToDoForLunch function
   * defined above to verify we're making the right decisions. Do not modify it!
   */
  
  //console.log("I'm hungry and I have 20 minutes for lunch.");
  console.log(whatToDoForLunch(true, 20));
  
  //console.log("I'm hungry and I have 50 minutes for lunch.");
  console.log(whatToDoForLunch(true, 50));
  
  //console.log("I'm not hungry and I have 30 minutes for lunch.");
  console.log(whatToDoForLunch(false, 30));
  
  //console.log("I'm hungry and I have 15 minutes for lunch.");
  console.log(whatToDoForLunch(true, 15));
  