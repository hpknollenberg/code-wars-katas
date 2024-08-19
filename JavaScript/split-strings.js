/*
P - string
R - split strings of two characters
split string by ""
current string of two letters
iterate through array of split string
  
*/

function solution(str){
    let array = str.split("")
    let currentString = ""
    let finalArray = []
    
    array.forEach((x, i) => {
      if (i % 2 === 0) {
        if (array[i+1] === undefined) {
          currentString = x + "_"
          finalArray.push(currentString)
        } else {
          currentString = x + array[i+1]
          finalArray.push(currentString)
        }       
      } 
    })
    return finalArray
 }