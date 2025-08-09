function solution(left, right) {
    let result = 0;
    
    for(let i = left; i < right + 1; i++) {
        const sqrt = Math.sqrt(i);
        Number.isInteger(sqrt) ? result -= i : result += i
    }
    
    return result
}