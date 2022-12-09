
const Cab = require('../models/bookingdetail');
const sequelize=require('../models/db')

// -------------admin control-----------------
module.exports.adminindex = (req, res, next) => {
    Cab.findAll().then(cabBook => {
        res.render('adminbooking', {
            data: cabBook,
            identity: req.identity.user
        });
    })
}

// -------------------------------------------------
module.exports.index = async(req, res, next) => {
   
    Cab.findAll({}).then(cabBook => {
        return res.render('booking-index', {
            data: cabBook,
            identity: req.identity.user
        });
    })
}

module.exports.booking = (req, res, next) => {
    res.render('booking-create');
}

module.exports.bookingPost = (req, res, next) => {

    Cab.create({
        pickup: req.body.pickup,
        destination: req.body.destination,
        dot: req.body.dot,
        time: req.body.time,
        passenger: req.body.passenger
       
    })
        .then(CabBookFromDb => {
            
            sequelize.query('SELECT * FROM cabmvc.bookingdetails ORDER BY id DESC LIMIT 1').then(data=>{data=data.pop();res.redirect('/paynow/'+data[0].id)})

            
        })

}

module.exports.bookingUpdate = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(CabBookFromDb => {
            res.render('booking-update', {
                data: CabBookFromDb
            });
        });

}
module.exports.bookingUpdatePost = async (req, res, next) => {

    await Cab.update(
        {
            pickup: req.body.pickup,
            destination: req.body.destination,
            dot: req.body.dot,
            time: req.body.time,
            passenger: req.body.passenger
           
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/adminbookingdetail");

}

module.exports.bookingDelete = async (req, res, next) => {
    let id = req.params.id;
    let CabBookFromDb = await Cab.findByPk(id);
    if (CabBookFromDb != null) {
        await Cab.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/adminbookingdetail");
    }
}
