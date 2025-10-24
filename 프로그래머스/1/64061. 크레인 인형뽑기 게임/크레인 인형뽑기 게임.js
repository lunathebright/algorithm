function solution(board, moves) {
    const basket = [];
    let count = 0;
    
    for(let move of moves){
        const col = move - 1;
        for(let row = 0; row < board.length; row++) {
            if(board[row][col] !== 0) {
                const doll = board[row][col];
                board[row][col] = 0;
                
                if(basket[basket.length - 1] === doll) {
                    basket.pop();
                    count += 2
                } else {
                    basket.push(doll)
                }
                break;
            }
        }
    }
    return count
}