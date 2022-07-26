import { Router } from 'express'



const credentials={
    username:'Henrique',
    password:'123'
}

Router.post('/login',(req,res)=>{
    if(req.body.email === credentials.username && req.body.password === credentials.password){
        console.log('Logado');
    } else {
        console.log('credenciais erradas');
    }
})