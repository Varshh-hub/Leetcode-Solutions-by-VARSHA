class Solution:
    def checkRecord(self, s: str) -> bool:
        a_count = 0
        l_count = 0

        for ch in s:
            if ch == 'A':
                a_count += 1
                l_count = 0
                if a_count >= 2:
                    return False
            elif ch == 'L':
                l_count += 1
                if l_count >= 3:
                    return False
            else:
                l_count = 0

        return True
