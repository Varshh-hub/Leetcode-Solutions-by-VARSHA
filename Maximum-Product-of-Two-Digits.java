class Solution {
    public int maxProduct(int n) {
        ArrayList<Integer> a = new ArrayList<>();
        while (n > 0) {
            a.add(n % 10);
            n /= 10;
        }
        int s = a.size();
        int maxp = 0;
        for (int i = 0; i < s; i++) {
            for (int j = i + 1; j < s; j++) {
                maxp = Math.max(maxp, a.get(i) * a.get(j));
            }
        }
        return maxp;
    }
}
