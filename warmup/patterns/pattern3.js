/**

1
10
101
1010
10101

 */
n=5
for(let i=0;i<n;i++){
    let row="";
    let flag=1
    for(let j=0;j<=i;j++){
        row+=`${flag}`
        if(flag == 0){
            flag = 1
        }else {
            flag = 0
        }
    }
    console.log(row)
}


/**
NOTES:

Here we are making use of a toggle to switch the ith value
To notes change the value at every start of the loop put the initialization of the flag to the top line
it will print

1
01
010
1010
10101
 */