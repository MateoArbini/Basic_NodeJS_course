const http = require('http') // importamos modulo http
const colors = require('colors')
// req hace referencia a la peticion que hace el cliente, y response hace referencia a la respuesta por parte del servidor
const app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hola Mundo</h1>');
    res.end();
});
const HOST = 'localhost';
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`.green) // Modulo colors que cambia el color de las letras
})


