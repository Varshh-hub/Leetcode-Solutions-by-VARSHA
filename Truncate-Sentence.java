class Solution {
    public String truncateSentence(String s, int k) {
        StringBuilder ans = new StringBuilder();
        int n = s.length();
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == ' ') {
                k--;
            }
            if (k == 0) {
                break;
            } else {
                ans.append(s.charAt(i));
            }
        }
        return ans.toString();
    }
}