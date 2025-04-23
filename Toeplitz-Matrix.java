class Solution {
    public boolean isToeplitzMatrix(int[][] m) {
        int r = m.length;
        int c = m[0].length;

        for (int i = 1; i < r; i++) 
        {
            for (int j = 1; j < c; j++) 
            {
                if (m[i][j] != m[i - 1][j - 1]) 
                {
                    return false;
                }
            }
        }
        return true;
    }
}