// LEER CARPETAS EN NODE:
const _ = require('lodash');
const fs = require('fs');
const util = require('util');
const readFolder = util.promisify(fs.readdir);
const folder = './node_modules';
const getPackageJson = require('./getpackagejson');


/* 

Usar promisify es lo mismo que usar una promesa normal:

new Promise((resolve, reject) => {
    fs.readdir('folder', (error,data) => {
        if(error){
            return reject(error);
        }
        return resolve(data);
    })
}) 

*/


function getPackagesJson(){
    // resolvemos la promesa de getListFolders:
    return getListFolders()
    .then(getPackagesFromList)
    .then(filterPackagesNull)
    .then((data) => console.log(data)); //-> devuelve undefined?? y handle errors??
}

// Filtrar y coger solo los que tengan package json
function filterPackagesNull(array){
    return _.filter(array, (element) => element !== null)
}

function getPackagesFromList(list){
    console.log('list:', list);

    const promises = [];
    list.forEach((element) => {
        promises.push(resolveVersion(element));
    });
    /*resolvemos todas las promesas que hemos metido en el array promises
    y nos devuelve un array con la promesa resuelta: */
    return Promise.all(promises);
}


// Coger los package json dentro de cada una de las carpetas que están en node_modules:
function resolveVersion(folder){
    return getPackageJson(folder);
}

function getListFolders(){
    //devuelve una promesa:
    return readFolder(folder);
}

getPackagesJson();