const { Router } = require('express');
const router = Router();

const { getGrupos, createGrupo, deleteGrupo, updateGrupo, getGrupo } = require('../controllers/grupo.controller');

router.route('/')
    .get(getGrupos)
    .post(createGrupo);

router.route('/:id')
    .delete(deleteGrupo)
    .put(updateGrupo)
    .get(getGrupo); 

module.exports = router;
 