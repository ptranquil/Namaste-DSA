/**

    *
   **
  ***
 ****
*****

 */

let n=5
for(let i=0;i<n;i++){
    let row='';
    for(let j=0;j<n-(i+1);j++){
        row+='-';
    }
    for(let k=0;k<i+1;k++){
        row+='*'
    }
    console.log(row)
}

/**
1st loop for the row
2nd loop for the empty space
3rd loop for the stars

just by changin the line 20 to row+=' *'

The pattern will change to 

---- *
--- * *
-- * * *
- * * * *
 * * * * *
 */