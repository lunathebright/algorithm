function solution(sizes) {
    const temp = sizes.map(
        size => size.sort((a, b) => b - a)
    )
    let a = sizes[0][0];
    let b = sizes[0][1];
    
    for(let i = 1; i < sizes.length; i++) {
        a = Math.max(sizes[i][0], a);
        b = Math.max(sizes[i][1], b)
    };
    
    return a*b
}