const db = require('../db.js');
const _ = require('lodash');
const APIerror = require('../lib/apierror');
const packageModel = require('../models/packages.model');


function list(req, res) {
  packageModel.list() // packageModel.list() es una promesa.
  // Consumimos la promesa:
  .then((data) => {
    return res.json(data);
  })
  .catch( (error) => { // function((error) => next(error))
    return next(error); 
  });
}

function get(req, res, next) {
  if (!req.params.name){
    return next(new APIerror('no params name'));
  }
  return packageModel.get(req.params.name)
  .then(data => res.json(data));
};

function create(req, res, next) {
  if (!req.body.name){
        const error = new APIerror('no name', 500);
       return next(error);
    }
    db.push(req.body);
    return res.json(req.body);
};

module.exports = {
  list,
  get,
  create
};