/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const rows = [0, 0, 0], cols = [0, 0, 0];
    let diag = 0, anti = 0;

    for (let i = 0; i < moves.length; i++) {
        const [r, c] = moves[i];
        const val = i % 2 === 0 ? 1 : -1;      

        rows[r] += val;
        cols[c] += val;
        if (r === c)       diag += val;
        if (r + c === 2)   anti += val;

        if (Math.abs(rows[r]) === 3 || Math.abs(cols[c]) === 3 ||
            Math.abs(diag) === 3    || Math.abs(anti) === 3)
            return val === 1 ? "A" : "B";
    }
    return moves.length === 9 ? "Draw" : "Pending";
};
