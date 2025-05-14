class Solution {
public:
    bool isPalindrome(string text) {
        int i = 0;
        int j = text.size() - 1;

        while (i < j) {
            while (i < j && !isalnum(text[i])) i++;
            while (i < j && !isalnum(text[j])) j--;

            if (tolower(text[i]) != tolower(text[j])) return false;

            i++;
            j--;
        }

        return true;
    }
};
