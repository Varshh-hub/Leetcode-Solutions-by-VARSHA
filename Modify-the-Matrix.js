/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const ans = Array.from({ length: m }, () => Array(n).fill(0));
    const col = Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans[j][i] = matrix[j][i];
            col[i] = Math.max(col[i], matrix[j][i]);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (ans[j][i] === -1) {
                ans[j][i] = col[i];
            }
        }
    }

    return ans;
};
