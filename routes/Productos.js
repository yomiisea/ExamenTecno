const express = require('express');
const router = express.Router();
const Producto = require('../models/producto.model');


router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria
        });

        await nuevoProducto.save();
        res.status(201).send(nuevoProducto);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        res.status(200).send(producto);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        res.status(200).send('Producto eliminado');
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;