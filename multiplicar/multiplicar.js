//Al principio se definen los require
const fs = require('fs');
//los archivos propios se llaman ./
//Los archivos de node van con solo nombre
const colors = require('colors/safe');

let listarTablaMultiplicar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Èl valor para la base = '${base}' no es un número`);
            return;
        }
        let str = '';
        for (let cont = 1; cont <= limite; cont++) {
            str += `${cont} * ${base} = ${cont*base}\n`;
        }
        console.log('================'.green);
        console.log(`   Tabla del ${base}`.green);
        console.log('================'.green);
        resolve(str);
    })
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        let file = `tabla-${base}.txt`;
        fs.writeFile(`tablas/${file}`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`El archivo ${colors.green(file)} ha sido guardado!`);

        });
    })
}


module.exports = {
    crearArchivo,
    listarTablaMultiplicar
}