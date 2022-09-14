import client from "../server/database.js";

var authUser = function(req,res,next) {
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
                next();
            }
            else{
                console.log('senha incorreta');
            }
        }
     })    
  }

  export default authUser;


