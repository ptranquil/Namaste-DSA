/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * TC: O(nlogn)
 * SC: O(n)
 */

var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let n of nums){
        map.set(n, map.get(n) ? map.get(n)+1 : 1)
    }

    const val = [...map].sort((a,b) => b[1] - a[1])
    let ans = []
    let i=0;
    while(i<k){
        ans.push(val[i][0])
        i++
    }
    return ans;
};


/**
 * Using Heap
 * TC: O(nlogk)
 * SC: O(n)
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let n of nums){
        map.set(n, map.get(n) ? map.get(n)+1 : 1)
    }

    let pq = new MinPriorityQueue(x => x.freq);
    for(const [key, freq] of map){
        pq.enqueue({key, freq})
        if(pq.size() > k){
            pq.dequeue();
        }
    }
    return pq.toArray().map(x => Number(x.key));
};
