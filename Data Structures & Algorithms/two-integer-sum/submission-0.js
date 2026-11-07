class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        if(nums.length === 0 || nums.length < 2){
           return [-1,-1]
        }

        const tracker = new Map();

        for(let i = 0; i < nums.length ; i++){
            const complement = target - nums[i];

            if(tracker.has(complement)){
                return [tracker.get(complement),i]
            }else{
                tracker.set(nums[i],i)
            }
        }

        return []
    }
}
