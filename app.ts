//=========================FUNCTION TO COUNT THE VOWELS WITHIN THE STRING==================WITH INQUIRER===========================//
/*import inquirer from "inquirer";
let enquire = await inquirer.prompt  ({
      message : "Enter your questionare",
      type : "input",
      name : "vowel"

});
function vowels  (){
      let count = enquire.vowel.match(/[aeiou]/gi);
      return  count === null ? 0 : count.length;
}

console.log(vowels());*/
//=========================FUNCTION TO COUNT THE VOWELS WITHIN THE STRING==================WITHOUT INQUIRERE===========================//
/*function vowels  (message :string ="ThE qUick fox jump over the dog"){
      let count = message.match(/[aeiou]/gi);
      return  count === null ? 0 : count.length;
}
console.log(vowels());*/
//=======================================FUNCTION TO FIND THE NUMBER IS PRIME OR NOT USING RECURSION==============================//
/*import inquirer from "inquirer";
let enquire = await inquirer.prompt  ({
      message : "Enter your questionare",
      type : "number",
      name : "prime"

});
function isPrime(num, div = 3){
      if(num === 2) return true;
      if(num < 2 || num % 2 === 0)  return false;
      if(div * div > num) return true;
      if(num % div === 0) return false;
      return isPrime(num, div + 2);
}
console.log(isPrime(enquire.prime));*/
//=======================================FUNCTION TO FIND THE NUMBER IS PRIME OR NOT USING RECURSION=========WITHOUT INQUIRER=====================//
/*function isPrime(num, div = 3){
      if(num === 2) return true;
      if(num < 2 || num % 2 === 0)  return false;
      if(div * div > num) return true;
      if(num % div === 0) return false;
      return isPrime(num, div + 2);
}
console.log(isPrime(1));*/


//=======================================FUNCTION TO FIND THE FIRST NOT REPEATED CHARACTER==============================//
/*const fnrc  = str => {
      const set = new Set();
      const finalSet = new Set();
      str.split('').forEach(char => {
        if (set.has(char)) finalSet.delete(char);
        else {
          set.add(char);
          finalSet.add(char);
        }
      })
      const iter = finalSet.values();
      return iter.next().value;
    
    
}
console.log(fnrc("aabbccddeddef"));*/
//=======================================FUNCTION TO FIND THE FIRST NOT REPEATED CHARACTER==============================//
/*import inquirer from "inquirer";
let enquire = await inquirer.prompt  ({
      message : "Enter your questionare",
      type : "input",
      name : "repeat"

});
function find_FirstNotRepeatedChar(str:string) {
      // Convert the input string into an array of characters
      let arra1 = str.split('');
      
      // Initialize variables result and ctr for storing the result and counting character occurrences
      let result = '';
      let ctr = 0;
     
      // Iterate through each character in the array
      for (let x = 0; x < arra1.length; x++) {
        // Reset the counter (ctr) for each character
        ctr = 0;
     
        // Iterate through the array again to count occurrences of the current character
        for (let y = 0; y < arra1.length; y++) {
          // Check if the current character is equal to the character at position y
          if (arra1[x] === arra1[y]) {
            // If true, increment the counter (ctr)
            ctr += 1;
          }
        }
     
        // Check if the counter (ctr) is less than 2 (character occurs only once)
        if (ctr < 2) {
          // If true, assign the current character to the result and break out of the loop
          result = arra1[x];
          break;
        }
      }
      
      // Return the first non-repeated character found
      return result;
    }
    
    // Log the result of calling find_FirstNotRepeatedChar with the input string 'abacddbec' to the console
    console.log(find_FirstNotRepeatedChar(enquire.repeat)); */
//=======================================FUNCTION TO FIND THE FIRST NOT REPEATED CHARACTER===========withuot inquirer===================//

/*function find_FirstNotRepeatedChar(str:string) {
      // Convert the input string into an array of characters
      let arra1 = str.split('');
      
      // Initialize variables result and ctr for storing the result and counting character occurrences
      let result = '';
      let ctr = 0;
     
      // Iterate through each character in the array
      for (let x = 0; x < arra1.length; x++) {
        // Reset the counter (ctr) for each character
        ctr = 0;
     
        // Iterate through the array again to count occurrences of the current character
        for (let y = 0; y < arra1.length; y++) {
          // Check if the current character is equal to the character at position y
          if (arra1[x] === arra1[y]) {
            // If true, increment the counter (ctr)
            ctr += 1;
          }
        }
     
        // Check if the counter (ctr) is less than 2 (character occurs only once)
        if (ctr < 2) {
          // If true, assign the current character to the result and break out of the loop
          result = arra1[x];
          break;
        }
      }
      
      // Return the first non-repeated character found
      return result;
    }
    
    // Log the result of calling find_FirstNotRepeatedChar with the input string 'abacddbec' to the console
    console.log(find_FirstNotRepeatedChar('the qUick fox jump over the dog')); */
    //=======================================FUNCTION THAT RETURN THE SQUARE OF A NUMBER==============================//
    /*let square =(a:number)=>{
      return a*a
      }
    console.log(square(6));*/

    //=======================================FUNCTION THAT RETURN HELLO WORLD=============================//
   /* function displayMessage(){
      let message = "Hello World";
      return message
    };
    console.log(displayMessage());*/