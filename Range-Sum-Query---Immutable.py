class NumArray:

    def __init__(self, nums):
        self.p = [0]
        for num in nums:
            self.p.append(self.p[-1] + num)

    def sumRange(self, left, right):
        return self.p[right + 1] - self.p[left]
