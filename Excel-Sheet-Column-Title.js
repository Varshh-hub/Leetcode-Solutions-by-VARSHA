/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = \\;
    while (n > 0) {
        n--;
        res = String.fromCharCode(65 + n % 26) + res;
        n = Math.floor(n / 26);
    }
    return res;
};