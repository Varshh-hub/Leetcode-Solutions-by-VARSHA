class Solution {
    public boolean checkRecord(String s) {
        int aCount = 0;
        int lCount = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == 'A') {
                aCount++;
                lCount = 0;
                if (aCount >= 2) {
                    return false;
                }
            } else if (ch == 'L') {
                lCount++;
                if (lCount >= 3) {
                    return false;
                }
            } else {
                lCount = 0;
            }
        }

        return true;
    }
}
