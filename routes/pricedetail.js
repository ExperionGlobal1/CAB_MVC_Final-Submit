const express =require('express');
const cc = require('../controllers/priceController');

const router = express.Router()

router.get('/pricedetail', cc.index);

module.exports = router;