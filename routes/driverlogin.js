
const express =require('express');
const cc = require('../controllers/driverloginController');
const sign = require('../controllers/driverController');


const router = express.Router()


router.get('/dlogin', cc.login);
router.post('/dlogin', cc.loginPost);
router.get('/dregister', sign.create);
router.post('/dregisterpost', sign.createPost);

router.get('/dlogout', cc.dlogout);


module.exports = router;








