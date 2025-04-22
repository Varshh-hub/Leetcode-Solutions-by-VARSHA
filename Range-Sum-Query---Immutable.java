class NumArray 
{
    private int[] pre;

    public NumArray(int[] nums) 
    {
        pre = new int[nums.length + 1];
        pre[0] = 0;
        for (int i = 0; i < nums.length; i++)
         {
            pre[i + 1] = pre[i] + nums[i];
        }
    }

    public int sumRange(int left, int right) 
    {
        return pre[right + 1] - pre[left];
    }
}
