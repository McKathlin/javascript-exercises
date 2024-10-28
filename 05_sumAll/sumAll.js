const sumAll = function(startNum, endNum) {
    // Require both parameters to be non-negative integers
    if (!isWholeNumber(startNum) || !isWholeNumber(endNum)) {
        return "ERROR";
    }

    const smallNum = Math.min(startNum, endNum);
    const bigNum = Math.max(startNum, endNum);

    // Find the sum (Gauss shortcut)
    const seriesLength = 1 + bigNum - smallNum;
    return (seriesLength / 2) * (smallNum + bigNum);
};

const isWholeNumber = function(n) {
    return typeof(n) == "number" && Number.isInteger(n) && n >= 0;
}

// Do not edit below this line
module.exports = sumAll;
