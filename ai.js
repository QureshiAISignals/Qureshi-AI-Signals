function calculateAIScore(indicators){

let score = 0;

if(indicators.ema){
score += 20;
}

if(indicators.rsi){
score += 15;
}

if(indicators.macd){
score += 20;
}

if(indicators.bollinger){
score += 15;
}

if(indicators.stochastic){
score += 10;
}

if(indicators.cci){
score += 10;
}

if(indicators.candlestick){
score += 10;
}

return score;

}
