const { Router } = require('express');
const router = Router()

router.get('/', (_, res) => {
    res.send("adonde practice")
});
router.use('/cities', require('./city'));
router.use('/places', require('./place'));

module.exports = router;