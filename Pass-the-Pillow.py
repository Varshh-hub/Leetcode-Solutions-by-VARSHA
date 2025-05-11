class Solution(object):
    def passThePillow(self, n, time):
        """
        :type n: int
        :type time: int
        :rtype: int
        """
        cycle = (n - 1) * 2
        time = time % cycle
        
        if time < n - 1:
            return time + 1
        else:
            return n - (time - (n - 1))
