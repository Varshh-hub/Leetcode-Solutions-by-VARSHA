class Solution 
{
    public List<Integer> findDisappearedNumbers(int[] nums)
     {
        int n = nums.length;
        for (int i = 0; i < n; i++) 
        {
            int idx = Math.abs(nums[i]) - 1;
            nums[idx] = -Math.abs(nums[idx]);
        }

        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < n; i++) 
        {
            if (nums[i] > 0)
                res.add(i + 1);
        }
        return res;
    }
}
