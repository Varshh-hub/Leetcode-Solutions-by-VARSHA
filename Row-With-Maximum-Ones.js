/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let idx = 0, max1 = 0;
    for (let i = 0; i < mat.length; i++) {
        let cnt = 0;
        for (let x of mat[i]) {
            if (x === 1) cnt++;
        }
        if (cnt > max1) {
            max1 = cnt;
            idx = i;
        }
    }
    return [idx, max1];
};
