const fibonacci = function(num) {
    let latest = 1;
    let older = 0;
    let current = 1;
    for (let i = 1; i < num; i++) {
        current = latest + older;
        older = latest;
        latest = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
