function add(x1, x2) {
    return x1 + x2;
}

function sub(x1, x2) {
    return x1 - x2;
}

function mul(x1, x2) {
    return x1 * x2;
}

function div(x1, x2) {
    if (x2 === 0) {
        console.log('No se puede dividir entre 0')
    }
    return x1 / x2;
}

exports.add = add; // De esta manera, es que nosotros podemos exportar las funciones desde esta carpeta, a todas aquellas que la requieran
exports.mul = mul; // De esta manera, es que nosotros podemos exportar las funciones desde esta carpeta, a todas aquellas que la requieran
exports.sub = sub; // De esta manera, es que nosotros podemos exportar las funciones desde esta carpeta, a todas aquellas que la requieran
exports.div = div; // De esta manera, es que nosotros podemos exportar las funciones desde esta carpeta, a todas aquellas que la requieran