/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32; i++) {
        rev = (rev << 1) | (n & 1);
        n >>>= 1;
    }
    return rev >>> 0; 
};
