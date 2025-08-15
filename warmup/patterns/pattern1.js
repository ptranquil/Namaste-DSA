/**

1 2 3 4 5 
2 3 4 5 
3 4 5 
4 5 
5 

*/

n=5
for(let i=0;i<n;i++){
    let row=''
    for(let j=0;j<=n-(i+1);j++){
        row+=`${j+1} `
    }
    console.log(row)
}