function solution(s) {
    const letters = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === letters[letters.length - 1]) {
            letters.pop();
        } else {
            letters.push(s[i])
        }
    }
    return letters.length === 0 ? 1: 0 
}