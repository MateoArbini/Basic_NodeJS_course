const fs = require('fs');
// Este es un metodo para leer un archivo.
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})