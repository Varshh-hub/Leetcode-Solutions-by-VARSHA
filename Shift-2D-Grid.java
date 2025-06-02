class Solution {
    public List<List<Integer>> shiftGrid(int[][] grid, int k) {
        int rows = grid.length;
        int cols = grid[0].length;
        int total = rows * cols;

        int[][] result = new int[rows][cols];

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                int newIndex = (r * cols + c + k) % total;
                int newRow = newIndex / cols;
                int newCol = newIndex % cols;
                result[newRow][newCol] = grid[r][c];
            }
        }

        List<List<Integer>> output = new ArrayList<>();
        for (int[] row : result) {
            List<Integer> list = new ArrayList<>();
            for (int num : row) {
                list.add(num);
            }
            output.add(list);
        }

        return output;
    }
}
