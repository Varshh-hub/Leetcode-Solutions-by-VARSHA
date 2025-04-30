class Solution 
{
    public int maxRepeating(String s, String w) 
    {
        int k = 0;
        String t = w;
        while (s.contains(t)) 
        {
            k++;
            t += w;
        }
        return k;
    }
}
