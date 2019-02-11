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
