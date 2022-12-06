const repeatString = function(word, times) {
 /* Create a variable to hold the string you're going to return, 
 create a loop that repeats the given number of times and add the given string to the result on each loop.*/
 // Prompt the user to input a string and assign this value to the string
 // Prompt the user to input an integer and assign this value to the string
 // Declare another string
let result = '';
 // Start a for loop that ends until the value is < the integer
if (times < 0) {
    return "ERROR";
} else {
    for (let x = 0; x < times; x++) {
        result += word;
    }
}
 // Every time the loop is ran, add the string to the other string.
 // After the loop, return the string
return result;
};

// Do not edit below this line
module.exports = repeatString;
