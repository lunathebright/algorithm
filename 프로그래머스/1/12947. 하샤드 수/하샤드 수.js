function solution(x) {
    const sum = x
    .toString()
    .split('')
    .reduce((acc, crr) => acc + Number(crr), 0);

    return x % sum === 0;
}