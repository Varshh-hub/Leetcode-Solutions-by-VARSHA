class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int n2 = nums2.length;
        Stack<Integer> s = new Stack<>();
        Map<Integer, Integer> m = new HashMap<>();

        for (int i = 0; i < n2; i++) {
            while (!s.isEmpty() && s.peek() <= nums2[i]) {
                m.put(s.pop(), nums2[i]);
            }
            s.push(nums2[i]);
        }

        int n1 = nums1.length;
        for (int i = 0; i < n1; i++) {
            nums1[i] = m.getOrDefault(nums1[i], -1);
        }

        return nums1;
    }
}