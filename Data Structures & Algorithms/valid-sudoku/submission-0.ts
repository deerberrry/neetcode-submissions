class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let map= new Map<string, Set<string>>();
        for(let i=0;i<9;i++) {
            for(let j=0;j<9;j++) {
                if(board[i][j] === ".") continue;
                
                let rowSet = map.get(`r${i}`)
                if(rowSet?.has(board[i][j])) return false

                let colSet = map.get(`c${j}`)
                if(colSet?.has(board[i][j])) return false

                let boxSet = map.get(`b${Math.floor(i/3)}${Math.floor(j/3)}`)
                if(boxSet?.has(board[i][j])) return false

                if(rowSet) rowSet.add(board[i][j])
                else map.set(`r${i}`, new Set(board[i][j]))

                if(colSet) colSet.add(board[i][j])
                else map.set(`c${j}`, new Set(board[i][j]))

                if(boxSet) boxSet.add(board[i][j])
                else map.set(`b${Math.floor(i/3)}${Math.floor(j/3)}`, new Set(board[i][j]))
            }
        }
        return true;
    }
}
