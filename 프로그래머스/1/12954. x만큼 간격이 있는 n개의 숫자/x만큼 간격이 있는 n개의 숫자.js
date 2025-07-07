function solution(x, n) {
    return [...Array(n)].map((_, i) => x * (i + 1));
}