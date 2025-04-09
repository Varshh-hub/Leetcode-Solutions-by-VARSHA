/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let len1 = word1.length;
    let len2 = word2.length;

    for (let i = 0; i < len1 || i < len2; i++) 
    {
        if (i < len1) {
            result += word1[i];
        }
        if (i < len2) {
            result += word2[i];
        }
    }

    return result;
};
