function sum(array) {
  let num = [];
  for(let i = 0; i < array.length; i++) {
    if(Number.isInteger(+array[i])) {
      num.push(parseInt(array[i]));
    }
    else { continue }
  }
  return num.reduce((acc, currentValue) => acc + currentValue);
}

sum(['1', 'a', '25', '13.1']);