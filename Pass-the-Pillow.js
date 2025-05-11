/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let cycle = (n - 1) * 2;
    time = time % cycle;
    
    if (time < n - 1) {
        return time + 1;
    } else {
        return n - (time - (n - 1));
    }
};
