function updateDashboard(result){

document.getElementById("signal").innerHTML = result.signal;

document.getElementById("confidence").innerHTML =
"Confidence: " + result.confidence + "%";

document.getElementById("pairName").innerHTML =
"Pair: " + result.pair;

document.getElementById("trend").innerHTML =
"Trend: " + result.trend;

document.getElementById("reason").innerHTML =
"Reason: " + result.reason;

}
