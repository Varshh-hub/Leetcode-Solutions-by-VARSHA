class Solution 
{
public:
    bool checkRecord(string s) 
    {
        int a_count = 0;
        int l_count = 0;
        for (int i = 0; i < s.length(); i++) 
        {
            if (s[i] == 'A') 
            {
                a_count++;
                l_count = 0;
                if (a_count >= 2) 
                {
                    return false;
                }
            } 
            else if (s[i] == 'L') 
            {
                l_count++;
                if (l_count >= 3) 
                {
                    return false;
                }
            } 
            else 
            {
                l_count = 0;
            }
        }
        return true;
    }
};
