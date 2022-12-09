
const express =require('express');
const cc = require('../controllers/bookController');


const router = express.Router()

router.get('/bookingdetail', cc.index);
router.get('/booking', cc.booking);
router.post('/booking', cc.bookingPost);
router.get('/bookingupdate/:id', cc.bookingUpdate);
router.post('/bookingupdate/:id', cc.bookingUpdatePost);
router.get('/bookingDelete/:id', cc.bookingDelete);


module.exports = router;