class Solution {
    public int averageValue(int[] nums) {
        int total = 0;
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % 2 == 0 && nums[i] % 3 == 0) {
                total += nums[i];
                count++;
            }
        }
        return count == 0 ? 0 : total / count;
    }
}
