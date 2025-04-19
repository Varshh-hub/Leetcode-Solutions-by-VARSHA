/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;

    for (let i = Math.floor(len / 2); i >= 1; i--) {
        if (len % i === 0) {
            let sub = s.substring(0, i);
            let repeated = sub.repeat(len / i);
            if (repeated === s) {
                return true;
            }
        }
    }
    return false;
};
