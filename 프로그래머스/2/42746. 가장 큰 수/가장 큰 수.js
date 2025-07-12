function solution(numbers) {
    const result = numbers  
        .map(String)
        .sort((a, b) => ((b + a) - (a + b)))
        .reduce((acc, crr) => (acc += crr), "");
    return result[0] === "0" ? "0" :result
}