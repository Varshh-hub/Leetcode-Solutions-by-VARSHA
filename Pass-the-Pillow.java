class Solution {
    public int passThePillow(int n, int time) {
        int cycle = (n - 1) * 2;
        time = time % cycle;
        
        if (time < n - 1) {
            return time + 1;
        } else {
            return n - (time - (n - 1));
        }
    }
}
