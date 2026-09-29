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

// NOTE
// A stable sorting alorithm is the one which maintain the relative order of the element if they are same
// Heap Sort is not a stable sorting algorithm



var sortArray = function (nums) {
    return quickSort(nums, 0, nums.length - 1);
};

function quickSort(arr, start, end) {
    if (start < end) {
        let pI = makePartition(arr, start, end);
        quickSort(arr, start, pI - 1);
        quickSort(arr, pI + 1, end);
    }
    return arr;
}

function makePartition(arr, startIdx, endIdx) {
    let randomIdx =
        Math.floor(Math.random() * (endIdx - startIdx + 1)) + startIdx;
    [arr[randomIdx], arr[endIdx]] =
        [arr[endIdx], arr[randomIdx]];
    let pivot = arr[endIdx];

    let pos = startIdx - 1;
    for (let i = startIdx; i < endIdx; i++) {
        if (arr[i] < pivot) {
            pos++;
            [arr[i], arr[pos]] = [arr[pos], arr[i]];
        }
    }
    [arr[pos + 1], arr[endIdx]] = [arr[endIdx], arr[pos + 1]];
    return pos+1;
}

/**
TC:
    Best Case: O(nlogn)
    Average Case: O(nlogn)
    Worst Case: O(n^2) where the array is sorted so the end pivot will reuslt in checking all element

SC:
O(logn) - Recurrsion stack space. Rest O(1)
Very Efiicient in terms of TC 

Is Quick Sort stable: NO
    because consider an array [3,1,5,4,1,2] , the sorted result will be [1,1,2,3,4]
    Now the stable sorting algorithm ill gurantee that both the 1st will appear as per their order which means
    the 1 which is present in 1st index will come first and at 4th index will come 2nd
    But as quick sort is not stable it does guranteed the order of same element in an array

Is Quick sort better than Merge Sort
Yes beacuse is has O(1) Space compexity and fater execution
 */