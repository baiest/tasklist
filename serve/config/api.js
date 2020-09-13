const express = require('express');
const app = express();
const port = 3000;
const { Task } = require('../models');


app.get('/', (req, res) => {
    Task.findAll()
        .then(result => res.send(JSON.stringify(result, null, 2)))

});

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto %d', port)
});