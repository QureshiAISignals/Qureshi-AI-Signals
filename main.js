function startAI(){

let result = generateSignal();

document.getElementById("signal").innerHTML = result.signal;

document.getElementById("confidence").innerHTML =
"Confidence: " + result.confidence + "%";

}

window.onload = startAI;
