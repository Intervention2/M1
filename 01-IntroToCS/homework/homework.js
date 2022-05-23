'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numArr = num.split("");
  var suma = 0;
  for (var i = 0;i < numArr.length;i++){
    suma = suma + Math.pow(2, numArr.length - i - 1) * numArr[i]
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  var binarioArray = "";
  while(num>0){
    let resto = num % 2;
    binarioArray = resto + binarioArray;
    num = Math.floor(num/2)
  }
  return binarioArray
  }
  


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}