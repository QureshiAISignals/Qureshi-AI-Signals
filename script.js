
function analyze(){

let pair=document.getElementById("pair").value;

let signal="WAIT";
let confidence=65;
let trend="Sideways";
let reason="No Clear Setup";

if(pair=="EUR/USD"){
signal="🟢 BUY";
confidence=82;
trend="Bullish 📈";
reason="EMA + RSI + Bollinger";
}

if(pair=="GBP/USD"){
signal="🔴 SELL";
confidence=79;
trend="Bearish 📉";
reason="RSI + CCI + Stochastic";
}

document.getElementById("signal").innerHTML=signal;
document.getElementById("confidence").innerHTML="Confidence: "+confidence+"%";
document.getElementById("pairName").innerHTML="Selected Pair: "+pair;
document.getElementById("trend").innerHTML="Trend: "+trend;
document.getElementById("reason").innerHTML="Reason: "+reason;

}
function runAI(){

let indicators = getIndicators();

let score = calculateAIScore(indicators);

alert("AI Score : " + score);

}
