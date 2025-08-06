function solution(a, b) {
    if (a === b) return a
    
    const sorted = [a,b].sort((a, b) => (a - b));
    let result = 0;
    for(let i = sorted[0]; i < sorted[1]+1; i++) {
        result += i
    }
    
    return result
}