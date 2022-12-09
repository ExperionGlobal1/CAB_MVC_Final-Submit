const express =require('express');
const cc = require('../controllers/paynowController');

const router = express.Router()


router.get('/paynow/:id', cc.payNow);
router.get('/download/:id', cc.download);



module.exports = router;