const express =require('express');
const cc = require('../controllers/driverController');


const router = express.Router()

router.get('/driverdetail', cc.index);
router.get('/driver', cc.create);
router.post('/driver', cc.createPost);
router.get('/driverUpdate/:id', cc.update);
router.post('/driverUpdate/:id', cc.updatePost);
router.get('/driverDelete/:id', cc.delete);


module.exports = router;