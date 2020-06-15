const { Schema, model } = require('mongoose');

const flotasSchema = new Schema({
    nombre: String,
    grupo: String,
    propietario: {
        nombre: String,
        apellido: String,
        street: String,
        state: String,   
    },
    tel: {
        fijo: String,
        movil: String
    },
    porcentaje: Number,
    fIni: Date,
    estado: String
})