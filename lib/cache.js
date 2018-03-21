const cache = {};

function getCache(key) {
    return new Promise((resolve) => {
        if (cache[key]) {
            return resolve(cache[key]);
        }
        return resolve(null);
    });
}

function saveCache(pkg) {
    return new Promise((resolve) => {
        cache[pkg.name] = pkg;
        resolve(pkg);
    });
}

module.exports = {
    getCache,
    saveCache,
};