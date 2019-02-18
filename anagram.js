//This program finds whether two strings are anagram or not
/* 
algorithm:
->for string1->store each character and its frequency in key:value pairs in dictonery.
example: "hii"=>{h:1,i:2}
-> for string2->if a character exists in dictonery as key its value is reduced by 1,if it doesnot excists its a new key is added with value 1 
example:"ihi"=>{h:0,i:0},"iho"=>{h:0,i:1,o:1}
->now we will check whether all the values in dictonery are zero or not ,if zero it is an anagram.
*/

function is_anagram(str1, str2) {
    
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
  
    if (str1 === str2)
      return true;
  
    var dict = {};
  // loop which stores each character in key and its value as 1 
    for(var i = 0; i < str1.length; i++) {
      //if key already exsists its value incremented
        if (dict[str1[i]])
        dict[str1[i]] = dict[str1[i]] + 1;
        //if key does note exist new key and its value created
      else
        dict[str1[i]] = 1;
    }
  
    for(var j = 0; j < str2.length; j++) {
         //if key already exsists its value decremented
      if (dict[str2[j]])
        dict[str2[j]] = dict[str2[j]] - 1;
        //if key does note exist new key and its value created
      else
        dict[str2[j]] = 1;
    }
  // check whether all the value in dict are zero or not
    for (var key in dict) {
      if (dict[key] !== 0) 
        return false;
    }
  
    return true;
  }
  
  console.log(is_anagram("cellar", "recall"));
  console.log(is_anagram("arm", "elbow"));
