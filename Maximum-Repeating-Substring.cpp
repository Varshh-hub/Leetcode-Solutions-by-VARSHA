class Solution
 {
public:
    int maxRepeating(string s, string w) 
    {
        int k = 0;
        string t = w;
        while (s.find(t) != string::npos) 
        {
            k++;
            t += w;
        }
        return k;
    }
};
