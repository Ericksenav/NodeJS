function saludar(nombre){
  return `hola, ${nombre}`;
}

function saludarInvoltar(){
  return `hola Mundo`;
}

// module.exports.saludar = saludar;
// module.exports.saludarInvoltar = saludarInvoltar;

module.exports = {
  saludar: saludar,
  saludarInvoltar: saludarInvoltar

};