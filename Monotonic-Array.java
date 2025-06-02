class Solution {
    public boolean isMonotonic(int[] nums) {
        boolean s = true; 
        boolean d = true; 
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) d = false;
            if (nums[i] < nums[i - 1]) s = false;
        }
        return s || d;
    }
}
