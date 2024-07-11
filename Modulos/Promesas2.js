// ejemplo promesas

const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};

const miPedidoDePizza = new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso Su pizza esta en camino.');
        }else {
            reject('Ocurrio un error. Por favor intente nuevamente.');
        }
    },3000);
});

//Method Chaining es una forma de escribir metodo en secuencia 
miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido,rechazarPedido);
// lo mismo que el otro codigo
