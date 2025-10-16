function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],          
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] 
    ];
    
    const scores = [0,0,0];
    
    for(let i = 0; i < answers.length; i++) {
        patterns.forEach((p, idx) => {
            if(answers[i] === p[i % p.length]){
                scores[idx]++
            }
        })
    }
    
    const max = Math.max(...scores);
    const answer = [];
    
    scores.forEach((s, idx) => {
        if(s === max) answer.push(idx +1)
    })
    
    return answer.sort((a, b) => a -b)
    
}