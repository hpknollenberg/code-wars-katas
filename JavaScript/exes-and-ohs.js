function XO(str) {
    let x = 0
    let o = 0
    let array = str.split("")
    array.forEach(char => {
      if (char.toUpperCase() === "X") {
        x++
      } else if (char.toUpperCase() === "O") {
        o++
      }
    })
    if (o === x) {
      return true
    } else {
      return false
    }
}