const router = require('express').Router();
const account = require('./controller.js');

router.get('/signIn/:username/:password', account.signIn);
// router.get('/signInToken', account.signInToken);
// router.post('/newAccount', account.newAccount);

module.exports = router;