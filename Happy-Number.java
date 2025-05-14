public class Solution {
    public boolean isHappy(int num) {
        HashSet<Integer> seen = new HashSet<>();

        while (num != 1 && !seen.contains(num)) {
            seen.add(num);
            num = getNext(num);
        }

        return num == 1;
    }

    private int getNext(int n) {
        int total = 0;
        while (n > 0) {
            int digit = n % 10;
            total += digit * digit;
            n = n / 10;
        }
        return total;
    }
}