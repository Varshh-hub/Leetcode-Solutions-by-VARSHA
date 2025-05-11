/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    while (stones.length > 1) {
        let max1 = -1, max2 = -1;
        let idx1 = -1, idx2 = -1;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] > max1) {
                max2 = max1;
                idx2 = idx1;
                max1 = stones[i];
                idx1 = i;
            } else if (stones[i] > max2) {
                max2 = stones[i];
                idx2 = i;
            }
        }

        stones.splice(idx1, 1);
        if (idx2 > idx1) idx2--;
        stones.splice(idx2, 1);

        if (max1 !== max2) {
            stones.push(max1 - max2);
        }
    }

    return stones.length === 1 ? stones[0] : 0;
}
