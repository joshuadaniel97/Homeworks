function birthdayCakeCandles(candles){
    let maxHeight = candles[0]
    for(let i = 0; i < candles.length; i++){
        if (candles[i] > maxHeight) maxHeight = candles[i]
    }
    return maxHeight
}

