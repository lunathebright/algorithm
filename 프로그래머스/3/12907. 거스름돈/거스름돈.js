function solution(n, money) {

    const ways = Array(n + 1).fill(0)
    ways[0] = 1 

    for (const coin of money) {
        for (let amount = coin; amount <= n; amount++) {
            ways[amount] += ways[amount - coin]
        }
    }

    return ways[n] % 1000000007
}