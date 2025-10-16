function solution(begin, target, words) {
    function canChange(str, str2) {
        let equal = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] === str2[i]) equal++
        }        
        return equal === str.length - 1;
    }
    
    const queue = [[begin, 0]];
    const visited = Array(words.length).fill(false);
    
      while(queue.length > 0) {
        const [crr, count] = queue.shift();
        
        if(crr === target) return count; 
        
        for (let i = 0; i < words.length; i++) {
            if(!visited[i] && canChange(crr, words[i])) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }
    return 0     
}