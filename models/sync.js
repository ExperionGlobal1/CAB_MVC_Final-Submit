const UserDetail= require('./userdetail');
const BookingDetail= require('./bookingdetail');
const DriverDetails = require('./driverdetail');
const CabDetail = require('./cabdetail');
const AdminDetail = require('./admindetail');
const ContactDetail = require('./contactdetail');
const PriceDetail = require('./pricedetail');
// const InvoiceDetail = require('./Invoicedetail');


UserDetail.sync({alter:true});
BookingDetail.sync({alter:true});
DriverDetails.sync({alter:true});
CabDetail.sync({alter:true});
AdminDetail.sync({alter:true});
ContactDetail.sync({alter:true});
PriceDetail.sync({alter:true});
// InvoiceDetail.sync({alter:true});
