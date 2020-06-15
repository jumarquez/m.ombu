const tCombCtrl = {};

const TComb = require('../models/tComb');

tCombCtrl. getTCombs = async (req, res) => {
    try {
        const tCombs = await TComb.find();
        res.json(tCombs);
    }
    catch (err) {
        res.status(400).json({
            error:err
        });
    }
}
   
tCombCtrl.createTComb = async (req, res) => {
    try {
        const { nombre, des, pais, bandera, unidad } = req.body;
        const newTComb = new TComb ({ nombre, des, pais, bandera, unidad})
        await newTComb.save();
        res.json('Tipo Guardado')
    }
    catch (e) {
        res.json(e.errmsg);
    }
};

tCombCtrl.deleteTComb = async (req, res) => {
    const { id } = req.params;
    await TComb.findByIdAndDelete(id);
    res.json('Tipo Borrado');
};

tCombCtrl.getTComb = async (req, res) => {
    try {
        const { id } = req.params;
        const tComb = await TComb.findById(id);
        res.json(tComb)
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    };
}

tCombCtrl.updateTComb = async ( req, res) => {
    try {
        const { _id,  nombre, des, pais, bandera, unidad } = req.body;
        const upTComb = new TComb({ _id,  nombre, des, pais, bandera, unidad  });
        await TComb.findByIdAndUpdate(req.params.id, upTComb);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    };
};

module.exports = tCombCtrl;