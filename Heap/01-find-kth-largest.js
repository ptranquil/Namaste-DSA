/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const mpq = new MyPriorityQueue();
    for(let i=0;i<nums.length;i++){
        mpq.enqueue(nums[i],nums[i])
    }
    console.log(mpq.pq)
    let ans = null;
    for(let i=1;i<=k;i++){
        if(i === k){
            ans = mpq.dequeue();
        } else {
            mpq.dequeue();
        }
    }
    return ans;
};

class MyPriorityQueue{

    constructor(){
        this.pq = [];
    }

    enqueue(value){        
        this.pq.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let i = this.pq.length-1;
        while(i > 0){
            let parentIdx = Math.floor((i-1)/2);

            if(this.pq[parentIdx] < this.pq[i]){
                [this.pq[parentIdx], this.pq[i]] = [this.pq[i], this.pq[parentIdx]];
                i = parentIdx;
            } else {
                break;
            }
        }
    }

    dequeue(){

        if(this.pq.length === 0) return null;
        if(this.pq.length === 1) return this.pq.pop();

        const top = this.pq[0];
        this.pq[0] = this.pq.pop();
        this.heapifyDown(0);
        return top;
    }

    heapifyDown(i){
        let n = this.pq.length;;
        while(true){
            let max = i;

            let leftIdx = 2 * i + 1;
            let rightIdx = 2 * i + 2;

            if(leftIdx < n && this.pq[leftIdx] > this.pq[max]){
                max = leftIdx;
            }
            if(rightIdx < n && this.pq[rightIdx] > this.pq[max]){
                max = rightIdx;
            }

            if(max === i) break;

            [this.pq[i], this.pq[max]] = [this.pq[max], this.pq[i]];
            i = max;
        }
    }

    isEmpty(){
        return this.pq.length === 0;
    }

    size(){
        return this.pq.length;
    }

    peek(){
        if(!this.pq.length) return;
        return this.pq[this.pq.length-1]
    }
}
/**
 * TC: Building the heap by inserting one element at a time: O(n), Each insertion takes O(log n)
 * Total : O(nlogn) + O(klogn) ~ O(nlogn) as n>k
 * SC: O(n) because we are storing all element
 */




// Using inbuilt javascript Priority queue which is only available in leetcode
var findKthLargest = function(nums, k) {
    const pq = new MinPriorityQueue();
    for(let i=0;i<nums.length;i++){
        pq.enqueue(nums[i]);
        if(pq.size() > k){
            pq.dequeue();
        }
    }
    return pq.front();
}
/**
 * TC: O(nlogk)
 * SC: O(k)
 */