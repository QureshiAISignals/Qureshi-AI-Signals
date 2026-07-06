function generateSignal(){

let market = getMarketData();

let indicators = getIndicators();

let score = calculateAIScore(indicators);

if(score>=80){

return{
signal:"🟢 BUY",
confidence:score
};

}

if(score>=60){

return{
signal:"🟢 BUY",
confidence:score
};

}

if(score>=40){

return{
signal:"🟡 WAIT",
confidence:score
};

}

return{

signal:"🔴 SELL",
confidence:score

};

}
