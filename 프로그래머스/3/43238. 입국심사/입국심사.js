function solution(n, times) {
    let min = Math.min(...times);
    let max = Math.max(...times) * n;
    let result = max;
    
    while(min <= max) {
        const center = Math.floor((min + max) / 2)         
        
        const total = times.reduce((acc, crr) => (acc + Math.floor(center/crr)), 0)
       
        if(total >= n) {
            result = center;
            max = center - 1
        } else {
            min = center + 1
        }
    }

    return result
    
}