function solution(n, words) {
    const findRepeated = () => {
        const used = new Set();
        
        for(let i = 0; i < words.length; i++) {
            const isRp = used.has(words[i]);
            if(isRp) {
                return i
            } else {
                used.add(words[i])
            }
        }
         return 0
    }
    
    const findWrong = () => {
      for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        if(words[i][0] !== prev[prev.length - 1]) return i;
      }
        return 0;
    }
        
    const rpIdx = findRepeated();
    const wrongIdx = findWrong();
        
    if(rpIdx === 0 && wrongIdx === 0) return [0, 0]
    
    let minIdx;
    if (rpIdx === 0) minIdx = wrongIdx;
    else if (wrongIdx === 0) minIdx = rpIdx;
    else minIdx = Math.min(rpIdx, wrongIdx);
    
    const player = (minIdx % n) + 1;
    const turn = Math.floor(minIdx/n) + 1
    
    return [player, turn]
    
}