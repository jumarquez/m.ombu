const { Schema, model } = require('mongoose');

const combustibleSchema = new Schema({
    fecha: Date,
    grupo: String,
    flota: String,
    movil: String,
    chofer: String,
    unidad: String,
    cant: Number,
    importe: Number,
    importeu$s: Number,
    proveedor: String,
    tipo: String
});

module.exports = model('Combustible', combustibleSchema);
