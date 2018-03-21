const db = require('../db');

function list() {
    return new Promise((resolve) => {
        resolve(db);
    });
}

function get(name) {
    return new Promise((resolve) => {
        resolve(_.find(db, { name }));
    });
}


module.exports = {
    list,
    get,
};


/* function list() {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject(new APIerror('No db', 500));
        }
        resolve(db);
    });
} */
