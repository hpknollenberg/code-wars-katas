function unusedDigits(...arr) {
    let str = arr.toString()
    let iterableArray = str.split("")
    let checkNumber = false
    let unusedNumbers = []
    
    for (let i = 0; i <= 9; i++) {
      checkNumber = false
      iterableArray.forEach(x => {
        if (x == i) {
          checkNumber = true
        }
      })
      if (checkNumber === false) {
        unusedNumbers.push(i)
      }
    }
    return unusedNumbers.join("");
  }
  
  