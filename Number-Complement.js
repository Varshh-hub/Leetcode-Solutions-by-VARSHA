/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(n) {
    let bits = n.toString(2).length;
    let mask = (1 << bits) - 1;
    return n ^ mask;
};
