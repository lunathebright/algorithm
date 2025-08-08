function solution(a, b) {
    return a.reduce((acc, crr, idx) => {
        acc += crr*b[idx];
        return acc
    }, 0)
}