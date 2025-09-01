function solution(s) {
    const result = [-1];
    
    for(let i = 1; i < s.length; i++) {
       let found = false;
        for(let j = i - 1; j > -1; j--) {
            if(s[i] === s[j]) {
                result.push(i - j);
                found = true
                break;
            }
        }
         if (!found) {
            result.push(-1);
        }
    }
    return result
}