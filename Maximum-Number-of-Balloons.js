/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) 
{
    let b = 0, a = 0, l = 0, o = 0, n = 0;
    
    for (let i = 0; i < text.length; i++) 
    {
        let ch = text[i];
        switch (ch) 
        {
            case 'b': b++; break;
            case 'a': a++; break;
            case 'l': l++; break;
            case 'o': o++; break;
            case 'n': n++; break;
        }
    }
    
    return Math.min(Math.min(Math.floor(o / 2), Math.floor(l / 2)), Math.min(Math.min(b, a), n));
};
