const argv = require('./config/yargs').argv;

const { crearArchivo, listarTablaMultiplicar } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTablaMultiplicar(argv.base, argv.limite).then(resultado => {
            console.log(resultado);
        }).catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(archivo);
        }).catch(e => console.log(e));
        break;
    default:
        console.log('El comando ingresado no es valido');
}






//let argumento = process.argv;
//let parametro = argumento[2];
//let base = parametro.split('=')[1];
//console.log(process);

/*let base = argv.base;
crearArchivo(base).
then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err));
    */