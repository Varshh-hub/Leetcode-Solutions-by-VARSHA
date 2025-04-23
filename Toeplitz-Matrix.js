/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(m) 
{
    let r = m.length;
    let c = m[0].length;
    for (let i = 1; i < r; i++)
     {
        for (let j = 1; j < c; j++) 
        {
            if (m[i][j] !== m[i - 1][j - 1]) 
            {
                return false;
            }
        }
    }
    return true;
};
