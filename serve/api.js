const express = require('express');
const app = express();
const port = 3000;
const { Task } = require('./models');
const cors = require('cors');
/*
const nuevo = async() => {
    await Task.create({ description: 'Limpiar la casa', realizada: false });
}
nuevo()
    .then(res => console.log('Ingresada'))
*/
app.use(cors());
app.get('/', (req, res) => {
    Task.findAll()
        .then(result => res.send(JSON.stringify(result, null, 2)))

});

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto %d', port)
});