class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>(Collections.nCopies(rowIndex + 1, 1));
        for (int i = 1; i <= rowIndex / 2; i++) {
            row.set(i, (int)((long)row.get(i - 1) * (rowIndex - i + 1) / i));
            row.set(rowIndex - i, row.get(i));
        }
        return row;
    }
}
