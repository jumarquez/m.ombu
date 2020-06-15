const { Schema, model} = require('mongoose'),

const viajesSchema = new Schema({
    fecha: Date,
    importe: Number,
    autorizo: String,
    sinCosto: Boolean,
    movil: String,
    chofer: String,
    importeru$s: Number,
    movil: String,
    flota: String,
    grupo: String,
    des: String,
    turno: String
})
module.exports = model('Viajes', viajesSchema)