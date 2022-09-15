import {request, Router} from "express";
import client from "../../server/database.js";
import authUser from "../../middlewares/auth.js";
import { signedCookies } from "cookie-parser";

const loginRoutes=Router();

//MiddleWare de validação de cookie
function validateCookie(req,res,next) {
    const { cookies } = req;
    if('session_id' in cookies) { //Verifica se cookie existe
        console.log('Session ID Exists.');
        if(signedCookies(req.cookies.session_id)) {
            console.log("Validate cookie");
            next();
        } else {
            console.log("Not Found");
        }
    } else {
        res.status(403).send({msg: 'Not Authenticated'});
    }
}

loginRoutes.get("/",function(req,res){
    if(res.status(200)){
        res.render('login.html')
    }
});
  
loginRoutes.post('/',validateCookie,authUser,function(req,res){
    if(res.status(200)){
        res.cookie('session_id','123456');
        res.render('register.html')
    }
});

export {loginRoutes};
