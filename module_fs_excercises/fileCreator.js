const fs = require('fs'); //Modulo FileSystem

// Este es un metodo para esciribir en un archivo, y crearlo si es que no existe. El primero es la ruta y el segundo es el contenido
fs.writeFile('./texto.txt', 'Linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
    }
);