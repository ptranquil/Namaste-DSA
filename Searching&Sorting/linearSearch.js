function linearSearch(arr, ele){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == ele){
            return i
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6,7,8,9,0]
console.log(linearSearch(arr,3))