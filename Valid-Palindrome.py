class Solution(object):
    def isPalindrome(self, text):
        \\\
        :type text: str
        :rtype: bool
        \\\
        i = 0
        j = len(text) - 1

        while i < j:
            while i < j and not text[i].isalnum():
                i += 1
            while i < j and not text[j].isalnum():
                j -= 1

            if text[i].lower() != text[j].lower():
                return False

            i += 1
            j -= 1

        return True
