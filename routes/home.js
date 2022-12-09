const express =require('express');
const cc = require('../controllers/homeController');

const router = express.Router()


router.get('/', cc.home);


//contact
router.get('/contact_index', cc.contact_index);
router.get('/contact_create', cc.create);
router.post('/contact_create', cc.createPost);
router.get('/contact_delete/:id', cc.delete);


module.exports = router;

