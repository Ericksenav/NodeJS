 function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
 }

// mostrarTema('node.js');

//Higher-Order Programming nos permite tratar a las funciones como objetos que se pueden pasar como argumento y retornar desde otras funciones
// setTimeout() settimeout hace que la función se ejecute despues del periodo de esepra declarado 1 segundo = 1000 milisegundos

// setTimeout(mostrarTema, 5000,'Node.js');  

//  setImmediate() Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo más pornto posible)

// console.log('antes de setImmediate');
// setImmediate(mostrarTema,'Node.js');
// console.log('despues de setImmediate()');

//setInterval() se usa para ejecutar codigo un numero infinito de veces con un retraso específico de milisegundos.

setInterval(mostrarTema, 1500, 'Node.js');