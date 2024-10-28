const reverseString = function(original) {
    let chars = new Array(original.length);
    for (let i = 0; i < original.length; i++) {
        let reverseIndex = original.length - 1 - i;
        chars[reverseIndex] = original[i];
    }
    return chars.join('');
};

// Do not edit below this line
module.exports = reverseString;
