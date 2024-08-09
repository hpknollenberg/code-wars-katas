/*
map over array
  x[0] = age, x[1] = handicap
  if age is at least 55 and handicap is greater than 7, return "Senior"
  else return "Open"
return new array
*/

function openOrSenior(data){
    return data.map(x => {
      if (x[0] >= 55 && x[1] > 7) {
        return "Senior"
      } else {
        return "Open"
      }
    })
  }