/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, x) 
{
    let a = m;
    let b = n;
    let y = x.length;
        
    for (let i = 0; i < y; i++) {
        if (x[i][0] < a) {
            a = x[i][0];
        }
    }

    for (let i = 0; i < y; i++) {
        if (x[i][1] < b) {
            b = x[i][1];
        }
    }

    return a * b;
};