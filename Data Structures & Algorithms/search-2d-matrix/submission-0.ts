class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let start = 0;
        let end = matrix.length-1;

        while(start<=end) {
            let mid = Math.floor((end+start)/2)
            let row = matrix[mid]
            if(row[0] == target || row[row.length-1] ==target) {
                return true;
            }
            console.log('row',row)
            if(row[0] <= target && row[row.length-1] >=target) {
                console.log(`row selected`, row)
                let rowStart = 0, rowEnd = row.length-1;
                while(rowStart<=rowEnd) {
                    let mid = Math.floor((rowStart+rowEnd)/2);
                    if(row[mid] === target) return true;
                    if(target > row[mid]) rowStart = mid+1
                    else rowEnd = mid -1
                }
            }
            if(target > row[row.length-1]) {
                start = mid + 1;
            }
            else end = mid - 1;
        }
        return false;
    }
}
