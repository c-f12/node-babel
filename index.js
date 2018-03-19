/* const modulo = require('./modulo');
console.log(modulo.suma(2,5));

// Callbacks

const callback = function(msg){
    console.log(msg);
};

function hola(cb){
    console.log(cb('hola'));
}

hola(callback); */

/*
function suma(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!a || !b){
                reject('No existe');
            }
            resolve(a + b);
        }, 2000);
    });
}


const array = [[2,3],[4,5]];
 const promesas = [];
array.forEach((par) => promesas.push(suma(par[0], par[1])));
Promise.all(promesas).then(console.log);

array.map((result) => suma());


 promesas.map((promise) => {
    promise.then(console.log);
}); 

Promise.all(promesas)
.then((result) => {
    console.log(result);
});

Promise.map(promesas, (result) => result*20)
.then(console.log);

function sumaCB(cb,a,b){
    setTimeout(() => {
        cb(a+b);
    });
}


sumaCB(console.log, 3, 4); */

/* // Al primer then hay que pasarle una promesa
suma(5,3)
.then((resultado) => {
    console.log(`Resultado: ${resultado}`);
    return suma(resultado, 5); //return 10. No es necesario meter una promesa para hacer el siguiente then().
})
.then((resultado2) => {
    console.log(`Resultado2: ${resultado2}`);
})
.catch((err) => {
    console.error(`Error: ${err}`);
}); */

function suma(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!a || !b){
                reject('No existe');
            }
            resolve(a + b);
        }, 2000);
    });
}

const sumas = [];
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile); //convierte en promesa

/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    const arr1 = resultado.split(',');
    sumas.push(arr1);

    fs.readFile('./prueba2.txt', 'utf8', (err, resultado) => {
        const arr2 = resultado.split(',');
        sumas.push(arr2);
        console.log(sumas);
    });
}); */

/* function leerFichero(fichero){
    return new Promise((resolve) => {
        fs.readFile(fichero, 'utf8', (err, resultado) => {
            if(err){
                return reject(err);
            }
            const arr1 = resultado.split(',');
            return resolve(resultado);
        });
    });
} */

/* function leerFichero(fichero) {
    return readFile(fichero, 'utf8')
    .then((resultado) => {
        const arr1 = resultado.split(',');
        return arr1;
    })
}

leerFichero('./prueba.txt')
.then(console.log)
.catch(console.error); */

const request = require('request');

function getUrl(url){
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error){
                return reject(error);
            }
            if(!response || response.statusCode !== 200){
                return reject({error: 'statusCode', code: response.statusCode});
            }
            try{
                
            }
            catch{
                
            }
            return resolve(JSON.parse(body));
        });
    });
}

getUrl('http://www.mocky.io/v2/5aafa9ca2d00005a006efeff')
.then((result) => {
  console.log(result);  
})
.catch(console.error);