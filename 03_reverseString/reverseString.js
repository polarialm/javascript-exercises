const reverseString = function(word) {
    const array = word.split("");
    let result = "";
    for (let x = array.length-1; x >= 0; x--) {
        result += array[x];
    } 
    return result;
};

// Do not edit below this line
module.exports = reverseString;
