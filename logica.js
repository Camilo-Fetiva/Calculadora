// SECUENCIA

// Variables
let numero1= 0;
let numero2= 0;
let resultado= 0;

// Desarrollo
numero1 = prompt ('Ingrese el primer número');
operacion = prompt ('Ingrese la operacion deseada');
numero2 = prompt ('Ingrese el segundo número');

if(operacion =='+'){
    resultado = parseFloat(numero1) + parseFloat (numero2);
    alert('El resultado es: ' + numero1 + '+' + numero2 + ' es ' + resultado);
}else if(operacion == '-') {
    resultado = parseFloat(numero1) - parseFloat (numero2);
    alert('El resultado es: ' + numero1 + '-' + numero2 + ' es ' + resultado);
}
else if(operacion == '/') {
    resultado = parseFloat(numero1) / parseFloat (numero2);
    alert('El resultado es: ' + numero1 + '/' + numero2 + ' es ' + resultado);
}
else if(operacion == '*'){
    resultado = parseFloat(numero1) * parseFloat (numero2);
    alert('El resultado es: ' + numero1 + '*' + numero2 + ' es ' + resultado);
}
