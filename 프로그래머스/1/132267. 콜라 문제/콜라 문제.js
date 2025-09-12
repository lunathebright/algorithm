function solution(a, b, n) {
    let result = 0;

    while (n >= a) {
        const cokes = Math.floor(n / a) * b;
        result += cokes;
        n = cokes + (n % a);
    }

    return result;
}