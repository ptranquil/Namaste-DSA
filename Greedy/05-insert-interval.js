var insert = function(arr, x) {
    let n = arr.length;
    let res = [];
    let i=0;

    // left non overlapping interval
    while(i<n && arr[i][1] < x[0]){
        res.push(arr[i])
        i++;
    }

    // merge overlapping interval
    while(i<n && arr[i][0] <= x[1]){
        x[0] = Math.min(x[0], arr[i][0]);
        x[1] = Math.max(x[1], arr[i][1]);
        console.log(x)
        i++
    }
    res.push(x);

    // right non overlapping interval
    while(i<n){
        res.push(arr[i])
        i++;
    }
    return res;

};