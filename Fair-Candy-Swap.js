/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = A.reduce((acc, num) => acc + num, 0);
    let sumB = B.reduce((acc, num) => acc + num, 0);
    let diff = (sumA - sumB) / 2;
    
    let setB = new Set(B);
    
    for (let candyA of A) {
        if (setB.has(candyA - diff)) {
            return [candyA, candyA - diff];
        }
    }
    return [];
};
