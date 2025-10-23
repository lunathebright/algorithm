function solution(n, t, m, timetable) {
    const crew = timetable.map(time => {
        const [h, m] = time.split(":").map(Number);
        return h*60 + m;
    }).sort((a, b) => (a - b));
    
    let startTime = 9 * 60;
    let idx = 0;
    
    for(let i = 0; i < n; i++) {
        let count = 0;
        
        while(idx < crew.length && crew[idx] <= startTime && count < m) {
            idx++;
            count++
        }
        
        if(i === n - 1) {
            if(count < m) {
                return timeFormatting(startTime)
            } else {
                return timeFormatting(crew[idx - 1] - 1)
            }
        }
        startTime += t;
    }
    
    function timeFormatting(minutes) {
      const h = String(Math.floor(minutes / 60)).padStart(2, '0');
      const m = String(minutes % 60).padStart(2, '0');
      return `${h}:${m}`;
    }
}