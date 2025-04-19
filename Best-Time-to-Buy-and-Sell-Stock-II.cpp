class Solution 
{
public:
    int maxProfit(vector<int>& p) 
    {
        int maxp = 0;
        int psize = p.size();

        for (int i = 1; i < psize; i++) 
        {
            if (p[i] > p[i - 1]) 
            {
                maxp += p[i] - p[i - 1];
            }
        }

        return maxp;
    }
};
