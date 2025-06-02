class Solution {
public:
    string reverseVowels(string s) {
        string vowels = \aeiouAEIOU\;
        vector<int> vowelIndices;
        int n = s.size();

        for (int i = 0; i < n; i++) {
            if (vowels.find(s[i]) != string::npos) {
                vowelIndices.push_back(i);
            }
        }

        int left = 0;
        int right = vowelIndices.size() - 1;

        for (; left < right; left++, right--) {
            swap(s[vowelIndices[left]], s[vowelIndices[right]]);
        }

        return s;
    }
};
