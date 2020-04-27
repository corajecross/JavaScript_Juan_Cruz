//Objeto Calculadora
var Calculadora = { 
    //Display de la calculadora
    display: document.getElementById('display'),
    //Numero en display
    valorDisplay: '0',
    init: (function(){
        this.eventosTeclado();
    }),
    //Asignación de eventos al teclado de la calculadora
    eventosTeclado: function(){
        //Teclado numerico
        document.getElementById('0').addEventListener('click', function(){
            Calculadora.ingresaNumero('0');
        });
        document.getElementById('1').addEventListener('click', function(){
            Calculadora.ingresaNumero('1');
        });
        document.getElementById('2').addEventListener('click', function(){
            Calculadora.ingresaNumero('2');
        });
        document.getElementById('3').addEventListener('click', function(){
            Calculadora.ingresaNumero('3');
        });
        document.getElementById('4').addEventListener('click', function(){
            Calculadora.ingresaNumero('4');
        });
        document.getElementById('5').addEventListener('click', function(){
            Calculadora.ingresaNumero('5');
        });
        document.getElementById('6').addEventListener('click', function(){
            Calculadora.ingresaNumero('6');
        });
        document.getElementById('7').addEventListener('click', function(){
            Calculadora.ingresaNumero('7');
        });
        document.getElementById('8').addEventListener('click', function(){
            Calculadora.ingresaNumero('8');
        });
        document.getElementById('9').addEventListener('click', function(){
            Calculadora.ingresaNumero('9');
        });
        document.getElementById('punto').addEventListener('click',function(){
            Calculadora.ingresaPunto();
        });
        document.getElementById('sign').addEventListener('click', function(){
            Calculadora.ingresaSigno();
        });
        //Teclado de operaciones
        //document.getElementById('mas');
        //document.getElementById('menos');
        //document.getElementById('por');
        //document.getElementById('dividido');
        //document.getElementById('igual');
        //Teclado de otras opciones
        //document.getElementById('on');
    },
    //Ingresar e imprimir el numero en el display
    ingresaNumero: function(valor){
        //Verifica que el numero no tenga mas de 8 caracteres
        if(this.valorDisplay.length < 8){
            //Verifica si el valor en el display es 0
            if(this.valorDisplay == '0'){
                this.valorDisplay = '';
                this.valorDisplay += valor;
            }
            else{
                this.valorDisplay += valor;
            }
            Calculadora.impPantalla(this.valorDisplay);
        }
    },
    //Ingresar e imprimir el punto que indica decimal
    ingresaPunto: function(){
        //Verifica que la cadena no tenga un punto
        if(this.valorDisplay.indexOf('.') == -1){
            this.valorDisplay += '.';
            Calculadora.impPantalla(this.valorDisplay);
        }
    },
    //Cambia e imprime el signo en el numero
    ingresaSigno: function(){
        //Verifica que el numero sea diferente de 0
        if(this.valorDisplay != '0'){
            var aux;
            //Verifica si el numero es negativo
            if(this.valorDisplay.charAt(0) == '-'){
                aux = this.valorDisplay.slice(1);
            }
            else{
                aux = '-' + this.valorDisplay;
            }
            this.valorDisplay = '';
            this.valorDisplay = aux;
            Calculadora.impPantalla(this.valorDisplay);
        }
    },
    //Imprimir en el display
    impPantalla: function(valor){
        Calculadora.display.innerHTML = valor;
    }
};
Calculadora.init();
/*Teclado Operaciones
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
}*/

