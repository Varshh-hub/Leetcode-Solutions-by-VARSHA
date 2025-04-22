/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) 
{
    let count = new Array(128).fill(0);  
    for (let i = 0; i < s.length; i++) 
    {
        count[s.charCodeAt(i)]++;
    }

    let length = 0;
    let oddFound = false;
    for (let i = 0; i < 128; i++) 
    {
        if (count[i] % 2 === 0) 
        {
            length += count[i];
        } 
        else 
        {
            length += count[i] - 1;
            oddFound = true;
        }
    }
    
    if (oddFound) 
    {
        length += 1;
    }

    return length;
};
