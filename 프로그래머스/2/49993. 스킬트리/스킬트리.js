function solution(skill, skill_trees) {
    let count = 0;
    
    for(const tree of skill_trees){
        const filtered = [...tree].filter(letter => skill.includes(letter)).join("");
        
        if(skill.startsWith(filtered)){
            count++
        }
    }
    return count
}