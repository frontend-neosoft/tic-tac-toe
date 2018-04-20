var arr = [
  [195, 11, 12],
  [37, 13, 76],
  [165, 65, 52],
  [217, 51, 82],
  [60, 29, 45],
  [240, 21, 44],
  [325, 1, 30],
  [145, 55, 22],
  [20, 99, 51],
  [200, 28, 85],
  [45, 16, 22],
  [225, 64, 10]
]

var arrObj = {}
var output = []

//creating hashmap for the array to reference values faster
for(var key in arr){
  var item = arr[key]
  arrObj[item[0]] = item
}

//calculating values in hashmap
for(var key in arrObj){


  var tempArr = [],
      plus180 = arrObj[makeKeyCombinations(key, '+')],
      minus180 = arrObj[makeKeyCombinations(key, '-')]

  if(plus180){
    tempArr.push(arrObj[key])
    tempArr.push(plus180)
  }
  if(minus180){
    tempArr.push(arrObj[key])
    tempArr.push(minus180)
  }
  console.log("temp arr : ", tempArr)
  if(tempArr.length>=2){
    output.push(tempArr)
    delete arrObj[makeKeyCombinations(key, '+')]
    delete arrObj[makeKeyCombinations(key, '-')]
  }
}

function makeKeyCombinations(key, op){
  //if is faster than switch
  var lookup;
  if(op == '+'){
    lookup = parseInt(key) + 180
  }
  else if(op == '-'){
    lookup = parseInt(key) - 180
  }
  return lookup.toString()
}

console.log(output);
