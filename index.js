let reverseString = (str) => {
// reverse string with reverse and join method
// first we should convert it to an array
  newStr = [...str].reverse().join('')
  console.log(newStr)
}

reverseString("hello");
