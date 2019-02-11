// reverse with spread operator
let reverseString = (str) => {
// reverse string with reverse and join method
// first we should convert it to an array
  newStr = [...str].reverse().join('')
  console.log(newStr)
}

reverseString("hello");

// reverse with split
let reverseStringSplit = (str) => {
// reverse string with reverse and join method
// first we should convert it to an array
  newStr = str.split('').reverse().join('')
  console.log(newStr)
}

reverseStringSplit("bye");

// reverse string with for loop
let reverseStringForLoop = (str) => {
  let newStr = '';
  for( let i = str.length - 1; i >= 0; i --) {
    newStr += str[i]
  }
  console.log(newStr)
}

reverseStringForLoop('!oG')

// reverse string with for... of loop
let reverseStringForOfLoop = (str) => {
  let newStr = '';
  for( let letter of str) {
    newStr = letter + newStr
  }
  console.log(newStr)
}

reverseStringForOfLoop('!emosewA')
// reverse string
let reverseStringWReduce = (str) => {
  let newString = [...str].reduce((acc, word) => word + acc)
  console.log(newString)
}

reverseStringWReduce('!dooG')
