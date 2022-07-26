import {Router} from "express";
import client from "../../server/database.js";

const registerRoutes=Router();

registerRoutes.get("/",function(req,res){
    if(res.status(200)){
        res.render('register.html')
    }
});

registerRoutes.post('/', function(req,res){
    
    var today=new Date();
    var dd=String(today.getDate()).padStart(2,'0');
    var mm=String(today.getMonth()+1).padStart(2,'0');
    var yyyy=today.getFullYear();
    today=yyyy+'/'+mm+'/'+dd;
    
    var query=`INSERT INTO login_credentials
                (username,password,email,created_on)
                values('${req.body.username}',
                       '${req.body.password}',
                       '${req.body.email}',
                       '${today}')`;
    
    client.query(query,(err,res)=>{
        if(err){
            console.log(err.stack);
        } else {
            console.log(res.rows[0])
        }
    })
    
})

export {registerRoutes};
