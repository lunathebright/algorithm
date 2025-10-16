function solution(n, computers) {
    const visited = Array(n).fill(false);
    let count = 0;
    
    function bfs (start) {
        const queue = [start];
        visited[start] = true;
        
        while(queue.length > 0) {
            const crr = queue.shift();
            for(let i = 0; i <n; i++) {
                if(computers[crr][i] === 1 && !visited[i]) {
                    visited[i] = true;
                    queue.push(i)
                }
            }
        }
    }
        for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            bfs(i);
            count++;
        }
    }
    return count
}