const Cab = require('../models/userdetail');

module.exports.login = (req, res, next) => {
    res.render('cabsignin');
}
module.exports.loginPost = async (req, res, next) => {
    const { email, Password } = req.body;
    const userFromDb = await Cab.findOne({
        where: { email: email, password: Password }
    
    });
    
   
    if (userFromDb == null) {
        return res.render('cabsignin', { message: 'No user with this email or password was found.' });
    }

    req.session.userId = userFromDb.dataValues.id;
    req.session.role = 1;
    res.redirect('/cabdetail');
}
module.exports.logout = async(req,res,next)=>{
    req.identity.isAuthenticated = false;
    req.identity.user = null;
    req.session.userId = null;
    req.session.role = null;
    req.session=null
    res.redirect('/');
        

}

module.exports.register = (req, res, next) => {
    res.render('signup-create');
}

module.exports.registerPost = async (req, res, next) => {
    const { firstname, lastname,dob,mobile, email, Password } = req.body;

    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('cabsignin', { message: 'Already registered.' });
    }
    await User.create({
        firstName: firstname,
        lastName: lastname,
        Date_of_Birth: dob,
        Mobile: mobile,
        email: email,
        password: Password
       
       
    });

    res.redirect('/cabsignin');
}
