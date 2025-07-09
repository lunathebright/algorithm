function solution(s) {
    let numberOfZero = 0;
    let numberOfConvert = 0;
    
    while(s !== "1") {
        const zero = (s.match(/0/g) || []).length;
        numberOfZero += zero;
        s = s.replaceAll("0", "").length.toString(2);
        numberOfConvert++;
    }

    return [numberOfConvert, numberOfZero]
}