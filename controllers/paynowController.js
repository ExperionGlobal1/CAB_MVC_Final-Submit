const BookingDetail = require('../models/bookingdetail')
// const bookingdetail = require("../models/bookingdetail")

module.exports.payNow =  async(req, res, next) => {
    const result = await BookingDetail.findByPk(req.params.id)
    console.log("line 6")
    let id = req.params.id
    console.log(id)
    res.render('paynow',{data:req.params.id});
}



module.exports.download = async(req, res, next) => {
    console.log("line 15");
    let id = req.params.id
    const result = await BookingDetail.findByPk(id);
    console.log(result)
    res.render('download',result);
}