/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(text) {
    let i = 0;
    let j = text.length - 1;

    while (i < j) {
        while (i < j && !/[a-zA-Z0-9]/.test(text[i])) i++;
        while (i < j && !/[a-zA-Z0-9]/.test(text[j])) j--;

        if (text[i].toLowerCase() !== text[j].toLowerCase()) return false;

        i++;
        j--;
    }

    return true;
};
