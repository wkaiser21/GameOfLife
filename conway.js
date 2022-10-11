let stepBoard = (arr) => {

    //check if board is empty
    if (arr.length === 0) {
        return arr;
    }

    //make copy of arr
    let nextGenArr = [];
    for(let i = 0; i < arr.length; i++) {
        nextGenArr.push(Array.from(arr[i]));
    }

    for (let r = 0; r < arr.length; r++) {
        for(c = 0; c < arr[r].length; c++) {
            let neighborCount = 0;
            //check r-1, c-1 position and add to count if alive
            if (r-1 >= 0 && r-1 < arr.length && c-1 >= 0 && c-1 < arr[r].length && arr[r-1][c-1]) {
                neighborCount++;
            }
            //check r-1, c position and add to count if alive
            if (r-1 >= 0 && r-1 < arr.length && c >= 0 && c < arr[r].length &&arr[r-1][c]) {
                neighborCount++;
            }
            //check r-1, c+1 position and add to count if alive
            if (r-1 >= 0 && r-1 < arr.length && c+1 >= 0 && c+1 < arr[r].length && arr[r-1][c+1]) {
                neighborCount++;
            }
            //check r, c-1 position and add to count if alive
            if (r >= 0 && r < arr.length && c-1 >= 0 && c-1 < arr[r].length && arr[r][c-1]) {
                neighborCount++;
            }
            //check r, c+1 position and add to count if alive
            if (r >= 0 && r < arr.length && c+1 >= 0 && c+1 < arr[r].length && arr[r][c+1]) {
                neighborCount++;
            }
            //check r+1, c-1 position and add to count if alive
            if (r+1 >= 0 && r+1 < arr.length && c-1 >= 0 && c-1 < arr[r].length && arr[r+1][c-1]) {
                neighborCount++;
            }
            //check r+1, c position and add to count if alive
            if (r+1 >= 0 && r+1 < arr.length && c >= 0 && c < arr[r].length && arr[r+1][c]) {
                neighborCount++;
            }
            //check r+1, c+1 position and add to count if alive
            if (r+1 >= 0 && r+1 < arr.length && c+1 >= 0 && c+1 < arr[r].length && arr[r+1][c+1]) {
                neighborCount++;
            }

            // check each of game rules and updates nextgen
            if (arr[r][c] && (neighborCount === 2 || neighborCount === 3)) {
                nextGenArr[r][c] = true; 
            }
            else if (arr[r][c] && (neighborCount < 2 || neighborCount > 3)) {
                nextGenArr[r][c] = false;
            }
            else if (!arr[r][c] && neighborCount === 3) {
                nextGenArr[r][c] = true;
            }
            else if (!arr[r][c] && (neighborCount < 3 || neighborCount > 3)) {
                nextGenArr[r][c] = false;
            }
        }
    }
    return nextGenArr;
}
