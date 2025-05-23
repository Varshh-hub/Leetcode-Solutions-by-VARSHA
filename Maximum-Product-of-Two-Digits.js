/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let d = [];
    while (n > 0) {
        d.push(n % 10);
        n = Math.floor(n / 10);
    }

    let maxp = 0;
    let s = d.length;
    for (let i = 0; i < s; i++) {
        for (let j = i + 1; j < s; j++) {
            maxp = Math.max(maxp, d[i] * d[j]);
        }
    }

    return maxp;
}