function findSecondLargest(arr){
    let N = arr.length
    if(N < 2){
        console.log('Need more than 2 ele')
        return;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let ele of arr){
        if(ele > largest){
            secondLargest = largest
            largest = ele
        } else if (ele > secondLargest && ele != largest){
            /** Above the second condtion is to handle the duplicate element */
            secondLargest = ele
        }
    }
    return secondLargest
}

let arr = [10,20,8,9,3,5,20]
console.log(findSecondLargest(arr));

/**

Corner Cases
    - Array should not be empty and it should contains min 2 elements
    - Should work for negative numbers too. The current code works for the negative numbers
    - Should work incase of duplicate ele [10,10,20,20] here larges is 20, second largest is 10
 */