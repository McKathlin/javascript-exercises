const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    } else if (typeof num == "string") {
        num = Number.parseInt(num);
    }
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
