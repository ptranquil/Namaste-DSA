/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
 */

var kthSmallest = function(matrix, k) {
    let heap = new MinPriorityQueue(x => x.val);

    // push the first column element to the priority queue
    let n = matrix[0].length;
    for(let i=0;i<n;i++){
        heap.push({val: matrix[i][0], row: i, col: 0})
    }

    for(let i=0;i<k-1;i++){
        let {val, row, col} = heap.pop();
        if(col+1 < n){
            heap.push({val: matrix[row][col+1], row: row, col: col+1})
        }
    }
    return heap.pop().val;

};