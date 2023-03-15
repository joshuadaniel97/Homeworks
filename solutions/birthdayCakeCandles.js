

function birthdayCakeCandles(arr) {
  let max = 0;
  let candles = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (max == arr[i]) {
      candles++;
    }
  }
  return candles;
}

// examples

function birthdayCakeCandles(candles) {
    let sortedCandles = candles.sort(function(a, b){return b-a})
    let tallestCandle = sortedCandles[0];
    let result = sortedCandles.filter(candle => candle === tallestCandle);
     return result.length;
  }

//   let tallestCandle =  Math.max(...candles)
//       let result = candles.filter(element => element === tallestCandle)
//       return result.length

