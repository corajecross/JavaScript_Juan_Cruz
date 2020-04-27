//Objeto Calculadora
var Calculadora = { 
    //Display de la calculadora
    display: document.getElementById('display'),
    //Se almacena el número en  el display
    valorDisplay: '0',
    //Variables donde se almacenan los con los que se van a operar
    numero1: '0',
    numero2: '0',
    resultado: '0',
    //Variable donde se almacena la operación a realizar
    operacion: '',
    //Variable donde se controla la operación
    ctrlOp: false,
    //Inicio
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
        document.getElementById('mas').addEventListener('click', function(){
            Calculadora.ingresaOperacion('suma');
        });
        document.getElementById('menos').addEventListener('click', function(){
            Calculadora.ingresaOperacion('resta');
        });
        document.getElementById('por').addEventListener('click', function(){
            Calculadora.ingresaOperacion('multiplicacion');
        });
        document.getElementById('dividido').addEventListener('click', function(){
            Calculadora.ingresaOperacion('division');
        });
        document.getElementById('igual').addEventListener('click', function(){
            Calculadora.botonIgual();
        });
        //Teclado de otras opciones
        document.getElementById('on').addEventListener('click', function(){
            Calculadora.limpiarPantalla();
        });
    },
    //Ingresar e imprimir el numero en el display
    ingresaNumero: function(valor){
        //Verifica que el numero no tenga mas de 8 caracteres
        if(this.valorDisplay.length < 8){
            //Verifica si el valor en el display es 0
            if(this.valorDisplay == '0' || this.valorDisplay == ''){
                this.valorDisplay = '';
                this.valorDisplay += valor;
            }
            else{
                this.valorDisplay += valor;
            }
            Calculadora.impPantalla();
        }
    },
    //Ingresar e imprimir el punto que indica decimal
    ingresaPunto: function(){
        //Verifica que la cadena no tenga un punto
        if(this.valorDisplay.indexOf('.') == -1){
            this.valorDisplay += '.';
            Calculadora.impPantalla();
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
            Calculadora.impPantalla();
        }
    },
    //Se ejecuta al oprimir un boton de operacion
    ingresaOperacion: function(op){
        if(this.ctrlOp == false){
            this.numero1 = this.valorDisplay;
            this.operacion = op;
            this.ctrlOp = true;
            this.valorDisplay = '';
        }
        else{
            this.numero2 = this.valorDisplay;
            Calculadora.calcularResultado(this.operacion,this.numero1,this.numero2);
            this.operacion = op;
            this.numero1 = this.resultado
            this.valorDisplay = '';
        }
        Calculadora.impPantalla();
    },
    //Realiza la operacion correspondiente
    calcularResultado: function(op,num1,num2){
        switch(op){
            case 'suma':
                this.resultado = parseFloat(num1) + parseFloat(num2);
                this.resultado.toString();
                break;
            case 'resta':
                this.resultado = parseFloat(num1) - parseFloat(num2);
                this.resultado.toString();
                break;
            case 'multiplicacion':
                this.resultado = parseFloat(num1) * parseFloat(num2);
                this.resultado.toString();
                break;
            case 'division':
                this.resultado = parseFloat(num1) / parseFloat(num2);
                this.resultado.toString();
                break;
        }
    },
    //Función para el boton igual
    botonIgual: function(){
        this.numero2 = this.valorDisplay;
        Calculadora.calcularResultado(this.operacion, this.numero1, this.numero2);
        this.ctrlOp = false;
        this.numero1 = this.resultado;
        this.valorDisplay = this.resultado;
        Calculadora.impPantalla();
    },
    //Limpiar pantalla
    limpiarPantalla: function(){
        this.valorDisplay = '0';
        this.numero1 = '0';
        this.numero2 = '0';
        this.resultado = '0';
        this.operacion = '';
        this.ctrlOp = false;
        Calculadora.impPantalla();
    },
    //Imprimir en el display
    impPantalla: function(){
        Calculadora.display.innerHTML = this.valorDisplay;
    }
};
Calculadora.init();