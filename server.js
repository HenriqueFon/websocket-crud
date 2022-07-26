import app from './src/server/app.js';
import client from './src/server/database.js'

client.connect();

app.disable("x-powered-by");

const port=process.env.DB_PORT || 8000;

app.listen(port,()=>{
        console.log(`Servidor escutando em http://localhost:${port}`);
})

