var bodyParser= require('body-parser');
var Sequelize=require('sequelize');
var tokenController= require('./app/controllers/tokenController');
var userModel= require('./app/models/userModel');

var express=require('express'),
    app=express(),
    port=process.env.PORT || 3000;

app.use(bodyParser.json())

const sequelize=new Sequelize('text_crud','root', 'LaContraseña',{
    host:'localhost',
    dialect:'mysql'
});

sequelize
    .authenticate()
    .then(()=>{
        console.log('connection has been established successfully');
        }).catch(err=>{
            console.error('unable to connect to the database', err);
        });

    tokenController(app, userModel(sequelize));

app.listen(port);

console.log('todo list RESTful API server started on '+ port);