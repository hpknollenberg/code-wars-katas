/*
p - days
if more than 7 days
  days * 40 -50
if more than 3 days
  days * 40 - 20
else
  days * 40
*/

function rentalCarCost(d) {
    if (d >= 7) {
      return d * 40 - 50
    } else if (d >= 3) {
      return d * 40 - 20
    } else {
      return d * 40
    }
  }