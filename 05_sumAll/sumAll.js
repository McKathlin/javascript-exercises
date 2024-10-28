const sumAll = function(startNum, endNum) {
    // Require both parameters to be non-negative integers
    if (!isWholeNumber(startNum) || !isWholeNumber(endNum)) {
        return "ERROR";
    }

    // Find the sum
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

const isWholeNumber = function(n) {
    return typeof(n) == "number" && Number.isInteger(n) && n >= 0;
}

// Do not edit below this line
module.exports = sumAll;
