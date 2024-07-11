let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVCistas": 45642,
    "numLikes": 21123,
    "temas": [
        "javaScript",
        "Node.js"
    ],
    "esPublico": true
}


// Objeto ->  Cadena de Caracteres
// cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

console.log(infoCursoJSON.titulo)

// cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

console.log(infoCursoObjeto.titulo);