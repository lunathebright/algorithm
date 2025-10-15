function solution(progresses, speeds) {
    const needWork = progresses.map((p) => (100 - p)); 
    const needDays = needWork.map((work, idx) => Math.ceil(work/speeds[idx]))
   
    const answer = [];
    let crrMax = needDays[0];
    let count = 1;
    for(let i = 1; i < needDays.length; i++) {
        if(needDays[i] <= crrMax) {
            count++
        } else {
            answer.push(count)
            crrMax = needDays[i];
            count = 1
        }
    }
    answer.push(count);
    return answer
}