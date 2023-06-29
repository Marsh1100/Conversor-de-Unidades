
import temperatura from "./temperatura.js";
import distancia from "./distancia.js";
import peso from  "./peso.js";
import velocidad from "./velocidad.js";


//Elementos del DOM
const $selectConversor = document.getElementById("conversor");

const $convertir = document.getElementById("convertir");
const $convertido = document.getElementById("convertido");

const $unidad1 = document.getElementById("unidad-1");
const $unidad2 = document.getElementById("unidad-2");


$selectConversor.addEventListener('input',(e)=>{
    if(e.target.value == "temperatura"){

    }else if(e.target.value == "temperatura"){
        $unidad1.textContent = "Celsius";
        $unidad2.textContent = "Farenheit";

    }else if(e.target.value == "distancia"){
        $unidad1.textContent = "Metros";
        $unidad2.textContent = "Pies";
        
    }else if(e.target.value == "peso"){
        $unidad1.textContent = "Kg";
        $unidad2.textContent = "Libras";
    }else if(e.target.value == "velocidad"){
        $unidad1.textContent = "m/s";
        $unidad2.textContent = "Km/h";
    };
});