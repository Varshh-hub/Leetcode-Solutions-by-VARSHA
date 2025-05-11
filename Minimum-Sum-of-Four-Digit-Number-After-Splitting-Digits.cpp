class Solution {
public:
    int minimumSum(int num) {
        vector<int> digits;
        while (num > 0) {
            digits.push_back(num % 10);
            num /= 10;
        }

        for (int i = 0; i < digits.size(); ++i) {
            for (int j = i + 1; j < digits.size(); ++j) {
                if (digits[i] > digits[j]) {
                    int temp = digits[i];
                    digits[i] = digits[j];
                    digits[j] = temp;
                }
            }
        }

        int num1 = digits[0] * 10 + digits[2];
        int num2 = digits[1] * 10 + digits[3];
        return num1 + num2;
    }
};
