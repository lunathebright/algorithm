function solution(order) {
    const stack = [];
    let crr = 1;
    let idx = 0;
    
    while(crr <= order.length || stack.length) {
        if(stack.length && stack.at(-1) === order[idx]) {
            stack.pop();
            idx++
        } else if(crr <= order.length) {
            stack.push(crr)
            crr++;
        } else {
            break
        }
    }
    
    return idx
}