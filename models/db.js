const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("cabmvc","root","Experion@123",{
 host:"localhost",
 dialect:"mysql"
 
});

module.exports=sequelize ;