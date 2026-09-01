/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = Array.from({length: n}, () => Array(n).fill('.'));

    function isSafe(row, col){
        //check column
        for(let i=0;i<row;i++){
            if(board[i][col] === 'Q') return false;
        }

        //check upper left diagonal
        for(let i=row-1, j=col-1;i>=0 && j>=0; i--,j--){
            if(board[i][j] === 'Q') return false;
        }

        //check upper right diagonal
        for(let i=row-1, j=col+1;i>=0&& j<n; i--,j++){
            if(board[i][j] === 'Q') return false;
        }

        return true;
    }

    function backtrack(row){

        if(row === n){
            result.push(
                board.map((row) => row.join(''))
            )
            return;
        }

        for(let col=0;col<n;col++){
            if(!isSafe(row,col)){
                continue;
            }

            board[row][col] = 'Q';
            backtrack(row+1);
            board[row][col] = '.';
        }
    }
    backtrack(0);
    return result;
};


// Optimize Approach using Set
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = Array.from({length: n}, () => Array(n).fill('.'));

    function backtrack(board, row, colSet, leftDiag, rightDiag){

        if(row === n){
            result.push(board.map((row) => row.join('')));
        }

        for(let col=0;col<n;col++){
            if(colSet.has(col) || leftDiag.has(row-col) || rightDiag.has(row+col)){
                continue;
            }

            board[row][col] = 'Q';
            colSet.add(col);
            leftDiag.add(row-col);
            rightDiag.add(row+col);

            backtrack(board, row+1, colSet, leftDiag, rightDiag)

            board[row][col] = '.';
            colSet.delete(col);
            leftDiag.delete(row-col);
            rightDiag.delete(row+col);
        }
    }

    let colSet = new Set();
    let leftDiag = new Set();
    let rightDiag = new Set();
    backtrack(board, 0, colSet, leftDiag, rightDiag);
    return result;
};