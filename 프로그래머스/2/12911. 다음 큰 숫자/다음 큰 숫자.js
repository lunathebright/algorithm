function solution(n) {
    const numberOfOne = n.toString(2).split("1").length - 1;
    
    while(true) {
        n++;
        if(n.toString(2).split("1").length - 1 === numberOfOne) {
            return n
        };
    }
}