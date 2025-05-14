public class Solution {
    public boolean isPalindrome(String text) {
        int i = 0;
        int j = text.length() - 1;

        while (i < j) {
            while (i < j && !Character.isLetterOrDigit(text.charAt(i))) i++;
            while (i < j && !Character.isLetterOrDigit(text.charAt(j))) j--;

            if (Character.toLowerCase(text.charAt(i)) != Character.toLowerCase(text.charAt(j))) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
