const express = require('express');
const parser = require('body-parser');

const homeRoute = require('./routes/home');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/Usersignin');

const bookRoute = require('./routes/book');

const driverRoute = require('./routes/driver');
const driverlogin = require('./routes/driverlogin');

const CabDetail = require('./routes/CabDetail');

const AdminSignup = require('./routes/admin');
const AdminLogin = require('./routes/adminlogin');
//------------------------------------------
const PriceRoute = require('./routes/pricedetail');

const InvoiceRoute = require('./routes/paynow');


//------------------------------------------------
const auth = require('./middlewares/authenticationMiddleware');
const cookieSession = require('cookie-session');
const { engine } = require('express-handlebars');
const path = require('path');




// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge:  24 * 60 * 60 * 1000
}));

app.use(auth);

app.use(homeRoute);

app.use(signupRoute);
app.use(signinRoute);

app.use(bookRoute);

app.use(driverRoute);
app.use(driverlogin);

app.use(CabDetail);

app.use(AdminSignup);
app.use(AdminLogin);
//-------------------------------------------------
app.use(PriceRoute);

app.use(InvoiceRoute);



//----------------------------------------------
app.listen(80);