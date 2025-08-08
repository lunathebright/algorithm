function solution(s){
    const lowerS = s.toLowerCase();
    let p = 0;
    let y = 0;
    for(let i = 0; i < s.length; i++) {
        if (lowerS[i] === "p") {p++} 
        if (lowerS[i] === "y") {y++} 
    }
    
    return p === y
}