const router = require('express').Router();
const { adminAuth } = require('../../controllers/Auth.controller');

router.get('/admin-protected', adminAuth, async(req, res) => {
    return res.send("Welcome Admin");
})

module.exports = router;