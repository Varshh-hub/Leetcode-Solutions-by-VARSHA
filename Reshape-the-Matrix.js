var matrixReshape = function(mat, r, c) {
    let m = mat.length, n = mat[0].length;
    if (m * n !== r * c) return mat;

    let result = Array.from({ length: r }, () => Array(c).fill(0));
    let row = 0, col = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[row][col] = mat[i][j];
            col++;
            if (col === c) {
                col = 0;
                row++;
            }
        }
    }
    return result;
};
