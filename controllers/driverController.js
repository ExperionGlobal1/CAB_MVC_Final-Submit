
const Cab = require('../models/driverdetail');
module.exports.index = (req, res, next) => {
    Cab.findAll().then(driver => {
        res.render('driver-index', {
            data: driver,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('driver-create');
}

module.exports.createPost = (req, res, next) => {

    Cab.create({
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password,
        Mobile: req.body.mobile,
        Address: req.body.address,
        DOB: req.body.dob,
        Experience: req.body.exp,
        DL: req.body.dl,
        Exp_DL: req.body.exp_dl

    })
        .then(driverFromDb => {
            res.redirect("/dlogin")
        })

}

module.exports.update = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(driverFromDB => {
            res.render('driver-update', {
                data: driverFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Cab.update(
        {
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.password,
            Mobile: req.body.mobile,
            Address: req.body.address,
            DOB: req.body.dob,
            Experience: req.body.exp,
            DL: req.body.dl,
            Exp_DL: req.body.exp_dl
        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/driverdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let driverFromDB = await Cab.findByPk(id);
    if (driverFromDB != null) {
        await Cab.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/driverdetail");
    }
}
