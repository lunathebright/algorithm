function solution(dirs) {
    let x = 0
    let y = 0;
    const visited = new Set();
        
    for(let d of dirs) {
        let nx = x
        let ny = y;
        
        if(d === "U") {ny += 1}
        if(d === "D") {ny -= 1}
        if(d === "L") {nx -= 1}
        if(d === "R") {nx += 1}
        
        if(nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const key = `${Math.min(x, nx)},${Math.min(y, ny)},${Math.max(x, nx)},${Math.max(y, ny)}`;
        visited.add(key);
        
        x = nx; 
        y = ny
    }
    
    return visited.size
}