
import {temperaturaC, temperaturaF} from "./temperatura.js";
import {distanciaP, distanciaM}  from "./distancia.js";
import {pesoLb, pesoKg}  from  "./peso.js";


//Elementos del DOM
const $selectConversor = document.getElementById("conversor");

const $convertir = document.getElementById("convertir");
const $convertido = document.getElementById("convertido");

const $unidad1 = document.getElementById("unidad-1");
const $unidad2 = document.getElementById("unidad-2");

// AddeventListener
$selectConversor.addEventListener('input',(e)=>{
    
    let select = e.target.value;
    if(select != 'Conversion'){
        $convertir.disabled=false;
        $convertido.disabled=false;
        
        $convertir.value=""
        $convertido.value=""

        if(select == "temperatura"){
            $unidad1.textContent = "Celsius";
            $unidad2.textContent = "Farenheit";
    
        }else if(select== "distancia"){
            $unidad1.textContent = "Metros";
            $unidad2.textContent = "Pies";
            
        }else if(select== "peso"){
            $unidad1.textContent = "Kg";
            $unidad2.textContent = "Libras";
        }else{
            $unidad1.textContent = "m/s";
            $unidad2.textContent = "Km/h";
        }
    }else{
        $convertir.value=""
        $convertido.value=""

        $convertir.disabled=true;
        $convertido.disabled=true;

        $unidad1.textContent = "Unidad 1";
        $unidad2.textContent = "Unidad 2";
    }
});

$convertir.addEventListener('input',(e)=>{
    e.preventDefault();
    let input = e.target.value;
    let select = $selectConversor.value;

  

    if(input != ''){
        if(select == "temperatura"){
            let resultado = temperaturaF(input);
            $convertido.value = resultado;
    
        }else if(select== "distancia"){
            let resultado = distanciaP(input);
            $convertido.value = resultado;
        }else if(select== "peso"){
            let resultado = pesoLb(input);
            $convertido.value = resultado;
        }else{
            let resultado = velocidadMs(input);
            $convertido.value = resultado;
        }
        
    }else{
        $convertido.value = "";
    }

});

$convertido.addEventListener('input',(e)=>{
    let input = e.target.value;
    let select = $selectConversor.value;

    if(input != ''){
        if(select == "temperatura"){
            let resultado =temperaturaC(input);
            $convertir.value = resultado;
    
        }else if(select== "distancia"){
            let resultado = distanciaM(input);
            $convertir.value = resultado;
        }else if(select== "peso"){
            let resultado = pesoKg(input);
            $convertir.value = resultado;
        }else{
            let resultado = velocidadKmH(input);
            $convertir.value = resultado;
        }
       
    }else{
        $convertir.value = "";
    }

});