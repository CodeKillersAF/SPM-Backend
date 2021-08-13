const router = require('express').Router();

const { adminLogin } = require('../../controllers/Auth.controller');

router.post('/login-admin', async(req, res) => {
    await adminLogin(req.body , res);
});


module.exports = router;