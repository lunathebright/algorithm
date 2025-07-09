function solution(A,B){
    A.sort((a, b) => (a - b));
    B.sort((a, b) => (b - a));
    
    return A.reduce((acc, crr, idx) => (acc + (crr * B[idx])), 0)
}