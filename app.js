let numeroMaximo = 10;
let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];


//funcion para moficiar el texto de elementos HTML
function asignarTextElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextElemento('p',`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
    }else {
        //el usuario no acerto el numero
        if (numeroUsuario > numeroSecreto) {
            asignarTextElemento('p','el humero secreto es menor');
        } else {
            asignarTextElemento('p','el humero secreto es mayor');
        }
        
        intentos++;
        limpiarCaja();

    }
    return;
}  

// funcion para generar el numero secreto de manera aleatoria
function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length >= numeroMaximo){
        asignarTextElemento('p','ya se sortearon todos los numeros :(');
        //document.getElementById('intentar').setAttribute('disabled','true');
    }else{
        //si el numero generado esta en la lista se vuelve a generar
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

//funcion para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}

function condicionesIniciales() {
    asignarTextElemento('h1','Bienvenido, Juego del numero secreto');
    asignarTextElemento('p',`escoge un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
}

//funcion para reinciar el juego
function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    //idnicar mensaje de inicio
    //generar numero aleatorio
    //inicializar numero intentos
    condicionesIniciales();
    //deshabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();

