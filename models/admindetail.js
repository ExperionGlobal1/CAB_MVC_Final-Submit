const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const AdminDetail = sequelize.define('AdminDetail',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstname:{
        type:DataTypes.STRING(15),
        allowNull:null  
    },
    lastname:{
        type:DataTypes.STRING(16),
        allowNull:null
    },
    dob:{
        type:DataTypes.DATE,
        allowNull:null
    },
    mobile:{
        type:DataTypes.STRING(12),
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true
    },
    Password:{
        type:DataTypes.STRING(20),
        allowNull:null
    }
   

});

module.exports = AdminDetail;

