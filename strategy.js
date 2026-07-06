const STRATEGY = {

minimumScore: 70,

strongBuy: 90,

buy: 70,

wait: 50,

sell: 30

};

function decideSignal(score){

if(score >= STRATEGY.strongBuy){

return "🟢 STRONG BUY";

}

if(score >= STRATEGY.buy){

return "🟢 BUY";

}

if(score >= STRATEGY.wait){

return "🟡 WAIT";

}

return "🔴 SELL";

}
