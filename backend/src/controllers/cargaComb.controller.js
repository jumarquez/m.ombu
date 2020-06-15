const cargaCombCtrl = {};

const CargaComb = require('../models/cargaComb');

cargaCombCtrl.getCargaComb = async (req, res) => {
    try {
        const cargaCombs = await CargaComb.find();
        res.json(cargaCombs);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

cargaCombCtrl.createCargaComb = async (req, res) => {
    try {
        const { fecha, grupo, flota, movil, chofer, unidad, cant, importe, importeu$s, proveedor, tipo };
        const newCargaComb = new CargaComb({ fecha, grupo, flota, movil, chofer, unidad, cant, importe, importeu$s, proveedor, tipo  })
        await newCargaComb.save();
        res.json('Carga Registrada');
    }
    catch (e) {
        res.status(400).json({ 
            error: err
        });
    }
};

cargaCombCtrl.deleteCargaComb = async (req, res) => {
    const { id } = req.params;
    await CargaComb.findByIdAndDelete(id);
    res.json('Carga Borrada')
};

cargaCombCtrl.getCargaComb = async (req, res) => {
    try {
        const { id } = req.params;
        const cargaComb1 = await CargaComb.findById(id);
        res.json(cargaComb1) 
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    };
}

cargaCombCtrl.updateCargaComb = async (req, res) => {
    try {
        const { fecha, grupo, flota, movil, chofer, unidad, cant, importe, importeu$s, proveedor, tipo};
        const newCargaComb = new CargaComb({ fecha, grupo, flota, movil, chofer, unidad, cant, importe, importeu$s, proveedor, tipo  })
        await grupo.findByIdAndUpdate(req.params.id, newCargaComb);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    };
};

module.exports = cargaCombCtrl;