function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let height = 3; height <= total/3; height++) {
        const width = total/height;
        if(Number.isInteger(width) && width >= height) {
            const center = (width - 2) * (height - 2);
            if (center === yellow) {
                return [width, height]
            }
        }
    }
}