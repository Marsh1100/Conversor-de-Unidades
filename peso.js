
function pesoLb(kg){
    return kg*2.2046.toFixed(3)
}

function pesoKg(lb){
    return (lb*(1/2.2046)).toFixed(3)
}

export {pesoLb, pesoKg}