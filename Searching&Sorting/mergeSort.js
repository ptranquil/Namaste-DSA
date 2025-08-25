/**

MERGE SORT: Divide & Conquer || Merge
LC: https://leetcode.com/problems/sort-an-array/description/

Implemented using merge Sort
TC: O(nlogn)
SC: O(n)
It is a recurrsive Algorithm
 */

function mergeSort(arr, low, high){
    if(low == high) return
    let mid = Math.floor((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid+1, high)
    merge(arr, low, mid, high)

    return arr
}

function merge(arr, low, mid, high){
    let temp=[]
    let left=low;
    let right=mid+1
    while(left <= mid && right <= high){
        if(arr[left]<arr[right]){
            temp.push(arr[left])
            left++
        } else {
            temp.push(arr[right])
            right++
        }
    }

    while(left <= mid){
        temp.push(arr[left])
        left++
    }

    while(right <= high){
        temp.push(arr[right])
        right++
    }

    for(let i=low;i<=high;i++){
        arr[i] = temp[i-low]
    }
}

let arr = [6,3,1,4,2,5]
console.log(mergeSort(arr, 0 ,arr.length-1))