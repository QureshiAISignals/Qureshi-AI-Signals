let SIGNAL_HISTORY = [];

function saveSignal(pair, signal, confidence){

SIGNAL_HISTORY.unshift({

pair: pair,

signal: signal,

confidence: confidence,

time: new Date().toLocaleTimeString()

});

if(SIGNAL_HISTORY.length > 20){

SIGNAL_HISTORY.pop();

}

return SIGNAL_HISTORY;

}
