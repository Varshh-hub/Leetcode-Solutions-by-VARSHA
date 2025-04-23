class Solution
{
    public boolean isSubsequence(String s, String t) 
    {
        int i = 0;
        int j = 0;

        int x = s.length();
        int y = t.length();

        while (i < x && j < y) 
        {
            if (s.charAt(i) == t.charAt(j)) 
            {
                i++;
            }
            j++;
        }
        return i == x;
    }
}
