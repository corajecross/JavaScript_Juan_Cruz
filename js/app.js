//Variable de almacenamiento del numero, resultado y la operación
var numero = '0';
var resultado = '';
var operacion = '';
var vacio = '';
//Variable de control si se tiene una operación pendiente
var ctrlOp = false;
//Display de la calculadora
var display = document.getElementById('display');
//Teclado Numérico
var tecla0 = document.getElementById('0');
var tecla1 = document.getElementById('1');
var tecla2 = document.getElementById('2');
var tecla3 = document.getElementById('3');
var tecla4 = document.getElementById('4');
var tecla5 = document.getElementById('5');
var tecla6 = document.getElementById('6');
var tecla7 = document.getElementById('7');
var tecla8 = document.getElementById('8');
var tecla9 = document.getElementById('9');
//Teclado Operaciones
var teclaSuma = document.getElementById('mas');
var teclaResta = document.getElementById('menos');
var teclaMultiplicacion = document.getElementById('por');
var teclaDivision = document.getElementById('dividido');
var teclaIgual = document.getElementById('igual');
//Teclado de otras opciones
var teclaOn = document.getElementById('on');
var teclaMasMenos = document.getElementById('sign');
var teclaPunto = document.getElementById('punto');
//Se añade una función para el evento click de la tecla 0
tecla0.addEventListener('click', function(){
    if(numero == '0'){
        return;
    }
    else{
        numero += '0';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 1
tecla1.addEventListener('click', function(){
    if(numero == '0'){
        numero = '1';
        impDisplay(numero);
    }
    else{
        numero += '1';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 2
tecla2.addEventListener('click', function(){
    if(numero == '0'){
        numero = '2';
        impDisplay(numero);
    }
    else{
        numero += '2';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 3
tecla3.addEventListener('click', function(){
    if(numero == '0'){
        numero = '3';
        impDisplay(numero);
    }
    else{
        numero += '3';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 4
tecla4.addEventListener('click', function(){
    if(numero == '0'){
        numero = '4';
        impDisplay(numero);
    }
    else{
        numero += '4';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 5
tecla5.addEventListener('click', function(){
    if(numero == '0'){
        numero = '5';
        impDisplay(numero);
    }
    else{
        numero += '5';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 6
tecla6.addEventListener('click', function(){
    if(numero == '0'){
        numero = '6';
        impDisplay(numero);
    }
    else{
        numero += '6';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 7
tecla7.addEventListener('click', function(){
    if(numero == '0'){
        numero = '7';
        impDisplay(numero);
    }
    else{
        numero += '7';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 8
tecla8.addEventListener('click', function(){
    if(numero == '0'){
        numero = '8';
        impDisplay(numero);
    }
    else{
        numero += '8';
        impDisplay(numero);
    }
});
//Se añade una función para el evento click de la tecla 9
tecla9.addEventListener('click', function(){
    if(numero == '0'){
        numero = '9';
        impDisplay(numero);
    }
    else{
        numero += '9';
        impDisplay(numero);
    }
});
//Se añade la función para la suma que se ejecuta al hacer click en el boton correspondiente
teclaSuma.addEventListener('click', function(){
    if(ctrlOp == false){
        resultado = numero;
        operacion = 'suma';
        ctrlOp = true;
        numero = '0';
        impDisplay(vacio);
    }
    else{
        Calculadora(operacion,resultado,numero);
        operacion = 'suma';
        numero = '0'
        impDisplay(vacio);
    }   
});
//Se añade la función para la resta que se ejecuta al hacer click en el boton correspondiente
teclaResta.addEventListener('click', function(){
    if(ctrlOp == false){
        resultado = numero;
        operacion = 'resta';
        ctrlOp = true;
        numero = '0';
        impDisplay(vacio);
    }
    else{
        Calculadora(operacion,resultado,numero);
        operacion = 'resta';
        numero = '0'
        impDisplay(vacio);
    }   
});
//Se añade la función para la multipliación que se ejecuta al hacer click en el boton correspondiente
teclaMultiplicacion.addEventListener('click', function(){
    if(ctrlOp == false){
        resultado = numero;
        operacion = 'multiplicacion';
        ctrlOp = true;
        numero = '0';
        impDisplay(vacio);
    }
    else{
        Calculadora(operacion,resultado,numero);
        operacion = 'multiplicacion';
        numero = '0'
        impDisplay(vacio);
    }   
});
//Se añade la función para la division que se ejecuta al hacer click en el boton correspondiente
teclaDivision.addEventListener('click', function(){
    if(ctrlOp == false){
        resultado = numero;
        operacion = 'division';
        ctrlOp = true;
        numero = '0';
        impDisplay(vacio);
    }
    else{
        Calculadora(operacion,resultado,numero);
        operacion = 'division';
        numero = '0'
        impDisplay(vacio);
    }   
});
//Función que se ejecuta al hacer click en el boton de igual
teclaIgual.addEventListener('click', function(){
    Calculadora(operacion,resultado,numero);
    impDisplay(resultado);
});
//Función que se ejecuta al hacer click en la tecla On
teclaOn.addEventListener('click', function(){
    numero = '0';
    resultado = '';
    operacion = '';
    ctrlOp = false;
    impDisplay(numero);
});
//Función que se ejecuta al hacer click en la tecla signo
//Función que se ejecuta la hacer click sobre le boton punto
teclaPunto.addEventListener('click', function(){
    if(numero.indexOf('.') == -1){
        numero += '.';
        impDisplay(numero);
    }
});
//Función para realizar el cálculo
function Calculadora(op,num1,num2){
    switch(op){
        case 'suma':
            resultado = parseFloat(num1) + parseFloat(num2);
            resultado.toString();
            break;
        case 'resta':
            resultado = parseFloat(num1) - parseFloat(num2);
            resultado.toString();
            break;
        case 'multiplicacion':
            resultado = parseFloat(num1) * parseFloat(num2);
            resultado.toString();
            break;
        case 'division':
            resultado = parseFloat(num1) / parseFloat(num2);
            resultado.toString();
            break;
    }
}
//Función para imprimir en el display
function impDisplay(num){
    if(num.length > 8){
        var numImp = num.substr(0,7);
        display.innerHTML = numImp;
    }
    else{
        display.innerHTML = num;
    }
}

