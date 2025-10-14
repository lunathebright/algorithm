function solution(s) {
    return s
        .split(" ")
        .map(word => word
            .split("")
            .map((letter, idx) => {
                if(idx % 2 === 0) {
                    return letter.toUpperCase()
                 } else {
                    return letter.toLowerCase()
            }
    }).join("")
    ).join(" ")
}