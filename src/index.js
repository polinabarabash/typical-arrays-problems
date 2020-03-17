
exports.min = function min (array) {  
  if (array === undefined  || array.length === 0) {
    return 0;
  }
  else {
    let min = 0;
    if (array[0] >= array[1]) {
      min = array[1];
    } else min = array[0];
    array.forEach(element => {
      if (element <= min) {
        min = element;
      } 
    });return min;
  }  
}

exports.max = function max (array) {
  if (array === undefined  || array.length === 0) {
    return 0;
  } 
  else {
    let max = 0;
    array.forEach(element => {
      if (element > max) {
        max = element;
      }
    }); return max;
  }
}

exports.avg = function avg (array) {
  if (array === undefined  || array.length === 0) {
    return 0;
  }
  else {
    let result = 0;
    array.forEach(element => {
    result += element;
    });
    return result / array.length;
  }
  
}
