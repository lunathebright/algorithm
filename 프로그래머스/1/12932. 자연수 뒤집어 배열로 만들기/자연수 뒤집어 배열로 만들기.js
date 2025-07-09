function solution(n) {
    return n.toString().split("").reduceRight((acc, crr) => ([...acc, crr/1]), [])
}