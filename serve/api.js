const express = require('express');
const app = express();
const port = process.env.port || 3000;
const { Task } = require('./models');
const cors = require('cors');
const bodyParser = require('body-parser');
/*
var corsOptions = {
    origin: 'http://localhost:8081/'
};

const nuevo = async() => {
    await Task.create({ description: 'Limpiar la casa', realizada: false });
}
nuevo()
    .then(res => console.log('Ingresada'))
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
    Task.findAll()
        .then(result => res.send(JSON.stringify(result, null, 2)))

});
app.post('/nuevo', (req, res) => {
    const nuevo = async() => {
        await Task.create({
            description: req.body.description,
            realizada: req.body.realizada,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    };
    nuevo()
        .then(() => {
            console.log('Agregado');
        })
        .catch(() => console.log('Hubo un error'))

    console.log(req.body);
    res.send(req.body);
});
module.exports = app.listen(port, () => {
    console.log('Servidor iniciado en el puerto %d', port)
});