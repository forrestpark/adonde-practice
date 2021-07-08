const { Router } = require('express');
const { route } = require('../../app');
const router = Router();
const ctrl = require('./place.ctrl');

router.get('/findall', ctrl.findall_places );
router.post('/create', ctrl.create_places );

module.exports = router;


