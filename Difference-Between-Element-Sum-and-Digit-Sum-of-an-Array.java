class Solution {
public int differenceOfSum(int[] nums) {
    int sum1 = 0, sum2 = 0;

    for (int i = 0; i < nums.length; i++) {
        sum1 += nums[i];
        int n = nums[i];
        while (n > 0) {
            sum2 += n % 10;
            n /= 10;
        }
    }

    return Math.abs(sum1 - sum2);
}

}