class Solution:
    def largestRectangleArea(self, heights):
        res = 0
        n = len(heights)
        lfs = [0] * n
        rfs = [n - 1] * n
        stack = []

        for i in range(n):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            if stack:
                lfs[i] = stack[-1] + 1
            else:
                lfs[i] = 0
            stack.append(i)

        stack = []  

        for i in range(n - 1, -1, -1):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            if stack:
                rfs[i] = stack[-1] - 1
            else:
                rfs[i] = n - 1
            stack.append(i)

        for i in range(n):
            res = max(res, heights[i] * (rfs[i] - lfs[i] + 1))

        return res
