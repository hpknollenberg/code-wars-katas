function solution(str, ending){
    let splitRevStr = str.split("").reverse()
    let splitRevEnding = ending.split("").reverse()
    let sameChar = true
    
    for (let i = 0; i < splitRevEnding.length; i++) {
      if (splitRevEnding[i] !== splitRevStr[i]) {
        sameChar = false
      }
    }
    
    return sameChar
  }