function getAlphabet() {
  let alphabetArray = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCharCode(parseInt([i])));
  }
  return alphabetArray;
}

getAlphabet();
