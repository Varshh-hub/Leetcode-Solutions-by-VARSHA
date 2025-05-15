/**
 * @param {number} x
 * @return {number}
 */
 
function mySqrt(x) {
    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}
