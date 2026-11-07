class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const countTracker = new Map();

        for(let i = 0; i<nums.length ; i ++) {
            if(countTracker.has(nums[i])){
                return true;
            }else{
                countTracker.set(nums[i],i)
            }
        }

        return false
    }
}
