const express =require('express');
const cc = require('../controllers/CabController');


const router = express.Router()

router.get('/cabdetail', cc.index);
router.get('/cab', cc.create);
router.post('/cab', cc.createPost);
router.get('/cabUpdate/:id', cc.update);
router.post('/cabUpdate/:id', cc.updatePost);
router.get('/cabDelete/:id', cc.cabdelete);

// -----------------for driver show cab booked detail--------------------
router.get('/cabbookindex', cc.cabbookindex);
router.get('/cabindex', cc.cabcreate);
router.post('/cabindex', cc.cabcreatePost);
router.get('/cabupdateindex/:id', cc.cabupdate);
router.post('/cabupdateindex/:Cab_Id', cc.cabupdatePost);
router.get('/cabdeleteindex/:Cab_Id', cc.cabdelete);


module.exports = router;