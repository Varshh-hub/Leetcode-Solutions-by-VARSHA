class Solution(object):
    def largestLocal(self, grid):
        n = len(grid)
        result = []

        for i in range(n - 2):
            row = []
            for j in range(n - 2):
                maxVal = 0
                for x in range(i, i + 3):
                    for y in range(j, j + 3):
                        if grid[x][y] > maxVal:
                            maxVal = grid[x][y]
                row.append(maxVal)
            result.append(row)

        return result
