class Solution:
    def countStudents(self, students, sandwiches):
        count0 = 0
        count1 = 0

        for i in range(len(students)):
            if students[i] == 0:
                count0 += 1
            else:
                count1 += 1

        for i in range(len(sandwiches)):
            if sandwiches[i] == 0:
                if count0 > 0:
                    count0 -= 1
                else:
                    break
            else:
                if count1 > 0:
                    count1 -= 1
                else:
                    break

        return count0 + count1
