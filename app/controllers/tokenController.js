var jwt= require('jsonwebtoken');
module.exports=(app,userModel)=>{
app.post('/generate/token', function(req,res){});


  app.post('/generate/token', function(req,res){
        console.log('generando token')


 // verificar que el usuario exista en la tabla de cuentas
userModel.findOne({
    where:{
        user:req.body.user,
        password:req.body.password
    }
    }).then((resp)=> {
        console.log(resp)
        if (!resp){
            res.send({message:"usuario o contraseña incorrectos"})
        }else{
            claimUser={
                nombre:resp.nombre,
                email:resp.email,
                role:resp.role,
                ubicación:resp.ubicacion
            }
            const token=jwt.sign(claimUser, 'secretKey', {expiresIn:'1h'});
        console.log(token)
            res.send(token)
        }
    });

    //paso2: si el usuario existe consultar tabla usuarios para obtener
    //2.1su información y agregarla al token
    //2.2 generar el token en los claims info de usuario y caducidad de 30 min.
    //si el usuario no existe devolver error
});

app.post('/user', function (req,res){
    const authHeader=req.headers['authorization'];
    token=authHeader.replace('Bearer','')
    jwt.verify(token,'secretKey', function(err,token){
        if (err) {
            console.log('invalid token');
            res.status(401)
            res.send({message:'Unauthorized'});

        }else{
            console.log('valid token')
            if(token.role =='admin') { //revisa si el usuario tiene rol de admin
                console.log('user is admin')
                console.log(req.body)
                userModel.create(req.body).then((resp)=>{
                    //res.status(200);
                    res.send(resp);
                });
            } else{
                res.send({'No eres administrador'})
            }
        }
    });
});
}
