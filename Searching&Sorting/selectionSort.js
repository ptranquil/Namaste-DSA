function selectionsort(arr){
    let N=arr.length;
    for(let i=0;i<N-1;i++){
        min=i;
        for(let j=i;j<N;j++){
            if(arr[j] < arr[min]){
                min=j
            }
        }
        if(min != i){
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    console.log(arr)
}

let arr = [32,4,35,45,656767,3345,456,456]
selectionsort(arr)

/**
 * Approach: To remember
 * Select the min element and put it at the first position by adjacent swapping
 * TC: O(n^2)
 * SC: O(1)
 * 
 * Why N-1 in first for loop because we need to go till the last second element, because after sorting the last element 
 * will always be in its correct position
 */