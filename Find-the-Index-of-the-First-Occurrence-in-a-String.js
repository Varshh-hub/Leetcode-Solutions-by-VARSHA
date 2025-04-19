 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, n) {
    let hsize = h.length;
    let nsize = n.length;

    if (nsize === 0) {
        return 0;
    }

    for (let i = 0; i <= hsize - nsize; i++) {
        if (h.substring(i, i + nsize) === n) {
            return i;
        }
    }

    return -1;
};
