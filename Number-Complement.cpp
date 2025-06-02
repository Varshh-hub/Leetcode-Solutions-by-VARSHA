class Solution {
public:
    int findComplement(int n) {
        int bits = 0;
        int temp = n;
        while (temp) {
            bits++;
            temp >>= 1;
        }

        unsigned int mask = (1U << bits) - 1; 
        return n ^ mask;
    }
};
