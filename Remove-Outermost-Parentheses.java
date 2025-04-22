class Solution {
    public String removeOuterParentheses(String s) 
    {
        String res = "";
        int count = 0;
        int x = s.length();

        for (int i = 0; i < x; i++) 
        {
            if (s.charAt(i) == '(') 
            {
                if (count > 0)
                 {
                    res += s.charAt(i);  
                }
                count++;
            } 
            else 
            {
                count--;
                if (count > 0) {
                    res += s.charAt(i);  
                }
            }
        }

        return res;
    }
}
