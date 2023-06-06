// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.


function binaryAgent(str) {
  str = str.split(" ");
  // console.log("alec",str) 
  return str.map(binary => {
    // console.log("alec",binary)
    binary = binary.split("").reverse().join("");
    let charCode = 0; 
    for (let i = 0; i < binary.length; i++) {
      console.log(`${parseInt(binary[i])} * ${Math.pow(2, i)}`);
      charCode += parseInt(binary[i]) * Math.pow(2, i);
    }
    // console.log("char", String.fromCharCode(charCode));
    return String.fromCharCode(charCode);
  }).join("");
  
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
