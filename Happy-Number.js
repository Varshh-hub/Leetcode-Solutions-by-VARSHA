/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(num) {
    function getNext(n) {
        let total = 0;
        while (n > 0) {
            let digit = n % 10;
            total += digit * digit;
            n = Math.floor(n / 10);
        }
        return total;
    }

    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = getNext(num);
    }

    return num === 1;
};
