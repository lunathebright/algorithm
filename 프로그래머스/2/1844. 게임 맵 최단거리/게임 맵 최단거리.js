function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array(n).fill().map(a => Array(m).fill(false));
    visited[0][0] = true;

    const queue = [[0,0,1]];
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1]
    
    while(queue.length > 0) {
        const [x, y, d] = queue.shift();
        
        if(x === n - 1 && y === m -1) return d;
        
        for(let i = 0; i < dx.length; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if(maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, d + 1])
                }
            }
        }
    }
    
    return -1
}