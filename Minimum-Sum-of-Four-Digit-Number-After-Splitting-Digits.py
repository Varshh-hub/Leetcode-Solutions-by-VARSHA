class Solution:
    def minimumSum(self, num):
        digits = []
        while num > 0:
            digits.append(num % 10)
            num //= 10
        
        for i in range(len(digits)):
            for j in range(i + 1, len(digits)):
                if digits[i] > digits[j]:
                    digits[i], digits[j] = digits[j], digits[i]
        
        num1 = digits[0] * 10 + digits[2]
        num2 = digits[1] * 10 + digits[3]
        return num1 + num2
