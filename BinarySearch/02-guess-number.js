/**
 * 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/description/
 */


var guessNumber = function(n) {
    let low = 1;
    let high = n;
    while(low<=high){
        let guessedNum = Math.floor(low+((high-low)/2));
        let pick = guess(guessedNum);
        if(pick === 0){
            return guessedNum;
        } else if (pick === -1){
            high = guessedNum-1;
        } else {
            low = guessedNum+1;
        }
    }
    return high;
};