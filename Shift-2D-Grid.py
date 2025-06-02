class Solution(object):
    def shiftGrid(self, grid, k):
        """
        :type grid: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
        rows, cols = len(grid), len(grid[0])
        total = rows * cols
        result = [[0] * cols for _ in range(rows)]

        for r in range(rows):
            for c in range(cols):
                new_index = (r * cols + c + k) % total
                new_row = new_index // cols
                new_col = new_index % cols
                result[new_row][new_col] = grid[r][c]

        return result
