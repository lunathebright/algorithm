function solution(nums) {
    const numOfGet = nums.length/2;
    
    const obj = nums.reduce((acc, crr) => {
        acc[crr] = (acc[crr] || 0) + 1;
        return acc
    }, {})
    
    if(numOfGet <= Object.keys(obj).length) {
        return numOfGet
    } else {
        return Object.keys(obj).length
    }
}