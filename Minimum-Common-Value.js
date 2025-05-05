/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(a, b) 
{
    let i = 0, j = 0;
    while (i < a.length && j < b.length)
     {
        if (a[i] === b[j]) return a[i];
        else if (a[i] < b[j]) i++;
        else j++;
    }
    return -1;
}
