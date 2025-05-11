/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] > digits[j]) {
                let temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }

    let num1 = digits[0] * 10 + digits[2];
    let num2 = digits[1] * 10 + digits[3];
    return num1 + num2;
};
