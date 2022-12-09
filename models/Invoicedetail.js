const sequelize = require('./db');
const {DataTypes} = require('sequelize');



const InvoiceDetail = sequelize.define('InvoiceDetail',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    pickup:{
        type:DataTypes.STRING(15),
        allowNull:null
        
    },
    destination:{
        type:DataTypes.STRING(16),
        allowNull:null

    },
   
    dot:{
        type:DataTypes.DATE,
        allowNull:null

    },
    time:{
        type:DataTypes.TIME,
        allowNull:null

    },
    passenger:{
        type:DataTypes.STRING(20),
        allowNull:null
       

    },
    model:{
         type:DataTypes.STRING(20),
         allowNull:null
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:null

    },
    alloted_Driver:{
        type:DataTypes.STRING(30),
        allowNull:null

    }
    

});

module.exports = InvoiceDetail;

