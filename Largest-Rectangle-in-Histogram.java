class Solution {
    public int largestRectangleArea(int[] heights) {
        int res = 0;
        int n = heights.length;
        int[] lfs = new int[n];
        int[] rfs = new int[n];
        Arrays.fill(rfs, n - 1);
        Stack<Integer> s = new Stack<>();

        for (int i = 0; i < n; i++) {
            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
                s.pop();
            }
            if (!s.isEmpty()) {
                lfs[i] = s.peek() + 1;
            } else {
                lfs[i] = 0;
            }
            s.push(i);
        }

        while (!s.isEmpty()) {
            s.pop();
        }

        for (int i = n - 1; i >= 0; i--) {
            while (!s.isEmpty() && heights[s.peek()] >= heights[i]) {
                s.pop();
            }
            if (!s.isEmpty()) {
                rfs[i] = s.peek() - 1;
            } else {
                rfs[i] = n - 1;
            }
            s.push(i);
        }

        for (int i = 0; i < n; i++) {
            res = Math.max(res, heights[i] * (rfs[i] - lfs[i] + 1));
        }

        return res;
    }
}
