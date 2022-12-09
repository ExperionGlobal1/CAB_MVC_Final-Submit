const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const DriverDetail = sequelize.define('DriverDetail',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    Name:{
        type:DataTypes.STRING(25),
        allowNull:null
        
    },
    Email:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true

    },
    Password:{
        type:DataTypes.STRING(20),
        allowNull:false
       

    },
    Mobile:{
        type:DataTypes.STRING(12),
        allowNull:false,
        unique:true

    },
    Address:{
        type:DataTypes.STRING(100),
        allowNull:null
       

    },
    DOB:{
        type:DataTypes.DATE,
        allowNull:null

    },
   
    Experience:{
        type:DataTypes.STRING(100),
        allowNull:null

    },
    DL:{
        type:DataTypes.STRING(20),
        allowNull:null
    },
    Exp_DL:{
        type:DataTypes.DATE,
        allowNull:null
      

    }
   

});

module.exports = DriverDetail;

