/*
convert string to array
iterate over array
  rightParenthesis
  iterate over array
    if x === y then leftParenthesis
  return left or right
join array
*/

function duplicateEncode(word){
    let arr = word.split("")
    let finalArr = arr.map(x => {
      let i = 0
      arr.forEach(y => {
        if (x.toUpperCase() === y.toUpperCase()) {
          i++
        }
      })
      return i > 1 ? ")" : "("
    })
    return finalArr.join("");
}
