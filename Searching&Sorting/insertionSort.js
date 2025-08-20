function insertionSort(arr){

    let N=arr.length;
    for(let i=1;i<N;i++){
        j=i;
        while(j>0 && arr[j]<arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            j--
        }
    }

    return arr;
}

let arr = [1,5,2,7,9,5,34,3,9,8,3]
// let arr = [4,5,1,3,2]
console.log(insertionSort(arr))
/**
 * Why start with i=1: because here we expect that the first element is already sorted
 * Why (arr[j]<arr[j-1]) in the while loop itself: Because if the condition fails that means no need to do loop from j to 0
 * because all the element before that is already sorted and if the current element is not less than the last element, means its already 
 * in its current position
 * TC: O(n^2)
 * SC: O(1)
 * 
 * To remember: Putting playing cards in its correct position one by one
 */