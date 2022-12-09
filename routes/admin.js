
const express =require('express');
const cc = require('../controllers/adminController');

const book = require('../controllers/bookController');

const cab = require('../controllers/CabController');


const router = express.Router()
//for admin 
router.get('/admindetail', cc.index);
router.get('/admin', cc.create);
router.post('/admin', cc.createPost);
router.get('/adminupdate/:id', cc.update);
router.post('/adminupdate/:id', cc.updatePost);
router.get('/admindelete/:id', cc.delete);

//for admin booking control
router.get('/adminbookingdetail', book.adminindex);
router.get('/adminbookupdate/:id', book.bookingUpdate);
router.post('/adminbookupdate/:id', book.bookingUpdatePost);
router.get('/adminbookdelete/:id', book.bookingDelete);

// for admin cab control
router.get('/admincabdetail', cab.adminindex);
router.get('/admincabupdate/:Cab_Id', cab.update);
router.post('/admincabupdate/:Cab_Id', cab.updatePost);
router.get('/admincabdelete/:Cab_Id', cab.delete);

//welcome
router.get('/welcome', cc.welcomeindex);




module.exports = router;






