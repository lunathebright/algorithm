function solution(clothes) {    
    const cMap = clothes.reduce((acc, crr) => {
        const [name, category] = crr
        acc[category] = (acc[category] || 0) + 1;
        return acc
    }, {});
    
    const values = Object.values(cMap);
    
    const answer = values.reduce((acc, crr) => acc * (crr+1), 1) -1;
    return answer
}