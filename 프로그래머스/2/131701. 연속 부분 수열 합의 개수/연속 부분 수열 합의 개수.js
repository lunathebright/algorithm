function solution(elements) {    
  const n = elements.length;
  const sums = new Set();

  const extended = elements.concat(elements);

  for (let length = 1; length <= n; length++) { 
    for (let start = 0; start < n; start++) {   
      const sub = extended.slice(start, start + length);
      const sum = sub.reduce((acc, cur) => acc + cur, 0);
      sums.add(sum);
    }
  }

  return sums.size;
}