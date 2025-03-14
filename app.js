const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ExamenTecnoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB exitosa');
});