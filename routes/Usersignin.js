
const express =require('express');
const cc = require('../controllers/loginController');
const sign = require('../controllers/SignUpController');


const router = express.Router()


router.get('/login', cc.login);
router.post('/login', cc.loginPost);
router.get('/register', sign.create);
router.post('/register', sign.createPost);
router.get('/logout', cc.logout);


module.exports = router;








