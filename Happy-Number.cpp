class Solution {
public:
    bool isHappy(int num) {
        unordered_set<int> seen;

        while (num != 1 && !seen.count(num)) {
            seen.insert(num);
            num = getNext(num);
        }

        return num == 1;
    }

    int getNext(int n) {
        int total = 0;
        while (n > 0) {
            int digit = n % 10;
            total += digit * digit;
            n /= 10;
        }
        return total;
    }
};
