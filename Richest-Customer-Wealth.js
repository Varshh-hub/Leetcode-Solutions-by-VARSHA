/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(a) 
{
    let m = 0;
    for (let i = 0; i < a.length; i++) 
    {
        let s = 0;
        for (let j = 0; j < a[i].length; j++) 
        {
            s += a[i][j];
        }
        if (s > m)
         {
            m = s;
        }
    }
    return m;
};
