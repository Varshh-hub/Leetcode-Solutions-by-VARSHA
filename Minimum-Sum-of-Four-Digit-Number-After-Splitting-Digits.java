class Solution {
    public int minimumSum(int num) {
        int[] digits = new int[4];
        int i = 0;
        while (num > 0) {
            digits[i] = num % 10;
            num /= 10;
            i++;
        }

        for (int a = 0; a < 4; a++) {
            for (int b = a + 1; b < 4; b++) {
                if (digits[a] > digits[b]) {
                    int temp = digits[a];
                    digits[a] = digits[b];
                    digits[b] = temp;
                }
            }
        }

        int num1 = digits[0] * 10 + digits[2];
        int num2 = digits[1] * 10 + digits[3];
        return num1 + num2;
    }
}
