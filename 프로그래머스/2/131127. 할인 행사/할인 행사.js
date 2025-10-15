function solution(want, number, discount) {
    let answer = 0;
    
    const target = want.reduce((acc, crr, idx) => {
        acc[crr] = number[idx];
        return acc
    }, {})

    for(let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i+10);
        
        const windowCount = window.reduce((acc, crr) => {
            acc[crr] = (acc[crr] || 0) + 1;
            return acc
        }, {});
        
        let ok = true;
        for(const key in target) {
            if((windowCount[key] || 0) < target[key]) {
                ok = false;
                break;
            } 
        }
        if(ok) answer++
    }
    
    return answer
}