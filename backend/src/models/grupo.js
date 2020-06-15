const { Schema, model} = require('mongoose');

const grupoSchema = new Schema({
    nomGrp: {
        type: String,
        unique: true,
        trim: true
    },
    nomAdm: {
        type: String, 
        trim: true
    },
    cuit: String,
    eMail: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    adress:{
        street: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country:{
            type: String,
            trim: true
        }
    },
    telefono: {
        fijo:{
            type: String,
            trim: true
        },
        movil:{
            type: String,
            trim: true
        }
    },
    fIni: Date,
},
    {
        timestamps: true
    }
);

module.exports = model('Grupo', grupoSchema)
