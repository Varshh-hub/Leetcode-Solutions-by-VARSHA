/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
    let minp = Number.MAX_VALUE;
    let maxp = -p[0];
    let firstp = 0;
    let totalp = 0;

    for (let i = 0; i < p.length; i++) {
        minp = Math.min(minp, p[i]);
        firstp = Math.max(firstp, p[i] - minp);
        maxp = Math.max(maxp, firstp - p[i]);
        totalp = Math.max(totalp, maxp + p[i]);
    }

    return totalp;
};
