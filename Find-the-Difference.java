class Solution 
{
    public char findTheDifference(String s, String t) 
    {
        int sums = 0, sumt = 0;
        for (int i = 0; i < s.length(); i++) 
        {
            sums += s.charAt(i);
        }
        for (int i = 0; i < t.length(); i++) 
        {
            sumt += t.charAt(i);
        }
        return (char)(sumt - sums);
    }
}
