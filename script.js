alert("Hola bienvenido, tienes 5 intentos para completar este Quiz de 3 preguntas sobre JavaScript.")

let intento = 4;
let primerPregunta = prompt("La palabra reservada para crear una variable es:");


while(primerPregunta != "var"){
    alert(`Respuesta incorrecta, le quedan ${intento} intentos`);
    
    if(intento === 0){
        break;
      }

    intento = intento - 1;
    primerPregunta = prompt("La palabra reservada para crear una variable es:");


}


if(intento === 0){
    alert("Se terminaron tus intentos");
}else{
    alert("Muy bien, siguiente pregunta");
}

if(intento > 0){
let segundaPregunta = prompt("La palabra reservada para crear una estructura condicional es:")

while(segundaPregunta != "if"){
    alert(`Respuesta incorrecta, le quedan ${intento} intentos`);
    
    if(intento === 0){
        break;
      }

    intento = intento - 1;
    segundaPregunta = prompt("La palabra reservada para crear una estructura condicional es:");

}

if(intento === 0){
    alert("Se terminaron tus intentos");
}else{
    alert("Muy bien, siguiente pregunta");
}
}

if(intento > 0){
let tercerPregunta = prompt("La palabra reservada para crear una variable constante es:")

while(tercerPregunta != "const"){
    alert(`Respuesta incorrecta, le quedan ${intento} intentos`);
    
    if(intento === 0){
        break;
      }

    intento = intento - 1;
    tercerPregunta = prompt("La palabra reservada para crear una constante es:");

}

if(intento === 0){
    alert("Se terminaron tus intentos");
}else{
    alert("Muy bien, finalizo el Quiz");
}
}

