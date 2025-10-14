function solution(price, money, count) {
    const totalMoney = [...Array(count)].reduce((acc, crr, idx) => (
    acc += price * (idx + 1)), 0);
    
    return totalMoney - money > 0 ? totalMoney - money : 0
}