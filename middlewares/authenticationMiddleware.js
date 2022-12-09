
const user = require('../models/userdetail');
const driver = require('../models/driverdetail');
const admin = require('../models/admindetail');


module.exports = async (req, res, next) => {
        req.identity = {
            isAuthenticated: false,
            user: null
        }
        
        // console.log(req.session);
        if (req.url == "/login" || req.url == "/register" ||req.url == "/create" ||req.url == "/driver" ||req.url == "/admin" ||req.url == "/contact_create"
        ||req.url == "/dlogin" || req.url == "/dregister" ||req.url == "/alogin" || req.url == "/aregister"|| req.url == "/") 
        {
            return next();
        }
        // if (req.url == "/dlogin" || req.url == "/dregister" ||req.url == "/create" ||req.url == "/driver" ||req.url == "/admin" ||req.url == "/contact_create" || req.url == "/") {
        //     return next();
        // }
        // if (req.url == "/alogin" || req.url == "/aregister"||req.url == "/create" ||req.url == "/driver" ||req.url == "/admin" ||req.url == "/contact_create" || req.url == "/" ) {
        //     return next();
        // }
        var role = req.session.role;

        // console.log(role);
        if (role == 1) {

            let id = req.session.userId;
            if (!id || id == null) {
                return res.redirect("/login")
            }
            let userFromDb = await user.findByPk(id);
          
            if (userFromDb == null) {
                return res.redirect("/login")
            }
            req.identity.isAuthenticated = true;
            req.identity.user = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                firstname:userFromDb.dataValues.firstname,
                lastname:userFromDb.dataValues.lastname
            }
            return next();
        }


        else if (role == 2) {

            let id = req.session.userId;
            if (!id || id == null) {
                return res.redirect("/dlogin")
            }
            let userFromDb = await driver.findByPk(id);
      
            if (userFromDb == null) {
                return res.redirect("/dlogin")
            }
            req.identity.isAuthenticated = true;
            req.identity.user = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                Name: userFromDb.dataValues.Name

            }
            return next();
        }


        else {
           
            let id = req.session.adminId;
            
            if (!id || id == null) {
                return res.redirect("/alogin")
            }
            let userFromDb = await admin.findByPk(id);
          
          
            if (userFromDb == null) {
                return res.redirect("/alogin")
            }
            req.identity.isAuthenticated = true;
            req.identity.user = {
                id: userFromDb.dataValues.id,
                Password: userFromDb.dataValues.Password,
                email: userFromDb.dataValues.email,
                firstname: userFromDb.dataValues.firstname,
                lastname: userFromDb.dataValues.lastname

            }
            return next();
        }
    }

