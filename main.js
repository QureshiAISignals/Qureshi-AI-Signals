function startAI(){

let pair = document.getElementById("pair").value;

let result = {
pair: pair,
signal: "🟡 WAIT",
confidence: 50,
trend: "Sideways",
reason: "Waiting for confirmation"
};

if(pair=="EUR/USD"){

result.signal="🟢 BUY";
result.confidence=86;
result.trend="Bullish 📈";
result.reason="EMA + RSI + MACD";

document.getElementById("ema").innerHTML="EMA : +20";
document.getElementById("rsi").innerHTML="RSI : +15";
document.getElementById("macd").innerHTML="MACD : +20";
document.getElementById("bollinger").innerHTML="Bollinger : +10";
document.getElementById("stochastic").innerHTML="Stochastic : +10";
document.getElementById("cci").innerHTML="CCI : +5";
document.getElementById("candlestick").innerHTML="Candlestick : +6";

}

else if(pair=="GBP/USD"){

result.signal="🔴 SELL";
result.confidence=82;
result.trend="Bearish 📉";
result.reason="RSI + CCI + Bollinger";

document.getElementById("ema").innerHTML="EMA : -15";
document.getElementById("rsi").innerHTML="RSI : -20";
document.getElementById("macd").innerHTML="MACD : -15";
document.getElementById("bollinger").innerHTML="Bollinger : -10";
document.getElementById("stochastic").innerHTML="Stochastic : -10";
document.getElementById("cci").innerHTML="CCI : -10";
document.getElementById("candlestick").innerHTML="Candlestick : -2";

}

updateDashboard(result);

}
