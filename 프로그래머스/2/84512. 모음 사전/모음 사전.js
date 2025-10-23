function solution(word) {
    const vowels = ["A", "E","I", "O", "U"];
    let count = 0 ;
    let answer = 0;
    
    function dfs(crr) {
        if(crr.length > 5) return;
        if(crr.length > 0) count++;
        if(crr === word) {
            answer = count;
            return;
        }
        
        for(let v of vowels) {
            dfs(crr + v)
        }
    }
    
    dfs("");
    return answer
    
}