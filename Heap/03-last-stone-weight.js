/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/description/
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let mpq = new MaxPriorityQueue();
    for(let s of stones){
        mpq.enqueue(s);
    }

    while(mpq.size()>1){
        let y = mpq.dequeue();
        let x = mpq.dequeue();
        if(y === x) continue;
        if(y-x > 0){
            mpq.enqueue(y-x);
        }
    }

    return mpq.front() || 0;
};