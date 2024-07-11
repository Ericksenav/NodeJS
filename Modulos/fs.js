// file system  módulo que contiene funcionalidad muy útil para trabajar con el sistema de archivos
// se puede leer, modificar, copiar, eliminar y cambiar el nombre de un archivo. todos los métodos de este móduilo son asíncronos por defecto pero puedes escoger versiones síncronas de estos métodos agregando Sync a sus nombres.  fs.rename() - fs.renameSync() es el mismo solo que se ejecuta de manera sincrona

const fs = require ('fs');

// fs.readFile('index.html','utf-8',(err,contenido) =>{
//     if (err){
//         throw err; //throw corta la ejecución
//     } else {
//         console.log(contenido);
//     }
// });

// fs.rename('index.html', 'main.html',(err) =>{
//     if (err) {
//         throw err;
//     }
//     console.log('Nombre cambiado exitosamente.');
// });

//agregar contenido al final de un archivo.

// fs.appendFile('index.html','<p>Hola</p>',(err) =>{
//     if(err){
//         throw err;
//     }
//     console.log('Archivo actualizado.');
// });

// Reemplazar todo el contenido del archivo.

fs.writeFile('index.html','contenido nuevo',(err) =>{
    if(err){
        throw err;
    }
    console.log('contenido reemplazado exitosamente.');
});