function pairElement(str) {
  let split = str.split('');
  let pair = [['A', 'T'], ['C', 'G']]
  return split.reduce((accu, letter) => {
    let qualifiedPair = pair.filter(eachPair => eachPair.includes(letter));
    return [...accu, qualifiedPair[0].slice().sort(a => {
        if (a === letter) return -1;
        else return 1;
    })] 
  }, [])
}

console.log(pairElement("GCG"));