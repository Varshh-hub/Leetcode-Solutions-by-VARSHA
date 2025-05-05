/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(a, b, t) 
{
    let c = 0;
    for (let i = 0; i < a.length; i++) 
    {
        if (a[i] <= t && t <= b[i]) 
        {
            c++;
        }
    }
    return c;
};