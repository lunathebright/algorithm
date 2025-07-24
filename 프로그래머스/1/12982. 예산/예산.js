function solution(d, budget) {
    const sorted = d.sort((a,b) => a -b);
    
    let result = 0;
    
    d.forEach(price => {
        (budget - price  >= 0) && (budget -= price, result++)
    })
    
    return result
}