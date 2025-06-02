/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = Math.abs(x);
    let rev = 0;

    while (temp !== 0) {
        let lastDigit = temp % 10;
        if (rev > (2147483647 - lastDigit) / 10) {
            return 0;
        }
        rev = rev * 10 + lastDigit;
        temp = Math.floor(temp / 10);
    }

    return x < 0 ? -rev : rev;
};
