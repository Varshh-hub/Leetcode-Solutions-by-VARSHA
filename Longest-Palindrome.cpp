class Solution 
{
public:
    int longestPalindrome(string s) 
    {
        int count[128] = {0}; 
        for (int i = 0; i < s.size(); i++) 
        {
            count[s[i]]++;
        }
        
        int length = 0;
        bool oddFound = false;
        for (int i = 0; i < 128; i++) 
        {
            if (count[i] % 2 == 0) 
            {
                length += count[i];
            } 
            else 
            {
                length += count[i] - 1;
                oddFound = true;
            }
        }
        return oddFound ? length + 1 : length;
    }
};
