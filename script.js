let numero = parseInt(prompt("Ingresa la temperatura en grados celsius: "));

function fahrenheit(){
  let resultado =  9/5*numero+32.;
  console.log("El resultado en F° es: " + resultado);
  return resultado
}
function kelvin(){
  let resultado = numero+273.15;
  console.log("El resultado en K° es: " + resultado);
  return resultado
}

alert(fahrenheit());
alert(kelvin());