/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) 
{
    let n = grid.length;
    let result = [];
    
    for (let i = 0; i < n - 2; i++) 
    {
        let row = [];
        for (let j = 0; j < n - 2; j++) 
        {
            let maxVal = 0;
            for (let x = i; x < i + 3; x++) 
            {
                for (let y = j; y < j + 3; y++) 
                {
                    if (grid[x][y] > maxVal) 
                    {
                        maxVal = grid[x][y];
                    }
                }
            }
            row.push(maxVal);
        }
        result.push(row);
    }
    
    return result;
}
