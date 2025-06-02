class Solution {
    public boolean validMountainArray(int[] arr) {
        int i = 0, j = arr.length - 1;

        if (arr.length < 3) return false;

        while (i + 1 < arr.length && arr[i] < arr[i + 1]) i++;
        while (j > 0 && arr[j] < arr[j - 1]) j--;

        return i > 0 && j < arr.length - 1 && i == j;
    }
}
