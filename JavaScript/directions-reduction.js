/*
p - array, change, removeNextElement
r - new array
while there was a change
  change = false
  don't add = false
  iterate through new array
    remove next element?
      yes - remove element
      no - compare element and next element
        if NORTH && SOUTH || EAST && WEST
        remove from array, remove next element (true)
        there was a change (true)

*/

function dirReduc(arr){
    let updatedArray = [...arr]
    let array = arr
    let change = true
    let removeNextElement = false
    let j = 0
    
    while (change === true) {
      change = false
      removeNextElement = false
      j = 0
      
      array.forEach((x, i) => {
        if (removeNextElement === true) {
          updatedArray.splice(i-j, 1)
          removeNextElement = false
          j++
        } else if (x === "NORTH" && array[i+1] === "SOUTH" || 
              x === "SOUTH" && array[i+1] === "NORTH" ||
              x === "WEST" && array[i+1] === "EAST" ||
              x === "EAST" && array[i+1] === "WEST") {
            updatedArray.splice(i-j, 1)
            change = true
            removeNextElement = true
            j++
        }
      })
      array = [...updatedArray]
    }
    return array
  }