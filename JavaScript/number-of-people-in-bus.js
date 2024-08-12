var number = function(busStops){
    let acc = 0
    busStops.forEach(x => {
      acc = acc + x[0] - x[1]
    })
    return acc
  }