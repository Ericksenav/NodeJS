function saludar(nombre){
  return `hola, ${nombre}`;
}

function saludarholamundo(){
  return `hola Mundo`;
}

// module.exports.saludar = saludar;
// module.exports.saludarholamundo = saludarholamundo;

module.exports = {
  saludar: saludar,
  saludarholamundo: saludarholamundo

};