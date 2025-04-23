class Solution {
    public boolean isPrefixString(String s, String[] w) {
        String t = "";
        for (int i = 0; i < w.length; i++) 
        {
            t += w[i];
            if (t.equals(s)) 
            {
                return true;
            }
            if (t.length() > s.length()) 
            {
                return false;
            }
        }
        return false;
    }
}
