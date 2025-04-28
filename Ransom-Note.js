/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) 
{
    let count = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) 
    {
        count[magazine.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < ransomNote.length; i++) 
    {
        let idx = ransomNote.charCodeAt(i) - 97;
        if (count[idx] == 0) 
        {
            return false;
        }
        count[idx]--;
    }
    return true;
};
