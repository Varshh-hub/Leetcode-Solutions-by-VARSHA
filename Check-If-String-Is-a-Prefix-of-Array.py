class Solution(object):
    def isPrefixString(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: bool
        """
        t = ""
        for word in words:
            t += word
            if t == s:
                return True
            if len(t) > len(s):
                return False
        return False
