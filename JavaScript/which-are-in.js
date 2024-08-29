/*
P - array1, array2
R - array3
iterate through array1
  iterate through array 2
    if y.includes(x)
      then add x to array3
*/

function inArray(array1,array2){
    let array3 = []
    array1.forEach(x => {
      array2.forEach(y => {
        if (y.includes(x) && !array3.includes(x)) {
          array3.push(x)
        }
      })
    })
    return array3.sort()
  }