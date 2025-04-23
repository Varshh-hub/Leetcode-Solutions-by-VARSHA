/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    let x = s.length;
    let y = t.length;

    while (i < x && j < y) 
    {
        if (s.charAt(i) == t.charAt(j)) 
        {
            i++;
        }
        j++;
    }
    return i == x;
};