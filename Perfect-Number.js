/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    let total = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            total += i;
            if (i !== num / i) total += num / i;
        }
    }
    return total === num;
};
