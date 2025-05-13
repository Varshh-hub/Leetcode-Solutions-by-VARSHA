class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        Arrays.fill(res, -1);  
        Stack<Integer> s = new Stack<>();
        
        for (int i = 2 * n - 1; i >= 0; i--) {
            while (!s.isEmpty() && s.peek() <= nums[i % n]) {
                s.pop();
            }
            
            if (i < n && !s.isEmpty()) {
                res[i % n] = s.peek();
            }
            
            s.push(nums[i % n]);
        }
        
        return res;
    }
}