/*
P - nFloors
R - array of strings
nFloors - 1 = spaces for first line
index + n
n++
while spaces >= 0
  number* = index + n
  then spaces + number* + spaces
  n++
  spaces--
  
*/

function towerBuilder(nFloors) {
    let numSpaces = nFloors - 1
    let index = 0
    let n = 1
    let numAsterisk = index + n
    let level = ""
    let tower = []
    
    while (numSpaces > 0) {
      for (let i = 1; i <= numSpaces; i++) {
        level += " " 
      }
      for (let i = 1; i <= numAsterisk; i++) {
        level += "*"
      }
      for (let i = 1; i <= numSpaces; i++) {
        level += " " 
      }
      tower.push(level)
      numSpaces--
      n++
      index++
      numAsterisk = index + n
      level = ""
    }
    for (let i = 1; i <= numAsterisk; i++) {
      level += "*"
    }
    tower.push(level)
    return tower
  }