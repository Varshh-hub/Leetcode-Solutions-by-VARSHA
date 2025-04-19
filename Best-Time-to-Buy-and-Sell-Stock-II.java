class Solution {
    public int maxProfit(int[] p) {
        int maxp = 0;
        int psize = p.length;

        for (int i = 1; i < psize; i++) 
        {
            if (p[i] > p[i - 1]) 
            {
                maxp += p[i] - p[i - 1];
            }
        }

        return maxp;
    }
}