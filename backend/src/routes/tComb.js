const { Router } = require('express');
const router = Router();

const { getTCombs, createTComb, deleteTComb, updateTComb, getTComb } = require('../controllers/tComb.controller');

router.route('/')
    .get(getTCombs)
    .post(createTComb)

router.route('/:id')
    .delete(deleteTComb)
    .get(getTComb)
    .put(updateTComb);

module.exports = router;
