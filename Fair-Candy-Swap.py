class Solution:
    def fairCandySwap(self, A, B):
        sumA = sum(A)
        sumB = sum(B)
        diff = (sumA - sumB) // 2
        
        setB = set(B)
        
        for a in A:
            if a - diff in setB:
                return [a, a - diff]
        
        return []
