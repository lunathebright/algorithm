function solution(k, tangerine) {
    const tangerineObj = tangerine.reduce((acc, crr) => {
        acc[crr] = (acc[crr] || 0) + 1;
        return acc
    } , {});
    
    const sorted = Object.values(tangerineObj).sort((a, b) => b-a);
    
    let tangerineSum = 0;
    let sizes = 0;
    
    for(let i =0; i < sorted.length; i++) {
        tangerineSum += sorted[i];
        sizes++;
        if(tangerineSum >= k)break
    }
    
    return sizes
}