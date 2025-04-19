class Solution 
{
    public int strStr(String h, String n) 
    {
        int hsize = h.length();
        int nsize = n.length();

        if (nsize == 0) 
        {
            return 0;
        }

        for (int i = 0; i <= hsize - nsize; i++) 
        {
            if (h.substring(i, i + nsize).equals(n)) 
            {
                return i;
            }
        }

        return -1;
    }
}
