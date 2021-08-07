for (let i = 1; i <= 99; i++) {
  if (Number.isInteger(i / 3)) {
    console.log('Open');
    continue
  }
  else if (Number.isInteger(i / 7)) {
    console.log('Source')
    continue
  }
  if (Number.isInteger(i / 3) && Number.isInteger(i / 7)) { 
    console.log('OpenSource')
    continue
  }
  else { console.log(i) }
}