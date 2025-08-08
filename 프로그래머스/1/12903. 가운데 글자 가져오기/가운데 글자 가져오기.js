function solution(s) {
    const center = s.length / 2;
    if(Number.isInteger(center)) {
        return `${s[center - 1]}${s[center]}`
    } else {
        return s[center - 0.5]
    }
}