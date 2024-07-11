//Objeto que representa el eventual resultado(o error) de una operación asíncrona Promise = Promesa , cuando creamos una promesa esta en estado pending(pendiente) luego puede pasar a los estados de fulfilled (cumplida) o rejected (Rechazada)  esos son los 3 posibles estados . Una promesa es un objeto de JavaScript. Ese objeto se asocia a una callback function, una funcion que se ejecuta cuando se completa el proceso asincrono para procesar el resultado.  Las Promesas tienen un método .then(), con el cual podemos decidir qué occure cuando se completa la promesa(éxito o error). 
// Callback function (Función  de respuesta) Función que se pasa a otra función como argumento y luego se ejecuta dentro de la función esterna.
const promesaCumplida =  false;

const miPromesa = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if (promesaCumplida){
            resolve('Promesa Cumplida!');
        }else {
            reject('Promesa Rechazada...');
        }
    },3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
};
 
miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);

