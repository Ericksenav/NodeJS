//Modulo Timer 

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

// mostrarTema('Node.js');

setTimeout(mostrarTema, 3000,'Node.js');

// setImmediate se usar para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible).
// setImmediate( funcion, argumento1, argumento2);
//se ejecuta despues del codigo sincrono 
// se ejecuta lo mas rapido posible de forma asincrona

setImmediate()