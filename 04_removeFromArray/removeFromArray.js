const removeFromArray = function(array, ...rem) {
    // Look through the entire array for a certain variable, then once you find it, remove it
    /*for (let x = 0; x < array.length-1; x++) {
        if (array[x] == rem) {
            array.splice(x,1)
        }
    }*/
    rem.forEach((element, index) => {
        for (let x = 0; x < array.length; x++) {
            if (array[x] === element) {
                array.splice(x,1)
            }}
    })
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
