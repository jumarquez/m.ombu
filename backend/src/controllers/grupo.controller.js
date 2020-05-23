const grupoCtrl = {};

const Grupo = require('../models/grupo');

grupoCtrl.getGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find();
        res.json(grupos);
    }
    catch (err) {
        res.status(400).json({ 
            error: err
        });
    }
};
 
grupoCtrl.createGrupo = async (req,res) => {
    try {
        const { nomGrp, nomAdm, cuit, eMail, password, adress:{ street, state, country}, telefono:{fijo, movil}, fIni } = req.body;
        const newGrp = new Grupo({ nomGrp, nomAdm, cuit, eMail, password, adress:{ street, state, country}, telefono:{fijo, movil}, fIni })
        await newGrp.save();
        res.json('Grupo Guardado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

grupoCtrl.deleteGrupo = async (req, res) => {
    const { id } = req.params;
    await Grupo.findByIdAndDelete(id);
    res.json('Grupo Borrado');
}

module.exports = grupoCtrl;