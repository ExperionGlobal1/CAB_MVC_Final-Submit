const price = require('../models/pricedetail');

//price
module.exports.index = (req, res, next) => {
  
    price.findAll().then(cabPrice => {
console.log(JSON.parse(JSON.stringify(cabPrice)))
        res.render('price-index', {
            data: JSON.parse(JSON.stringify(cabPrice)),
            // identity: req.identity.user
        });
    })
}