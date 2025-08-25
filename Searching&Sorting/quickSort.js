/**
QUICK SORT

TC: O(nlogn)
SC: O(1)

 */

function quickSort(arr, low, high){
    if(low<high){
        let partitionIndex = makePartition(arr, low, high)
        quickSort(arr, low, partitionIndex-1)
        quickSort(arr, partitionIndex+1, high)
    }
}

function makePartition(arr, low, high){
    let pivot = arr[low]
    let i=low;
    let j=high;
    while(i<j){

        // found an element which is greater than pivot
        while(arr[i]<= pivot && i <= high-1){
            i++
        }

        // found an element which is less than pivot
        while(arr[j] > pivot && j>=low+1){
            j--
        }

        // If its within boundary, swap it
        if(i<j){
            [arr[i],arr[j]] =[arr[j],arr[i]]
        }
    }

    // j crossed i which mean j is in a position where all the element to its left is lesser than pivot & to right is greater then pivot
    [arr[j],arr[low]] = [arr[low],arr[j]]
    return j
}

let arr = [6,2,4,1,3,3,5]
quickSort(arr, 0, arr.length-1)
console.log(arr)

/**
APPROACH:
    1. Pick a pivot and place it in its correct place
    2. Smaller on the left and larger on the right
 */