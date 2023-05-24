function translatePigLatin(str) {
  return str.replace(/^([aeiou])/, 'w$1').replace(/^([^aeiou]+)(.*)/, '$2$1ay');
}

console.log(translatePigLatin("consonant"));