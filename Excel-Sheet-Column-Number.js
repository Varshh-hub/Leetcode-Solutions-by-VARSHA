/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let x = 0;
    let n = columnTitle.length;
    for (let i = 0; i < n; i++) {
        x = x * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return x;
};
