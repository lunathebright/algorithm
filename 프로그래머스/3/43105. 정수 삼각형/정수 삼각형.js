function solution(triangle) {
    for(let row = triangle.length - 2; row >= 0; row--){
        for(let number = 0; number < triangle[row].length; number++) {
            triangle[row][number] = Math.max(triangle[row + 1][number], triangle[row + 1][number + 1]) + triangle[row][number]
        }
    }
    return triangle[0][0]    
}