const express = require('express');
const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller');
const libCache = require('../lib/cache');


//Comprobar que llegamos bien:
router.route('*')
    .get((req,res,next) => {
        console.log('llega:', {'name': req.path});
        return next();
    });


function getCachePackage(req, rest, next) {
    libCache.get(req.params.name)
    .then((pkg) => {
        if(pkg) {
            console.log('cache');
            return res.json(pkg);
        }
        return next();
    });
}

function setPackage(req, res, next) {
    libCache.setPackage().then();
}


router.route('/') //< empezamos por packages porque le pasamos esa ruta en express.js.
    .get(packagesCtrl.list)
    .post(packagesCtrl.create);

router.route('/:name')
    .get(getCachePackage, packagesCtrl.get,
    (req,res,next) => {
        console.log('entra post get');
        next();
    });


module.exports = router;