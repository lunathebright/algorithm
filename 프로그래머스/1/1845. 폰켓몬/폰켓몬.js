function solution(nums) {
    const numOfGet = nums.length/2;
    const numsSet = new Set(nums);
   
    return Math.min(numOfGet, numsSet.size)
}