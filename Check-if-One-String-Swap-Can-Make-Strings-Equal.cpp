class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
        if (s1 == s2)
            return true;
        if (s1.length() != s2.length())
            return false;

        vector<int> v;
        for (int i = 0; i < s1.length(); ++i) {
            if (s1[i] != s2[i]) {
                v.push_back(i);
            }
        }

        if (v.size() != 2)
            return false;

        int i = v[0];
        int j = v[1];
        return s1[i] == s2[j] && s1[j] == s2[i];
    }
};
