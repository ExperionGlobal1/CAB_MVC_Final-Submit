const Cab = require('../models/userdetail');

module.exports.index = (req, res, next) => {
    Cab.findAll().then(cabSignup => {
        res.render('signup-index', {
            data: cabSignup,
            identity: req.identity.user
        });
    })
}
module.exports.create = (req, res, next) => {
    res.render('signup-create');
}

module.exports.createPost = (req, res, next) => {

    Cab.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        Password: req.body.Password
       
    })
        .then(cabSignupFromDb => {
            res.redirect("/login")
        })

}

module.exports.update = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(cabSignupFromDB => {
            res.render('signup-update', {
                data: cabSignupFromDB
            });
        });

}
module.exports.updatePost =async (req, res, next) => {

    await Cab.update(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            mobile: req.body.mobile,
            email: req.body.email,
            Password: req.body.Password
            
        },
        {
            where: { id: req.params.id }
           
        }
    )
    res.redirect("/userdetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let cabSignupFromDb = await Cab.findByPk(id);
    if (cabSignupFromDb != null) {
        await Cab.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/userdetail");
    }
}
