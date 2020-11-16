const urlEncode = function(text) {
    var t = text.trim();
     //console.log(t);
     var string = [];
     for(var i=0; i < t.length; i++) {
       if (t[i] == " ") { 
         string += "%20";
       } else {
         string += (t[i]);
       }
     }
     return string;
   }
 
 console.log(urlEncode("Lighthouse Labs"));
 console.log(urlEncode(" Lighthouse Labs "));
 console.log(urlEncode("blue is greener than purple for sure"));
 
 