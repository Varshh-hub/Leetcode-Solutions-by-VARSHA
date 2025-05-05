class Solution 
{
public:
int busyStudent(vector<int>& a, vector<int>& b, int t) 
{
    int c = 0;
    for (int i = 0; i < a.size(); i++) 
    {
        if (a[i] <= t && t <= b[i]) 
        {
            c++;
        }
    }
    return c;
}

};