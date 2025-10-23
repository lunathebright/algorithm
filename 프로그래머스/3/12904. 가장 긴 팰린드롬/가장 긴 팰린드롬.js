function solution(s) {
    let max = 1;
    
    function temp (left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    for(let i = 0; i < s.length; i++) {
        const odd = temp(i, i);
        const even = temp(i, i+1);
        max = Math.max(max, odd, even)
    }
    
    return max
}