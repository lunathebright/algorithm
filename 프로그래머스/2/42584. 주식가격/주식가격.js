function solution(prices) {
    return prices.map((price, idx) => {
        let count = 0;
        for (let i = idx + 1; i < prices.length; i++) {
            count++;
            if (prices[i] < price) break;
        }
        return count;
    });
}