/*
 p - 2 arrays (a and b), in (boolean)
 r - array c
 iterate through a
  is element in b? 
    iterate through b
    if ===, then in === true
    if through, in === false
  if in === false
    add to c
  in = false
*/

function arrayDiff(a, b) {
  let c = []
  let inBoth = false
  
  a.forEach(x => {
    b.forEach(y => {
      if (x === y) {
        inBoth = true
      }
    })
    if (inBoth === false) {
      c.push(x)
    }
    inBoth = false
  })
  
  return c
}