const PAIRS = {

LIVE: [

"EUR/USD",
"GBP/USD",
"USD/JPY",
"AUD/USD",
"USD/CAD",
"EUR/JPY",
"GBP/JPY",
"EUR/GBP",
"AUD/JPY",
"NZD/USD"

],

OTC: [

"EUR/USD OTC",
"GBP/USD OTC",
"USD/JPY OTC",
"AUD/USD OTC",
"USD/CAD OTC",
"EUR/JPY OTC",
"GBP/JPY OTC",
"EUR/GBP OTC",
"AUD/JPY OTC",
"NZD/USD OTC"

]

};

function getPairs(type){

if(type==="OTC"){

return PAIRS.OTC;

}

return PAIRS.LIVE;

}
