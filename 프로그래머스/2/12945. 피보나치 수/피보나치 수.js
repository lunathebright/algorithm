function solution(n) {
    let a = 0;
    let b = 1;
    let count = 2;
    
    while(count <= n) {
        const nextNumber = (a + b) % 1234567;
        a = b;
        b = nextNumber;
        count++
    }
    
    return b 
}