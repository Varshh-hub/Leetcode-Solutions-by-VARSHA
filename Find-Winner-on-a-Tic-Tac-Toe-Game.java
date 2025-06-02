class Solution {
    public String tictactoe(int[][] moves) {
        int[] rows = new int[3], cols = new int[3];
        int diag = 0, anti = 0;

        for (int i = 0; i < moves.length; i++) {
            int r = moves[i][0], c = moves[i][1];
            int val = (i % 2 == 0) ? 1 : -1;     

            rows[r] += val;
            cols[c] += val;
            if (r == c)       diag += val;
            if (r + c == 2)   anti += val;

            if (Math.abs(rows[r]) == 3 || Math.abs(cols[c]) == 3 ||
                Math.abs(diag) == 3    || Math.abs(anti) == 3)
                return val == 1 ? "A" : "B";
        }
        return moves.length == 9 ? "Draw" : "Pending";
    }
}
