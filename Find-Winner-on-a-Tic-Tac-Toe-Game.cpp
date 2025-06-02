class Solution {
public:
    string tictactoe(vector<vector<int>>& moves) {
        int rows[3] = {}, cols[3] = {};
        int diag = 0, anti = 0;

        for (int i = 0; i < moves.size(); ++i) {
            int r = moves[i][0], c = moves[i][1];
            int val = (i & 1) ? -1 : 1;          

            rows[r] += val;
            cols[c] += val;
            if (r == c){
                diag  += val;
            }       
            if (r + c == 2)  {
                anti  += val;
            } 

            if (abs(rows[r]) == 3 || abs(cols[c]) == 3 ||
                abs(diag) == 3   || abs(anti) == 3)
                return val == 1 ? "A" : "B";
        }
        return moves.size() == 9 ? "Draw" : "Pending";
    }
};
