class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) 
    {
        int count0 = 0;
        int count1 = 0;
        for (int i = 0; i < students.size(); i++) 
        {
            if (students[i] == 0) {
                count0++;
            }
            else {
                count1++;
            }
        }

        for (int i = 0; i < sandwiches.size(); i++) 
        {
            if (sandwiches[i] == 0) 
            {
                if (count0 > 0){
                    count0--;
                } 
                else {
                    break;
                }
            } 
            else 
            {
                if (count1 > 0){
                    count1--;
                } 
                else {
                    break;
                }
            }
        }

        return count0 + count1;
    }
};
