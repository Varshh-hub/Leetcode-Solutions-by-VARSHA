public class Solution {
    public int findComplement(int n) {
        int bits = Integer.toBinaryString(n).length();
        int mask = (1 << bits) - 1;
        return n ^ mask;
    }
}
