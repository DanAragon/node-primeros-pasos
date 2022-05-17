const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5,l = false, limite = 10) => {
console.log('====================================='.green);
console.log('          Tabla de: ',colors.blue(base));
console.log('====================================='.green);

let salida = '';
   try {
    for(let i = 1; i <=limite;i++){
        salida += (`${base} x ${i} = ${base * i}\n`);
        if(l){
            console.log(salida);
        }
    }

    fs.writeFileSync(`tabla-${base}.txt`,salida);

    let nombreArchivo = `tabla-${base}`;
    return nombreArchivo;
   } catch (error) {
       throw error;
   }
}

module.exports = {
    crearArchivo
}