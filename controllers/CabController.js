const Cab = require('../models/cabdetail');


// -------------Driver show cab booked detail-----------------
module.exports.cabbookindex = (req, res, next) => {
    Cab.findAll().then(cabBook => {
        res.render('cabbook-index', {
            data: cabBook,
            // identity: req.identity.user
        });
    })
}
module.exports.cabcreate = (req, res, next) => {
    res.render('cab-create');
}
module.exports.cabcreatePost = (req, res, next) => {

    Cab.create({
        Cab_No: req.body.Cab_No,
        Seat_Capacity: req.body.Seat_Capacity,
        Model: req.body.Model,
        driver_id:req.body.driver_id


    })
        .then(CabFromDb => {
            res.redirect("/cabbookindex")
        })

}
module.exports.cabupdate = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(CabFromDB => {
            res.render('cab-update', {
                data: CabFromDB
            });
        });

}
module.exports.cabupdatePost = async (req, res, next) => {

    await Cab.update(
        {
            Cab_No: req.body.Cab_No,
            Seat_Capacity: req.body.Seat_Capacity,
            Model: req.body.Model,
            driver_id:req.body.driver_id

        },
        {
            where: { Cab_Id: req.params.Cab_Id }
        }
    )
    res.redirect("/cabbookindex");

}
module.exports.cabdelete = async (req, res, next) => {
    let Cab_Id = req.params.Cab_Id;
    let driverFromDB = await Cab.findByPk(Cab_Id);
    if (driverFromDB != null) {
        await Cab.destroy({
            where: {
                Cab_Id: Cab_Id
            }
        });
        res.redirect("/cabbookindex");
    }
}



// ----------------------------------------------------

// ------------AdminControl---------------
module.exports.adminindex = (req, res, next) => {
    
    Cab.findAll().then(cab => {
        res.render('admincab', {
            data: cab,
            // identity: req.identity.user
        });
    })
}

module.exports.index = (req, res, next) => {
    
    Cab.findAll().then(cab => {
        res.render('cab-index', {
            data: cab,
            // identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('cab-create');
}



module.exports.createPost = (req, res, next) => {

    Cab.create({
        Cab_No: req.body.Cab_No,
        Seat_Capacity: req.body.Seat_Capacity,
        Model: req.body.Model,
        driver_id:req.body.driver_id


    })
        .then(CabFromDb => {
            res.redirect("/cabdetail")
        })

}


module.exports.update = async (req, res, next) => {
    Cab.findByPk(req.params.Cab_Id)
        .then(CabFromDB => {
            res.render('cab-update', {
                data: CabFromDB
            });
        });

}

module.exports.updatePost = async (req, res, next) => {

    await Cab.update(
        {
            Cab_No: req.body.Cab_No,
            Seat_Capacity: req.body.Seat_Capacity,
            Model: req.body.Model,
            driver_id:req.body.driver_id

        },
        {
            where: { Cab_Id: req.params.Cab_Id }
        }
    )
    res.redirect("/admincabdetail");

}


module.exports.delete = async (req, res, next) => {
    let Cab_Id = req.params.Cab_Id;
    let driverFromDB = await Cab.findByPk(Cab_Id);
    if (driverFromDB != null) {
        await Cab.destroy({
            where: {
                Cab_Id: Cab_Id
            }
        });
        res.redirect("/admincabdetail");
    }
}

