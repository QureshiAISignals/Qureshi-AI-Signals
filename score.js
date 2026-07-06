const SCORE = {

EMA: 15,

RSI: 10,

MACD: 15,

BOLLINGER: 10,

STOCHASTIC: 10,

CCI: 10,

ATR: 5,

ADX: 10,

SUPERTREND: 15,

VWAP: 10,

MFI: 10,

WILLIAMS_R: 5,

ICHIMOKU: 15,

SUP_RES: 20,

CANDLESTICK: 20

};

function getTotalScore(activeIndicators){

let total = 0;

for(let key of activeIndicators){

if(SCORE[key]){

total += SCORE[key];

}

}

return total;

}
