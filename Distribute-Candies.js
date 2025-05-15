/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candies) {
    let unique = new Set(candies);
    return Math.min(unique.size, candies.length / 2);
};
