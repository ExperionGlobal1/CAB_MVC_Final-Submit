const sequelize = require('./db');
const {DataTypes} = require('sequelize');


const PriceDetail = sequelize.define('PriceDetail',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    pickup:{
        type:DataTypes.STRING(15),
        allowNull:false
        
    },
    destination:{
        type:DataTypes.STRING(16),
        allowNull:false

    },
   
     price:{
        type:DataTypes.FLOAT(20),
        allowNull:false
       

    },
    // Booking_id:{
    //     type:DataTypes.INTEGER(10),
    //     allowNull:false,
    //     references :{
    //         model:"bookingdetails",
    //         key:"id"
    //     }

    // }
   
    

});

module.exports = PriceDetail;

