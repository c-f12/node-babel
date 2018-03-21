app.use((req,res,next) => {
    //console.log('use');

    const promise = new Promise((resolve) => resolve('hola'));
    promise.then((result) => {
        req.hola = "hola";
        next();
    })

    // next(); - si no tengo un next no pasa a la siguiente ruta.
    // return res.send('fallo'); si hago este return el de app.get no lo devuelve
});

/* req - request: lo que nos van a preguntar
res - response: la respuesta que vamos a dar
next - pasar al siguiente que matcheo. */


// si usamos app.all o app.use encima de app.get, no va a llegar a entrar en app.get

function login(req,res,next) {
    res.status(401).send('login incorrecto');
}

app.post('/users', (req, res, next) => {
    console.log(req.params.id);
    return res.json({ user:'hola' });
});

app.get('/users/:id', (req, res, next) => {
    //console.log('get/');
    console.log(req.params.id);
    return res.json(req.params.id); // send this as a response

    next(); // si pasamos aqui un next, salta al siguiente
});
