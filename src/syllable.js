
class Haiku {
  constuctor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  addLines(userInputArray) {
    this.lines.push(haiku);
  }
}

export function allLetter(input) {
  let letters = /^[A-Za-z']+$/;
  if (input.match(letters)) {
    return true;
  }
  else {
    return false;
  }

// export function stringToArray(input) {
//   const wordArray = input.split(" ");
//   return (wordArray);
// }

export function syllables(word) {
    word = word.toLowerCase();
    if(word.length <= 3) { return 1; }
      return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
        .replace(/^y/, '')
        .match(/[aeiouy]{1,2}/g).length; 
}3

export function haikuTest(line1, line2, line3) {
  if (line1 !== 5 || line2 !== 7 || line3!== 5){
    return false;
  }
  else return;
}