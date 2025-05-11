class Solution:
    def lastStoneWeight(self, stones):
        while len(stones) > 1:
            max1 = -1
            max2 = -1
            idx1 = -1
            idx2 = -1

            for i in range(len(stones)):
                if stones[i] > max1:
                    max2 = max1
                    idx2 = idx1
                    max1 = stones[i]
                    idx1 = i
                elif stones[i] > max2:
                    max2 = stones[i]
                    idx2 = i

            stones.pop(max(idx1, idx2))
            stones.pop(min(idx1, idx2))

            if max1 != max2:
                stones.append(max1 - max2)

        return stones[0] if stones else 0
