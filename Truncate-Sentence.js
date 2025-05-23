/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
        let ans = "";
        let n = s.length;
        for (let i = 0; i < n; i++) {
            if (s[i] == ' ') {
                k--;
            }
            if (k == 0) {
                break;
                ans = ans + " ";
            } else {
                ans = ans + s[i];
            }
        }
        return ans;
};