import {request, Router} from "express";
import client from "../../server/database.js";
import authUser from "../../middlewares/auth.js";

const loginRoutes=Router();

loginRoutes.get("/",function(req,res){
    if(res.status(200)){
        res.render('login.html')
    }
});
  
loginRoutes.post('/',authUser,function(req,res){
    if(res.status(200)){
        res.render('register.html')
    }
});

export {loginRoutes};
