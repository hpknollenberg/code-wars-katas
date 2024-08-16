/*
P - integers array, oddAmount, evenAmount
R - outlier
for each
  if x % 2 === 0 then add to evenAmount
    else add to odd Amount
if evenAmount === 1 then for each
  if x % 2 === 0
    return x
if oddAmount === 1 then for each
  if x % 2 !== 0
    return x
*/

function findOutlier(integers){
    let evenAmount = 0
    let answer
    
    integers.forEach(x => {
      if (x % 2 === 0) {
        evenAmount++
      }
    })
    
    if (evenAmount === 1) {
      integers.forEach(x => {
        if (x % 2 === 0) {
          console.log(x)
          answer = x
        }
      })
    } else {
      integers.forEach(x => {
        if (x % 2 !== 0) {
          console.log(x)
          answer = x
        }
      })
    }
    return answer
  }