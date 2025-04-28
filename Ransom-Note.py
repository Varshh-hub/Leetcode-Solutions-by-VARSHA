class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        \\\
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        \\\
        count = [0] * 26
        for i in range(len(magazine)):
            count[ord(magazine[i]) - ord('a')] += 1
        for i in range(len(ransomNote)):
            idx = ord(ransomNote[i]) - ord('a')
            if count[idx] == 0:
                return False
            count[idx] -= 1
        return True