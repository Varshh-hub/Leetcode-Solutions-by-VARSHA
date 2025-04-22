class Solution {
    public int maxCount(int m, int n, int[][] x) {
        int a = m;
        int b = n;
        int y = x.length;
        
        for (int i = 0; i < y; i++) {
            if (x[i][0] < a) {
                a = x[i][0];
            }
        }

        for (int i = 0; i < y; i++) {
            if (x[i][1] < b) {
                b = x[i][1];
            }
        }

        return a * b;
    }
}