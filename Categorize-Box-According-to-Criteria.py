class Solution(object):
    def categorizeBox(self, length, width, height, mass):
        """
        :type length: int
        :type width: int
        :type height: int
        :type mass: int
        :rtype: str
        """
        volume = length * width * height
        Bulky = False
        Heavy = False

        if any(x >= 10**4 for x in (length, width, height, mass)) or volume >= 10 ** 9:
            Bulky = True

        if mass >= 100:
            Heavy = True
        
        if Bulky and Heavy:
            return "Both"
        elif not Bulky and not Heavy:
            return "Neither"
        elif Bulky and not Heavy:
            return "Bulky"
        elif Heavy and not Bulky:
            return "Heavy"