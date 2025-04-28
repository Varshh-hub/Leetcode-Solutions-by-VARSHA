class Solution(object):
    def reversePrefix(self, word, ch):
        """
        :type word: str
        :type ch: str
        :rtype: str
        """
        idx = -1
        for i in range(len(word)):
            if word[i] == ch:
                idx = i
                break
        if idx == -1:
            return word
        word = list(word)
        left, right = 0, idx
        while left < right:
            word[left], word[right] = word[right], word[left]
            left += 1
            right -= 1
        return ''.join(word)
