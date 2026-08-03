function HeapSort(arr){
    let n = arr.length;

    // create the max heap
    for(let i=n-1;i>=0;i--){
        heapifyDown(arr,i,n)
    }

    /**
        Another optimization
        - as we know the leaf node is aready a maxHeap for its subtree
        - That means we dont need to run the maxHeap for the leaf nodes
        - Last non-leaf node = Math.floor(n / 2) - 1
        - Leaf nodes start from index = Math.floor(n / 2)
        - So we can ignore the leaf nodes and run the maxHeap for others

            for(let i=Math.floor(n/2)-1;i>=0;i--){
                heapifyDown(arr,i,n)
            }
     */

    // Start from end & heapify top element and reduce arr size
    for(let i=n-1;i>0;i--){
        // swap the first node which is max with the last node
        [arr[0], arr[i]] = [arr[i],arr[0]]

        // ignore the last node as it is already sorted and heapifyDown the top element to put itself in it correct position
        heapifyDown(arr, 0, i);
    }

    return arr;
}

function heapifyDown(arr, i, n){

    while(true){

        let greatest = i;

        let leftIdx = (2 * i) + 1;
        let rightIdx = (2 * i) + 2;
    
        if(leftIdx < n && arr[greatest] < arr[leftIdx]){
            greatest = leftIdx;
        }

        if(rightIdx < n && arr[greatest] < arr[rightIdx]){
            greatest = rightIdx;
        }

        if(greatest === i) break;

        [arr[greatest], arr[i]] = [arr[i], arr[greatest]]
        i = greatest;
    }

}
let arr = [1,4,10,5,3,7,9,2]
const sortedArr = HeapSort(arr);
console.log(sortedArr);

/**
Final Complexity
Build Heap: O(N)
Heap Sort: O(N log N)
Space: O(1) (in-place)
 */