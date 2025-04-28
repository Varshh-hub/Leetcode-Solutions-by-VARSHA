/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) 
{
    let sums = 0, sumt = 0;
    for (let i = 0; i < s.length; i++) 
    {
        sums += s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) 
    {
        sumt += t.charCodeAt(i);
    }
    return String.fromCharCode(sumt - sums);
};
