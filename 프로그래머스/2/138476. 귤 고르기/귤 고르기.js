function solution(k, tangerine) {    
   const tanMap = tangerine.reduce((acc, crr) => {
       acc[crr] = (acc[crr] || 0) + 1;
       return acc
   }, {});

    const sorted = Object.values(tanMap).sort((a, b) => (b - a));
    
    let res = 0;
    let count = 0;

    for(let i = 0; i < k; i++) {
        res += sorted[i];
        count++
        if(res >= k) break;
    }
    
    return count
}