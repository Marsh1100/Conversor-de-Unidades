//Pasa de m/s a km/h
function velocidadKmH(ms){
    return ms*3600/1000
}

function velocidadMs(kmH){
    return kmH*1000/3600
}

export  {velocidadKmH, velocidadMs}