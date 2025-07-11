function solution(people, limit) {
    const sorted = people.sort((a, b) => (a - b));
    let start = 0;
    let end = sorted.length - 1;
    let boat = 0;
    
    while(start <= end){
        if(sorted[start] + sorted[end] <= limit) {
            start++;
        }
        end--;
        boat++;
    };
    
    return boat
}