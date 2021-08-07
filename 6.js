let testStr = 'Write a regular expression to match strings containing both "Softeq" and "#rules" in any order.';

let regExp = new RegExp(/(Softeq|#rules)/)

console.log(regExp.test(testStr));