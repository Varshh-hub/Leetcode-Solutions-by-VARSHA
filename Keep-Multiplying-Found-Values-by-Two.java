class Solution {
    public int findFinalValue(int[] nums, int o) {
        Set<Integer> set = new HashSet<>();

        for(int i : nums){
            set.add(i);
        }
        while(set.contains(o)){
            o = o * 2;
        }
        return o;
    }
}

