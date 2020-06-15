const { Schema, model } = require('mongoose');

const turnosSchema = new Schema({
    grupo: {
        type: String,
        trim: true
    },
    flota: {
        type: String,
        trim: true
    },
    movil: {
        type: String,
        trim: true
    },
    cum: {
        type: String
    },
    chofer: {
        type: String,
        trim: true
    },
    recaudacion: {
        type: Number,
    },
    porcentaje: {
        type : Number,
    },
    vSinCosto: {
        type: Number,
    },
    vConCosto: {
        type: Number
    },
    combus: {
        type: Number
    },
    gastos: {
        type: Number
    },
    dia: Date,
    hIni: Number,
    hFin: Number,
    kmIni: Number,
    kmFin: Number,
    rendicion: Number,
    consCombus: Number,
    rendComb: Number,
    
})
module.exports = model('turnos', turnosSchema)