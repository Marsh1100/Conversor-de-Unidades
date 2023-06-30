function temperaturaC(farenheit){
    return (farenheit-32)*(5/9).toFixed(3)
}
function temperaturaF(celsius){
    return ((celsius*9/5)+32).toFixed(3)
}

export {temperaturaC, temperaturaF}