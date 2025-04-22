/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count0 = 0;
    let count1 = 0;
    for (let i = 0; i < students.length; i++) 
    {
        if (students[i] == 0) {
            count0++;
        }
        else {
            count1++;
             }
        }

        for (let i = 0; i < sandwiches.length; i++) 
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
};