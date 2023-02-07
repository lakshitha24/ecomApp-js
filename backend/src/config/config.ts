import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const SERVER_NO = process.env.PORT_NUM || 3000;

export const config = {
    mongoDB:{
        URL : MONGODB_URL
    },
    serverPort:{
        port : SERVER_NO
    }
}
