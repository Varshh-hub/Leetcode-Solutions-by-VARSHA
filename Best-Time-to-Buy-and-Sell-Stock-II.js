/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
        let maxp = 0;
        let psize = p.length;

        for (let i = 1; i < psize; i++) 
        {
            if (p[i] > p[i - 1]) 
            {
                maxp += p[i] - p[i - 1];
            }
        }

        return maxp;
    }
