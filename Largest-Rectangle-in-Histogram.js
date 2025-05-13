/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    let res = 0;
    let n = heights.length;
    let lfs = new Array(n).fill(0);
    let rfs = new Array(n).fill(n - 1);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            lfs[i] = stack[stack.length - 1] + 1;
        } else {
            lfs[i] = 0;
        }
        stack.push(i);
    }

    while (stack.length) {
        stack.pop();
    }

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length) {
            rfs[i] = stack[stack.length - 1] - 1;
        } else {
            rfs[i] = n - 1;
        }
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        res = Math.max(res, heights[i] * (rfs[i] - lfs[i] + 1));
    }

    return res;
};
