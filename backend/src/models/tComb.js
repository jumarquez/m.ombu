const { Schema, model } = require('mongoose');

const tCombSchema = new Schema({
    nombre: String,
    des: String,
    pais: Number,
    bandera: String,
    unidad: String
});

module.exports = model('tComb', tCombSchema);