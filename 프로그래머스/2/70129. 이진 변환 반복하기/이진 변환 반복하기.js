function solution(s) { 
    let result = s;
    let count = 0;
    let zeros = 0;
    
    function getNewBinary (str) {
        const removeZero = str.split("")
                              .filter(num => num !== "0");
        const removedZero = str.split("")
                               .filter(num => num === "0");
        zeros += removedZero.length
        return removeZero.length.toString(2);
    }
    
    
    while(result !== "1") {
        result = getNewBinary(result);
        count++;
    }

    return [count, zeros]
}