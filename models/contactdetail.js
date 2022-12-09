const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const ContactDetail = sequelize.define('ContactDetail',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    firstname:{
        type:DataTypes.STRING(15),
        allowNull:null,
        
    },
    lastname:{
        type:DataTypes.STRING(16),
        allowNull:null

    },
    country:{
        type:DataTypes.STRING(12),
        allowNull:null
    
    },
    subject:{
        type:DataTypes.STRING(100),
        allowNull:null

    }
   
   

});

module.exports = ContactDetail;

