class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false;
        }

        const charCount = new Map();

        for(const char of s){
            charCount.set(char,(charCount.get(char) || 0) + 1)
        }

        for(const char of t){
            const currentCount = charCount.get(char);
            
            if(currentCount === 0  || currentCount === undefined ){
                return false;
            }

            charCount.set(char,currentCount -1)
            
        }
        
        return true;

    }
}
