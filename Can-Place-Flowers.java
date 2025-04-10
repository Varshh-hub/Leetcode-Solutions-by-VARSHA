class Solution {
    public boolean canPlaceFlowers(int[] f, int n) {
        if (n == 0) {
            return true;
        }

        int len = f.length;

        for (int i = 0; i < len; i++) {
            if (f[i] == 0) {
                boolean lft = (i == 0 || f[i - 1] == 0);
                boolean rgt = (i == len - 1 || f[i + 1] == 0);

                if (lft && rgt) {
                    f[i] = 1;
                    n--;

                    if (n == 0) {
                        return true;
                    }
                }
            }
        }

        return n == 0; 
    }
}