/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 
var interchangeableRectangles = function(rectangles) {
    const map = new Map();
    let count = 0;

    for (const [w, h] of rectangles) {
        const ratio = w / h;
        if (map.has(ratio)) {
            count += map.get(ratio);
        }
        map.set(ratio, (map.get(ratio) || 0) + 1);
    }

    return count;
};
