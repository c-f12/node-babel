const express = require('express');
const app = express();
const db = require('./db.js');
console.log(db[0])
const _ = require('lodash');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const APIerror = require('./lib/apierror');
const packagesRouter = require('./routes/packages.route');

app.use(bodyParser.json({limit: '50mb'}));

app.use('/packages', packagesRouter);

app.use((req,res,next) => {
    console.log('entra');
    return next();
})

app.use((error, req, res, next) => {
    if(error instanceof APIerror){
        return res.status(error.status).json({message: error.message})
    }
    return next(error);
})

app.use((error, req, res, next) => {
    return res.status(500).json({message: 'unknown'});
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));


/*
app.get('/packages', (req,res) => {
    return res.json(db);
});

//con esta ruta sacamos los name de cada objeto
app.get('/packages/:name', (req,res) => {
    console.log(req.params.name);
    
    //const name = req.params.name.split('-').join(' ');

    // find en mi base de datos el que tenga este name:
    return res.json(_.find(db, {'name': req.params.name}));
});

app.post('/packages', (req,res,next) => {
    if(!req.body.name){
        //return res.status(httpStatus.BAD_REQUEST).json({error: 'No name'});
        const error = new APIerror('no name', httpStatus.BAD_REQUEST);
        //le pasamos el error y lo captura en app.use:
       return next(error);
    }
    
    db.push(req.body);
    return res.json(req.body);
});

*/


