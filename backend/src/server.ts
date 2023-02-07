import dotenv from "dotenv";
import http from "http";
import {app} from './app';
import { config} from './config/config';
import  { log } from './logs/logger';

dotenv.config();

const port = config.serverPort.port || 8000;

const server = http.createServer(app);

server.listen(port, () => {
  log.info(`[Server]: I am running at http://localhost:${port}`);
});

export default server;