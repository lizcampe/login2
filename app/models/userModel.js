var Sequelize= require('sequelize');
module.exports=(sequelize) => {
    const User = sequelize.define('usuarios',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true},
    nombre:{
        type:Sequelize.STRING,
        primaryKey: false},
    email:{
        type:Sequelize.STRING,
        primaryKey: false},
    role:{
        type:Sequelize.STRING,
        primaryKey: false},
    ubicacion   :{
        type:Sequelize.STRING,
        primaryKey: false},
    user    :{
        type:Sequelize.STRING,
        primaryKey: false},
    password   :{
        type:Sequelize.STRING,
        primaryKey: false},


}, {timestamps:false});
    return User;

}