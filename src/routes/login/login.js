import {Router} from "express";
import client from "../../server/database.js";

const loginRoutes=Router();

loginRoutes.get("/",function(req,res){
    if(res.status(200)){
        res.render('login.html')
    }
});

loginRoutes.post('/',function(req,res){

    var query=`SELECT username,password 
               FROM login_credentials 
               WHERE username='${req.body.username}'
               AND password='${req.body.password}'`;

    client.query(query,(err,res)=>{
        if(err){
            console.log(err.stack);
            console.log('senha incorreta');
        } else {
            if(res.rowCount>0){
                console.log('oi');
            }
            else{
                console.log('senha incorreta');
            }
        }
     })    
});

export {loginRoutes};
