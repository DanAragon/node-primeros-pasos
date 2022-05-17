

const argv = require ('yargs')
.option(
    'b',{
        alias:'base',
        type:'number',
        demandOption:true
    }
).option(
    'l',{
        alias:'listado',
        type:'boolean',
        default:false
    }
).option(
    'lim',{
        alias:'limite',
        type:'number',
        demandOption:true
    }
).check((argv,options) =>{
    console.log(options);
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    return true;
})
.argv;

module.exports = argv;