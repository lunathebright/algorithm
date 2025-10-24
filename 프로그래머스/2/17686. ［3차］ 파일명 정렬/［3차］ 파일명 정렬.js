function solution(files) {
    function splitName(file) {
        let head = "";
        let number = "";
        let headIdx = 0;
        
        for(let i = 0 ; i< file.length; i++) {
            if(!/\d/.test(file[i])){
                head += file[i]
            } else {
                headIdx = i;
                break
            }
        }
        
        const headRemoved = file.substring(headIdx)
    
        for(let i = 0; i < 5; i++) {
            if(/\d/.test(headRemoved[i])){
                number += headRemoved[i];
            } else {break;}
        }
        return [head, number]
    }

    const parsed = files.map((file, idx) => {
        const [head, number] = splitName(file);
        return { head, number: Number(number), original: file, idx };
    });

    parsed.sort((a, b) => {
        const headP = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
        if (headP !== 0) return headP;
        if (a.number !== b.number) return a.number - b.number;
        return a.idx - b.idx;
    });

    return parsed.map(f => f.original);
  
    
}