class Solution 
{
public:
    bool isPrefixString(string s, vector<string>& w) 
    {
        string t = "";
        for (int i = 0; i < w.size(); i++) 
        {
            t += w[i];
            if (t == s) {
                return true;
            }
            if (t.length() > s.length()) {
                return false;
            }
        }
        return false;
    }
};
