class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int len = s.length();
        
        for (int i = len / 2; i >= 1; i--) {
            if (len % i == 0) {
                String sub = s.substring(0, i);
                int count = len / i;
                StringBuilder result = new StringBuilder();
                
                for (int j = 0; j < count; j++) {
                    result.append(sub);
                }
                
                if (result.toString().equals(s)) {
                    return true;
                }
            }
        }
        return false;
    }
}
