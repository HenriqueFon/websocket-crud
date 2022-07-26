import pkg from 'pg';
import "dotenv/config"
const {Client}=pkg;

const client = new Client({
    user:process.env.DB_USERNAME,
    host:process.env.HOST_ADRESS,
    database:process.env.DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
})

export default client;




