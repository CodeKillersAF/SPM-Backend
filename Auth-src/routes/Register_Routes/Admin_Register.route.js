const router = require('express').Router();

const { adminRegister } = require('../../controllers/Auth.controller');

router.post('/register-admin', async(req, res) => {
    await adminRegister(req.body, res);
});

module.exports = router;