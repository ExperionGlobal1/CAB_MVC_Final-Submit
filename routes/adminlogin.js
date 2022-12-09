
const express =require('express');
const cc = require('../controllers/adminloginController');
const sign = require('../controllers/adminController');


const router = express.Router()


router.get('/alogin', cc.login);
router.post('/alogin', cc.loginPost);
router.get('/aregister', sign.create);
router.post('/aregister', sign.createPost);

router.get('/alogout', cc.alogout);


module.exports = router;








