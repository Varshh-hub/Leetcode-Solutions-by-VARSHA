class Solution 
{
public:
    int maximumWealth(vector<vector<int>>& a) 
    {
        int m = 0;
        for (int i = 0; i < a.size(); i++) 
        {
            int s = 0;
            for (int j = 0; j < a[i].size(); j++) 
            {
                s += a[i][j];
            }
            if (s > m) 
            {
                m = s;
            }
        }
        return m;
    }
};
