const removeFromArray = function(arr, ...valuesToRemove) {
    const removalSet = new Set(valuesToRemove);
    const arrCopy = [];
    for (element of arr) {
        if (!removalSet.has(element)) {
            arrCopy.push(element);
        }
    }
    return arrCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
