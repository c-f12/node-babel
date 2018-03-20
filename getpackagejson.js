// LEER FICHEROS EN NODE:

const fs = require('fs'); //leer ficheros en node
const util = require('util');
const readFile = util.promisify(fs.readFile); 
//promisify convierte una funcion en una promesa. Convierte readFile en una promesa.
//const url = `./node_modules/${nameFolder}/package.json`;

//const path = require('path');

/*
    PRIMER MÉTODO:

    function getPackageJson(){
        return readFile(url, 'utf8')
        .then((data) => {
            return JSON.parse(data); //Lo parseamos para pasarlo a objeto y poder sacar las propiedades de este.
        })
        .then(parserData)
    }


    function parserData(data){
        return{
            name: data.name,
            description: data.description,
            version: data.version,
            license: data.license,
        }
    }

    getPackageJson();
*/

// SEGUNDO MÉTODO - simplificado:
function getPackageJson(nameFolder){
    return readFile(`./node_modules/${nameFolder}/package.json`, 'utf8')
    .then(convertStringToJson)
    .then(parserData)
    // si la carpeta no tiene package json devuelve null:
    .catch(() => null);
}

function convertStringToJson(data){
    return JSON.parse(data);
}

function parserData(data){
    return{
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license,
    }
}

// getPackageJson();

module.exports = getPackageJson;


/* function getPackageJson(url){
    return new Promise((resolve, reject) => {
        fs.readFile( url, 'utf8', (err,resultado) => {
            if(err){
                return reject(err);
            }
            return resolve(resultado);
        });
    });
};

getPackageJson(url)
.then((resultado) => {
    console.log(resultado);
})
.catch(console.error); */
