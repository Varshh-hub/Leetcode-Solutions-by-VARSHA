class Solution 
{
    public int busyStudent(int[] a, int[] b, int t) 
    {
    int c = 0;
    for (int i = 0; i < a.length; i++) 
    {
        if (a[i] <= t && t <= b[i])
        {
            c++;
        }
    }
    return c;
}

}