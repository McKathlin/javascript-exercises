const palindromes = function(text) {
    // Remove all non-alphanumeric characters.
    const checkableText = text.split(/\W+/).join('').toLowerCase();

    // Check for symmetry.
    const midpoint = Math.floor(checkableText.length / 2);
    const last = checkableText.length - 1;
    for (let i = 0; i < midpoint; i++) {
        if (checkableText[i] != checkableText[last - i]) {
            return false; // Mismatch found.
        }
    }
    // Everything was checked and looks good!
    return true;
};

// Do not edit below this line
module.exports = palindromes;
