class Solution {
public:
    string addBinary(string a, string b) {
        string res = \\;
        int i = a.size() - 1, j = b.size() - 1, carry = 0;
        while (i >= 0 || j >= 0 || carry) {
            int x = i >= 0 ? a[i--] - '0' : 0;
            int y = j >= 0 ? b[j--] - '0' : 0;
            int sum = x + y + carry;
            res = char(sum % 2 + '0') + res;
            carry = sum / 2;
            }
            return res;
        }

};