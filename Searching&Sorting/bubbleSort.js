function bubbleSort(arr){
    let N=arr.length

    //for optimzation
    for(let i=0;i<N;i++){
        let swapped=false;
        for(let j=0;j<N-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped=true
            }
        }

        // if not swapper means there is no arr[j] which is > than arr[j+1], means the array is already
        if(!swapped) break;
    }
    return arr
}

// let arr = [1,5,2,7,9,5,34,3,9,8,3]
let arr = [4,5,1,3,2]
console.log(bubbleSort(arr))

/**

Approach:
    Select the maximum element and put it at the end by adjacent swapping
    To make it more customizable
        Check for the swapped flag, after the second loop if it didnt change that means all the element are already in sorted order
    
    TC: O(n^2)
    SC: O(1)
 */