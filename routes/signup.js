
const express =require('express');
const cc = require('../controllers/SignUpController');


const router = express.Router()

router.get('/userdetail', cc.index);
router.get('/create', cc.create);
router.post('/create', cc.createPost);
router.get('/update/:id', cc.update);
router.post('/update/:id', cc.updatePost);
router.get('/delete/:id', cc.delete);


module.exports = router;