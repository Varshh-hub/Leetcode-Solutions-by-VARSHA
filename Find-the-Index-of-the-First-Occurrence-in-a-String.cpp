class Solution {
public:
    int strStr(string h, string n) {
        int hsize = h.size();
        int nsize = n.size();

        if (nsize == 0){
            return 0;
        } 

        for (int i = 0; i <= hsize - nsize; i++) 
        {
            if (h.substr(i, nsize) == n) 
            {
                return i;
            }
        }

        return -1;
    }
};
