class Solution {
public:
    bool canPlaceFlowers(vector<int>& f, int n) {
        if (n == 0) {
            return true;
        }

        int len = f.size();

        for (int i = 0; i < len; i++) {
            if (f[i] == 0) {
                bool lft = (i == 0 || f[i - 1] == 0);
                bool rgt = (i == len - 1 || f[i + 1] == 0);

                if (lft && rgt) {
                    f[i] = 1;
                    n--;

                    if (n == 0) {
                        return true;
                    }
                }
            }
        }

        return n == 0; 
    }
};
