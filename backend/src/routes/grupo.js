const { Router } = require('express');
const router = Router();

const { getGrupos, createGrupo, deleteGrupo, updateGrupo, getGrupo } = require('../controllers/grupo.controller');

router.route('/')
    .get(getGrupos)
    .post(createGrupo);

router.route('/:id')
    .delete(deleteGrupo)
    .get(getGrupo)
    .put(updateGrupo);

module.exports = router;
 