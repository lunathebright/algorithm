function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let count = 0;
    let total = 0;
    
    d.forEach((el) => {
        if(total < budget && total + el <= budget) {
            total += el
            count++
        }
    })

    return count
}