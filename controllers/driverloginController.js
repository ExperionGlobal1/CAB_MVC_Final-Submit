const Cab = require('../models/driverdetail');

module.exports.login = (req, res, next) => {
    res.render('driverlogin');
}
module.exports.loginPost = async (req, res, next) => {
    const { email, password } = req.body;
    const userFromDb = await Cab.findOne({
        where: { email: email, password: password }
    });
   
    if (userFromDb == null) {
        return res.render('driverlogin', { message: 'No Driver with this email or password was found.' })
    }

    req.session.userId = userFromDb.dataValues.id;
    req.session.role = 2;

    res.redirect('/bookingdetail');
}

module.exports.dlogout = async(req,res,next)=>{

    req.identity.isAuthenticated = false;

    req.identity.driver = null;
    req.session.driverId = null;
    req.session.role = null;
    req.session=null
    res.redirect('/');
        

}

module.exports.register = (req, res, next) => {
    res.render('driver-create');
}

module.exports.registerPost = async (req, res, next) => {
    const { name,email,password,mobile,address,exp,dl,dob,exp_dl } = req.body;

    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.render('driverlogin', { message: 'Already registered.' });
    }
    await User.create({
        Name: name,
        Email: email,
        Password: password,
        Mobile: mobile,
        Address: address,
        DOB: dob,
        Experience:exp,
        Dl:dl,
        Exp_DL:exp_dl
       
    });

    res.redirect('/driverlogin');
}
