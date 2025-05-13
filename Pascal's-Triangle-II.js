/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = Array(rowIndex + 1).fill(1);
    for (let i = 1; i <= Math.floor(rowIndex / 2); i++) {
        row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
        row[rowIndex - i] = row[i];
    }
    return row;
};
