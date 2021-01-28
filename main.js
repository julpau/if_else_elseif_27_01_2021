let num1 = 200;
let num2 = 100;

console.warn('Comparar si dos números son iguales');
if(num1 == num2){
    console.log(`Los números ${num1} y ${num2} son iguales`)
}else{
    console.log(`Los números ${num1} y ${num2} son diferentes`)
}

console.warn('Comparar si dos números son iguales, mayores o menores');
if(num1 == num2){
    console.log(`Los números ${num1} y ${num2} son iguales`);
}else if(num1 < num2){
    console.log(`El número ${num1} es menor que el número ${num2}.`);
}else{
    console.log(`El número ${num1} es mayor que el número ${num2}.`);
}

console.warn('Combinar if y && - combinar if y ||');
if(num1<num2 && num2>num1){
    console.log(`El número1 ${num1} es menor que el número ${num2}.`);
}else if(num1<num2 || !(num2<=num1)){
    console.log(`El número1 ${num1} es menor o igual que el número2 ${num2}.`);
}else{
    console.log(`Opción no válida.`);
}

//USANDO EL SWITCH
let usuario = prompt('Por favor ingrese su nombre de usuario')
switch(usuario){
    case 'Hersain':
        console.log(acceso_correcto());
        break;
    case 'Juli':
        console.log(acceso_denegado());
        break;
    default:
        console.log(matar());
        break;
}

function acceso_correcto(){
    return 'Acceso permitido';
}
function matar(){
    return 'KO';
}
function acceso_denegado(){
    return 'Acceso no permitido';
}
