/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let res = \\;
    let i = a.length - 1, j = b.length - 1, carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        let x = i >= 0 ? Number(a[i--]) : 0;
        let y = j >= 0 ? Number(b[j--]) : 0;
        let sum = x + y + carry;
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res;
}
