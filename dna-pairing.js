// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

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
