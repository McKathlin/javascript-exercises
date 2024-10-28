const repeatString = function(str, count) {
    if (count < 0) {
        return "ERROR";
    }
    let repeats = new Array(count);
    for (let i = 0; i < count; i++) {
        repeats[i] = str;
    }
    return repeats.join('');
};

// Do not edit below this line
module.exports = repeatString;
