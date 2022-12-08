const sumAll = function(a, b) {
    if (hasError(a,b) == true) {
        return "ERROR"
    }
    let arranged = arrange(a,b)
    a = arranged[0]
    b = arranged[1]
    // Create a variable that will serve to hold the final sum
    let sum = 0;
    // Create a for loop that will loop from a to b and add every single number, including from a to b
    for (let n = a; n <= b; n++) {
        // On each iteration add the number to the sum
        sum += n;
    }
    // Return the sum after finishing the loop
    return sum;
};

function arrange (a,b) {
    let result = []
    if (a > b) {
        result[0] = b;
        result[1] = a;
    } else {
        result[0] = a;
        result[1] = b;
    }
    return result;
}

function checkNeg (a,b) {
    let args = [a,b]
    let result = 0;
    for (let n = 0; n < args.length-1; n++) {
        if (args[n] < 0) {
            result++
        } else continue
    }
    return result;
}

function isNotNum (a,b) {
    let args = [a,b]
    let result = 0
    for (let n = 0; n < args.length; n++) {
        if (typeof(args[n]) != typeof(1)) {
            result++
        }
    }
    return result
}

function hasError (a,b) {
    let result = isNotNum(a,b) + checkNeg(a,b)
    if (result > 0) {
        return true;
    } else return false;
}

/*if (checkNeg(a,b) > 0) {
        return "ERROR"
    }*/

// Do not edit below this line
module.exports = sumAll;
