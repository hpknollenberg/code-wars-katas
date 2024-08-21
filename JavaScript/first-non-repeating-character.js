/*
split string
iterate through array
  iterate through array
    if x = y, then it is a repeating character
    if never x = y, then return x
*/
function firstNonRepeatingLetter(s) {
    let nonRepeatingCharFound = true
    let firstNonRepeatingCharFound = false
    let firstNonRepeatingChar = ""
    let array = s.split("")
    
    array.forEach((x, i) => {
      nonRepeatingCharFound = true
      array.forEach((y, j) => {
        if (x.toUpperCase() === y.toUpperCase() && i !== j) {
          nonRepeatingCharFound = false
        } 
      })
      if (nonRepeatingCharFound === true && firstNonRepeatingCharFound === false) {
        firstNonRepeatingChar = x
        firstNonRepeatingCharFound = true
      }
    })
    
    return firstNonRepeatingChar
  }