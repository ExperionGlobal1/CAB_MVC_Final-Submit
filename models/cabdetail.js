const sequelize = require('./db');
const {DataTypes} = require('sequelize');



const CabDetail = sequelize.define('CabDetail',{
    Cab_Id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    Cab_No:{
        type:DataTypes.STRING(10),
        allowNull:null,
        
    },
    Seat_Capacity:{
        type:DataTypes.INTEGER(5),
        allowNull:null,
        
    },
    Model:{
        type:DataTypes.STRING(16),
        allowNull:false

    },
    driver_id:{
        type:DataTypes.INTEGER(10),
        allowNull:false,
        onDelete:"cascade",
        references :{
            model:"driverdetails",
            key:"id"
        }

    }
   

});

module.exports = CabDetail;

