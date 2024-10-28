const sumAll = function(startNum, endNum) {
    if (typeof startNum != "number" || typeof endNum != "number") {
        return "ERROR";
    }
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
