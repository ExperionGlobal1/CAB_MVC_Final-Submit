
const Con = require('../models/contactdetail');


module.exports.home = (req, res, next) => {
    res.render('home');
}



//contact
module.exports.contact_index = (req, res, next) => {
    Con.findAll().then(cabSignup => {
        res.render('contact-index', {
            data: cabSignup
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('contact');
}

module.exports.createPost = (req, res, next) => {
// console.log("hello")
    Con.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        subject: req.body.subject

    })
        .then(cabSignupFromDb => {
            res.redirect("/")
        })

}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let cabSignupFromDb = await Con.findByPk(id);
    if (cabSignupFromDb != null) {
        await Con.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/contact_index");
    }
}
